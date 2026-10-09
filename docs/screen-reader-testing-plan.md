# Screen Reader Regression Testing Plan

**Date:** 2026-10-07
**Status:** Draft

## Background

Early NVDA testing of the new FileList upload states suggested that the states were hard to tell apart and hard to tie to the right file. We found and fixed several gaps by reading the code, but nothing stops similar gaps from coming back, or from appearing in other components.

The goal of this plan is a **regression baseline** for what assistive technology gets from our components. It does not replace testing with real screen readers and real users. Humans find the problems, and the automated tests make sure a fixed problem stays fixed.

## What we tried

A spike on `spike/screen-reader-regression` ran two approaches against real stories (TextField, CheckboxGroup, Select and FileList), in our existing Vitest browser tests.

### Accessibility tree snapshots

Vitest 4.1 has `toMatchAriaSnapshot` and `toMatchAriaInlineSnapshot` built in, no new dependency. They capture roles, names and some states (checked, disabled, expanded, level, pressed, selected) in a readable YAML-like format.

```yaml
- list "Uploaded files":
    - listitem:
        - text: resume.pdf 1.2 MB
        - button "Remove resume.pdf"
```

**The gap:** they don't capture descriptions, error messages, `invalid` or `required`. An invalid TextField is just `textbox "Label"`, so the link between a field and its error, the kind of gap we found in FileList, is invisible. The API is also marked experimental.

### Simulated screen reader

[`@guidepup/virtual-screen-reader`](https://github.com/guidepup/virtual-screen-reader) walks the rendered DOM with "next item", like a screen reader user in browse mode, and logs what it would say. It is built on the ARIA specs, not on NVDA.

```
"textbox, Label, Description Något blev fel, invalid"
"checkbox, Banan, Du måste välja en frukt Beskrivning, not checked, invalid"
"listitem, level 1, position 1, set size 3"
```

It reads names, descriptions, error messages, states, list positions and reading order, and it supports live regions. The output is plain text, so a change shows up as a readable diff in the PR.

**Its limits:** it is not NVDA. Browse mode details, verbosity settings and live region timing differ, and it reads some things a real screen reader would merge. For example, it reads a checkbox label both as the checkbox name and as separate text.

### Findings from the spike

Even on four components, the logs raise questions worth checking with real NVDA:

- **CheckboxGroup, invalid:** the group and its checkboxes read the description and the error in opposite orders. The group says "Beskrivning Du måste välja en frukt", every checkbox says "Du måste välja en frukt Beskrivning", and the error is repeated on every checkbox in the group.
- **Label text read twice:** the label text appears as its own item after the control. This is likely a limitation of the simulated reader, but worth confirming.
- **FileList, an empty `status` in every row:** each row has an always-rendered live region, and the simulated reader announces it as "status" even when it's empty, for example on idle rows. Check whether NVDA says anything for it; if it does, every row gets extra noise.
- **FileList, live region text read again:** when reading through, the simulated reader also reads the live region's text ("Upload complete: cover-letter.docx") at the end of the row. The NVDA tester's transcripts for the same stories didn't include it. This is a concrete example of the simulated reader and NVDA disagreeing, so it shouldn't drive changes on its own.
- **Caught a real change:** rebasing the spike onto `main` after the FileList upload work (#1366) made the FileList baseline fail with a readable diff: the new separator between file name and size, and the status regions. That's the intended use: the change was deliberate, so the baseline was updated in the same branch.

## Proposed layers

| Layer | Tool                                                                                                                       | Catches                                                                       | Runs                                              |
| ----- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| 0     | axe (existing `a11y` targets in Storybook)                                                                                 | Rule violations: missing names, contrast, invalid ARIA                        | PRs with the `a11y` label                         |
| 1     | Targeted assertions (`toHaveAccessibleName`, `toHaveAccessibleDescription`, `toHaveAccessibleErrorMessage`, `toBeInvalid`) | Specific relationships that must hold, e.g. an error tied to its field or row | Every PR, in component specs                      |
| 2     | Simulated screen reader logs, snapshotted per story                                                                        | Reading order, descriptions, errors, states, live region announcements        | Every PR                                          |
| 3     | Accessibility tree snapshots                                                                                               | Structure, roles and names                                                    | Optional, where layer 2 is too verbose            |
| 4     | Real NVDA through [Guidepup](https://www.guidepup.dev/) on a Windows runner                                                | NVDA-specific behaviour                                                       | Later, nightly or on demand, a few critical flows |

Layer 1 is the most stable and should be the default for anything we fix after a finding. Layer 2 is the broad baseline. Layer 3 is a cheap complement but not enough on its own because of the description gap. Layer 4 is an extension, not part of the first step.

### Human testing

Manual testing with NVDA, and ideally with users who rely on screen readers, stays the source of truth. Each finding from a test session should become a layer 1 or layer 2 test, so the baseline grows from real problems rather than guesses.

## Rollout

1. **Shared helper.** _Done on the spike branch:_ `readAll` and `collectAnnouncements` in `tools/test-utils/src/screen-reader.ts`, imported as `@midas-ds/test-utils/screen-reader`, with their own tests.
2. **Story-driven, opt-in.** _Done on the spike branch:_ `packages/components/src/screen-reader.spec.tsx` reads every story tagged `screen-reader` and stores the output as plain text under `__screen-reader__/<folder>/<Component>/<Story>.txt`. Update with `nx test components -- screen-reader.spec -u`. It currently runs in the regular, blocking `test` target, unlike visual regression; see open questions.
3. **Pilot components.** _Started:_ TextField, Select and CheckboxGroup (invalid), FileList (default and all upload states in `MixedStates`) and Stack as a list. Still to do: Modal and Toast, where announcements matter most.
4. **Review practice.** A changed snapshot is reviewed like a visual diff: the PR author explains why the spoken output changed, and the reviewer reads the diff.
5. **Evaluate after the pilot.** Look at snapshot churn, false positives and whether the logs caught anything. Decide then whether to widen the scope and whether layer 4 is worth it.

## Risks

- **False confidence.** A green snapshot means the output is unchanged, not that it is good. That is why human testing stays.
- **Churn from wording.** Snapshots break when texts or translations change. Keeping texts in stories stable and reviewing the diff is the price of a readable baseline.
- **Divergence from NVDA.** The simulated reader can disagree with real screen readers. Findings from it should be confirmed with NVDA before we change components based on them.
- **Experimental API.** `toMatchAriaSnapshot` is experimental in Vitest and may change.
- **Locale.** Tests run with the English locale, while many stories have Swedish texts, so snapshots mix languages. Worth deciding whether the baseline should run in Swedish.

## Open questions

- Should the baseline block PRs, like a unit test, or report without blocking, like visual regression?
- Which locale should the baseline use?
- Who owns reviewing screen reader snapshot changes?
- When is real NVDA (layer 4) worth the maintenance, and for which flows?
