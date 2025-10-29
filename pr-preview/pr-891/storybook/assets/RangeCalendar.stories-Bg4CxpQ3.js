import{m as t,$ as c}from"./iframe-DVfi3_SF.js";import{R as y}from"./RangeCalendar-Be4ag0v_.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-HItT85fO.js";import"./Button-D5dtCU50.js";import"./utils-DSuW7o8J.js";import"./clsx-B-dksMZM.js";import"./Hidden-CsByKLFz.js";import"./useFocusRing-B4faYJtf.js";import"./index-8vKeZmgO.js";import"./index-C7DQzPvW.js";import"./useLabels-DWWz7lO4.js";import"./useButton-DLqLP6Xz.js";import"./RSPContexts-CQyNRPa7.js";import"./Text-A3DLHuq6.js";import"./useDateFormatter-Cpsnu-70.js";import"./useControlledState-CIbbCaYD.js";import"./useLocalizedStringFormatter-7LOyipa-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZ1x5ktA.js";import"./useEvent-QfvmovDb.js";import"./getScrollParent-C1MrzQw1.js";import"./scrollIntoView-Bobw8t0H.js";import"./useDescription-hr8W1nNh.js";import"./VisuallyHidden-DZ9owaqZ.js";import"./clsx-Ciqy0D92.js";import"./Button-C_F6Y6Yg.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BXAfGPAx.js";import"./chevron-right-GKY93qIS.js";import"./Heading-CEZus3KD.js";import"./Text-B2zSC84J.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,G={component:y,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:l})=>{await l("it should be possible to select today and two days ahead with the keyboard",async()=>{const m=t.day.toString(),p=t.add({days:1}).day.toString(),u=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:m,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:p,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:u,selected:!0})).toHaveAttribute("aria-selected","true")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
