import{m as t,$ as s}from"./iframe-BjoitsA_.js";import{R as n}from"./RangeCalendar-D2yLdX5C.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DTo52bf5.js";import"./Button-dCjcK3xZ.js";import"./utils-CqffejwQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dlma28aT.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./RSPContexts-BM0YpPTx.js";import"./Text-D2_Dqxb_.js";import"./useDateFormatter-R0-p3w_6.js";import"./useControlledState-mjBa_ctK.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHegrLj_.js";import"./useEvent-DyYZuFIh.js";import"./getScrollParent-B0dWRzBe.js";import"./scrollIntoView-Bgf_9KZM.js";import"./useDescription-CZo8T5nr.js";import"./VisuallyHidden-NXDdaJHH.js";import"./clsx-Ciqy0D92.js";import"./Button-CcGX5Wmo.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CNrUrsyr.js";import"./chevron-right-LlxqxtM5.js";import"./Heading-Ch4W9UFX.js";import"./Text-C1C2cp8Y.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
