import{m as t,$ as s}from"./iframe-CUHTTXY9.js";import{R as n}from"./RangeCalendar-C8l8K4eK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dv81pTea.js";import"./Button-CTW6va-d.js";import"./utils-Dcvemnmi.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4n6kN_K.js";import"./useFocusRing-DjsRWKNx.js";import"./index-CAqaGyj3.js";import"./index-4Ydb_h1E.js";import"./useLabels-BI5qQt6r.js";import"./useButton-BfZu2Gs4.js";import"./RSPContexts-AZZ75FD2.js";import"./Text-D835pmOj.js";import"./useDateFormatter-Bn2iLamz.js";import"./useControlledState-Dsr3uqIL.js";import"./useLocalizedStringFormatter-CrK0txrp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bKbdLBvZ.js";import"./useEvent-M16ECpV-.js";import"./getScrollParent-Dau4AleY.js";import"./scrollIntoView-1WMQlWAp.js";import"./useDescription-BM1Fm2SQ.js";import"./VisuallyHidden-B5Z1t7Bp.js";import"./clsx-Ciqy0D92.js";import"./Button-BpmtbzrD.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BTFShZrE.js";import"./chevron-right-JYdRPQIe.js";import"./Heading-CrKTex-4.js";import"./Text-Bxb0XJzo.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
