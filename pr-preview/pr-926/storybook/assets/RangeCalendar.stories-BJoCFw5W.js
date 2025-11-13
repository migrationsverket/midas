import{m as t,$ as s}from"./iframe-1vIqjnby.js";import{R as n}from"./RangeCalendar-X1HceDIk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjKxtA9q.js";import"./Button-I0OIDbhB.js";import"./utils-DP4tvbox.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6xvz5Aa.js";import"./useFocusRing-qKukOunu.js";import"./index-fb0U5xET.js";import"./index-CQziH2IA.js";import"./useLabels-Cb18_xpb.js";import"./useButton-yhDvMx9o.js";import"./RSPContexts-a3xvsoTH.js";import"./Text-D5j6OND1.js";import"./useDateFormatter-CfLB3wO-.js";import"./useControlledState-Gd009-3T.js";import"./useLocalizedStringFormatter-CJVMb10g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bqx-dezR.js";import"./useEvent-CSNMnz9a.js";import"./getScrollParent-QIQly7dc.js";import"./scrollIntoView-jQrGDwuP.js";import"./useDescription-BqgyIHM3.js";import"./VisuallyHidden-BDeEE_jR.js";import"./clsx-Ciqy0D92.js";import"./Button-lao2U65D.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BEyZRkKF.js";import"./chevron-right-DKGOC5SM.js";import"./Heading-Bxf8NlZx.js";import"./Text-xTP-Xoo1.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
