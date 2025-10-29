import{m as t,$ as c}from"./iframe-Cn95Trhs.js";import{R as y}from"./RangeCalendar-X-5Rr71D.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-bxLgS3Gp.js";import"./Button-D8Giz6cX.js";import"./utils-B_Rqc_aW.js";import"./clsx-B-dksMZM.js";import"./Hidden-7SzS1JPj.js";import"./useFocusRing-_qs5_0yz.js";import"./index-BY3baLss.js";import"./index-BcP-6fTE.js";import"./useLabels-DEGYN1v0.js";import"./useButton-DASWZRz7.js";import"./RSPContexts-DBwctYh3.js";import"./Text-dcT-5KgR.js";import"./useDateFormatter-D2Wn9NOD.js";import"./useControlledState-CGhILm4m.js";import"./useLocalizedStringFormatter-DQ6TS5SV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CR1US5I7.js";import"./useEvent-pwVu5ejx.js";import"./getScrollParent-Bt397MOx.js";import"./scrollIntoView-Bq7zohMa.js";import"./useDescription-BExuhEP2.js";import"./VisuallyHidden-DozxMvA8.js";import"./clsx-Ciqy0D92.js";import"./Button-BfGcSgjz.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BhsQ84wm.js";import"./chevron-right-DBv7hC-d.js";import"./Heading-DoAa7YLq.js";import"./Text-Bo2P7wKJ.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,G={component:y,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:l})=>{await l("it should be possible to select today and two days ahead with the keyboard",async()=>{const m=t.day.toString(),p=t.add({days:1}).day.toString(),u=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:m,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:p,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:u,selected:!0})).toHaveAttribute("aria-selected","true")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    // violations in forced-colors
    a11y: {
      test: 'todo'
    }
  },
  args: {
    defaultValue: {
      start: mockedNow.subtract({
        days: 2
      }),
      end: mockedNow.add({
        days: 2
      })
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    // violations in forced-colors
    a11y: {
      test: 'todo'
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select today and two days ahead with the keyboard', async () => {
      const todaysDate = mockedNow.day.toString();
      const tomorrow = mockedNow.add({
        days: 1
      }).day.toString();
      const dayAfterTomorrow = mockedNow.add({
        days: 2
      }).day.toString();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowRight]');
      await expect(canvas.getByRole('gridcell', {
        name: todaysDate,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...s.parameters?.docs?.source}}};const I=["Primary","SelectedDates","Disabled","ReadOnly","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,n as ReadOnly,r as SelectedDates,I as __namedExportsOrder,G as default};
