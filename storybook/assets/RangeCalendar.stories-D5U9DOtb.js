import{m as t,$ as s}from"./iframe-DjEq5KJs.js";import{R as n}from"./RangeCalendar-DUYx4rUw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C42b-Khr.js";import"./Button-B8049aKJ.js";import"./utils-CCFqI4vB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DnGBJvOz.js";import"./useFocusRing-BC0wMAce.js";import"./index-DCW76Eph.js";import"./index-BjqDN30t.js";import"./useLabels-DmAHK44v.js";import"./useButton-hAhYDtFG.js";import"./RSPContexts-BkrQi2MA.js";import"./Text-C9cSyz4C.js";import"./useDateFormatter-De_LUocr.js";import"./useControlledState-DHOlhB6J.js";import"./useLocalizedStringFormatter-BAjOeHv7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PpFvHSZe.js";import"./useEvent-DG6NBjU6.js";import"./getScrollParent-B8SMXqH0.js";import"./scrollIntoView-CvJ6INea.js";import"./useDescription-BknCMZIc.js";import"./VisuallyHidden-F00Kn1rT.js";import"./clsx-Ciqy0D92.js";import"./Button-BV-3OGoZ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C_34UrfF.js";import"./chevron-right-BqnrT2XD.js";import"./Heading-B_wqikp6.js";import"./Text-D1_j7g2y.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
