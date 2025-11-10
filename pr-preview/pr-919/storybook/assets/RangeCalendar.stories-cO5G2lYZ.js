import{m as t,$ as s}from"./iframe-CQoEt6MY.js";import{R as n}from"./RangeCalendar-fQKjq-gA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BJZMP6qb.js";import"./Button-DZ49MCyb.js";import"./utils-BZjNqm_v.js";import"./clsx-B-dksMZM.js";import"./Hidden-CSuNuGGR.js";import"./useFocusRing-Ce_-RKSK.js";import"./index-JqVMY84I.js";import"./index-sURv3l0A.js";import"./useLabels-CdhJZ8bI.js";import"./useButton-BFtrRDJL.js";import"./RSPContexts-Cc8CKiY2.js";import"./Text-C06qrCLM.js";import"./useDateFormatter-CponPuuG.js";import"./useControlledState-CwbmZD-T.js";import"./useLocalizedStringFormatter-CXbNOCH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CbuO70mF.js";import"./useEvent-D--WxKnf.js";import"./getScrollParent-CoxL4gof.js";import"./scrollIntoView-WXRUBV4V.js";import"./useDescription-CHD7aq73.js";import"./VisuallyHidden-Bi8YNO_N.js";import"./clsx-Ciqy0D92.js";import"./Button-CzvKWfD1.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C6kI0Pt5.js";import"./chevron-right-MoOyWkM4.js";import"./Heading-CH7cVlF3.js";import"./Text-BNSF2d27.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
