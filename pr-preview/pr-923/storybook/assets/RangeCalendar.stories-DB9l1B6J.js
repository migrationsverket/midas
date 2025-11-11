import{m as t,$ as s}from"./iframe-CuNlhVbe.js";import{R as n}from"./RangeCalendar-Dh8yXBcQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bbxdt7u9.js";import"./Button-DiUERCEo.js";import"./utils-B8NVfSfe.js";import"./clsx-B-dksMZM.js";import"./Hidden-l86ZZb_o.js";import"./useFocusRing-wXiAEqmT.js";import"./index-DV8HCzUV.js";import"./index-CXWed7tA.js";import"./useLabels-vXYiQgPh.js";import"./useButton-MVrmgZI_.js";import"./RSPContexts-CXRqJ3P2.js";import"./Text-D8GREq1L.js";import"./useDateFormatter-ChwbzY3q.js";import"./useControlledState-5ENUpcQW.js";import"./useLocalizedStringFormatter-DYbPbioc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BGkxfiJt.js";import"./useEvent-BrBR3UbR.js";import"./getScrollParent-BslocY4m.js";import"./scrollIntoView-DRGTjY3J.js";import"./useDescription-DkbdkEhe.js";import"./VisuallyHidden-Ba3tVXVU.js";import"./clsx-Ciqy0D92.js";import"./Button-g0PWpBa7.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-TK9FCAYu.js";import"./chevron-right-CWYr5pul.js";import"./Heading-CZW8hNx0.js";import"./Text-BvIukjwj.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
