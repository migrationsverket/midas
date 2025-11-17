import{m as t,$ as s}from"./iframe-5OPxOFOo.js";import{R as n}from"./RangeCalendar-B7UMCOuL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBMUVF_j.js";import"./Button-DwYUQnyK.js";import"./utils-y7VQpXmV.js";import"./clsx-B-dksMZM.js";import"./Hidden-B8S2zPTS.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./RSPContexts-Bvl2qDvi.js";import"./Text-LE0QZyiT.js";import"./useDateFormatter-F3_px5Uh.js";import"./useControlledState-C3eWgmLl.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DU85q2R3.js";import"./useEvent-Dz5VVAtu.js";import"./getScrollParent-ClkZa6SK.js";import"./scrollIntoView-BziE6UoW.js";import"./useDescription-BnvkbMBx.js";import"./VisuallyHidden-D4M_6Oa3.js";import"./clsx-Ciqy0D92.js";import"./Button-CZG4l204.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DTp8xoi7.js";import"./chevron-right-C_sopkcw.js";import"./Heading-DysyouUu.js";import"./Text-DJ8ddDqj.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...o.parameters?.docs?.source}}};const G=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,G as __namedExportsOrder,F as default};
