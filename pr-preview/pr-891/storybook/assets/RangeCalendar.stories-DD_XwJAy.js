import{m as t,$ as c}from"./iframe-fDXOsywa.js";import{R as y}from"./RangeCalendar-B3EBDTbf.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-CagRWY7P.js";import"./Button-EDZL10yX.js";import"./utils-jl4nVMmS.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-yqKUTe.js";import"./useFocusRing-gU4XRzOS.js";import"./index-wA_lPabs.js";import"./index-NMMldFA3.js";import"./useLabels-BmkcOEEQ.js";import"./useButton-CqL1Vm8Z.js";import"./RSPContexts-DXYNxytm.js";import"./Text-BaIQfRso.js";import"./useDateFormatter-Dpfshom7.js";import"./useControlledState-BFHIlEy-.js";import"./useLocalizedStringFormatter-DiNpPFwm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DPNX0U6G.js";import"./useEvent-BlL3_Xul.js";import"./getScrollParent-BT3G_gxy.js";import"./scrollIntoView-DBOgPBsD.js";import"./useDescription-Dsp-kCKx.js";import"./VisuallyHidden-Bm44aDzc.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck-hw6bu.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-T-T0oES3.js";import"./chevron-right-DEaSQnfq.js";import"./Heading-hDshH0a8.js";import"./Text-D9v5SlmJ.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,G={component:y,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:l})=>{await l("it should be possible to select today and two days ahead with the keyboard",async()=>{const m=t.day.toString(),p=t.add({days:1}).day.toString(),u=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:m,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:p,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:u,selected:!0})).toHaveAttribute("aria-selected","true")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
