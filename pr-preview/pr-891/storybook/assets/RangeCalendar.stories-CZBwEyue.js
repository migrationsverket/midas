import{m as t,$ as c}from"./iframe-D22RnrI5.js";import{R as y}from"./RangeCalendar-Dg_-2It8.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DOHGGA6h.js";import"./Button-rdu5FjWn.js";import"./utils-IQwsi_Mp.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtIENPW4.js";import"./useFocusRing-CelFkdst.js";import"./index-B6eCQ9aw.js";import"./index-DZ5AQ9RU.js";import"./useLabels-DCbQxQd_.js";import"./useButton-DTvkVre_.js";import"./RSPContexts-DFUkwuHx.js";import"./Text-C_rQTysa.js";import"./useDateFormatter--ZguJPGx.js";import"./useControlledState-Civ9vvMz.js";import"./useLocalizedStringFormatter-BSWUiH8B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DI3MoPHF.js";import"./useEvent-CbrHpgHc.js";import"./getScrollParent-CBtZzG_M.js";import"./scrollIntoView-DFHnj_oN.js";import"./useDescription-BfXV2LOb.js";import"./VisuallyHidden-aWO_RYgT.js";import"./clsx-Ciqy0D92.js";import"./Button-T9TteJoQ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DImY0aIE.js";import"./chevron-right-C1i2j76n.js";import"./Heading-CuV8echB.js";import"./Text-CWwJ5Kgj.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,G={component:y,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:l})=>{await l("it should be possible to select today and two days ahead with the keyboard",async()=>{const m=t.day.toString(),p=t.add({days:1}).day.toString(),u=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:m,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:p,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:u,selected:!0})).toHaveAttribute("aria-selected","true")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
