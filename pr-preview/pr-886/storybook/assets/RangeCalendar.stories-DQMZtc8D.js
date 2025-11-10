import{m as t,$ as s}from"./iframe-DpimZ4vu.js";import{R as n}from"./RangeCalendar-BZ95v7fp.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-BUIU9m6y.js";import"./Button-BlvOxMDL.js";import"./utils-sUShH4Zp.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8U0ds-5.js";import"./useFocusRing-Cvk1I5yA.js";import"./index-BFp4dbMl.js";import"./index-DXLavACN.js";import"./useLabels-QQqtllqV.js";import"./useButton-DLLjkHVB.js";import"./RSPContexts-1RfZJYPH.js";import"./Text-BU40xBzY.js";import"./useDateFormatter-BDTvadGQ.js";import"./useControlledState-Dm6fk6wz.js";import"./useLocalizedStringFormatter-k2WHvzo2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7IC7cKt.js";import"./useEvent-DSaRE3GX.js";import"./getScrollParent-DCJmM9dv.js";import"./scrollIntoView-CCfZUFZI.js";import"./useDescription-DR9U-L1o.js";import"./VisuallyHidden-D38RTIJD.js";import"./clsx-Ciqy0D92.js";import"./Button-CAiuqkSW.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-2ltAEOx8.js";import"./chevron-right-CZeT6AMn.js";import"./Heading-B4MNzCXT.js";import"./Text-HCdZ9zIX.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
