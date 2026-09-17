// Throwaway component for manually validating the visual-regression CI
// pipeline end to end (workflow #1368). Never intended to merge to main —
// lives only on this disposable test/ci-visual-check branch.
export const VisualTrialDummy = () => (
  <div
    style={{
      width: 120,
      height: 120,
      background: 'crimson',
      borderRadius: 8,
    }}
  >
    hello
  </div>
)
