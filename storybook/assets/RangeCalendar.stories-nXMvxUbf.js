import{$ as t,m as s}from"./iframe-CqGw52kl.js";import{R as n}from"./RangeCalendar-CN51wSey.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-FB1gH7ej.js";import"./Button-BG-x6i-t.js";import"./utils-DNYE9rrP.js";import"./clsx-B-dksMZM.js";import"./Hidden-duzZCIPn.js";import"./useFocusRing-GvsYGsAP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./RSPContexts-CivMWx79.js";import"./Text-CHXVqnQT.js";import"./useDateFormatter-BEUUk3dn.js";import"./useControlledState-CGYQyUPv.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CGhPL4qY.js";import"./useEvent-7xwxZlQ2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B6vY1f8v.js";import"./VisuallyHidden-BSHZJK5y.js";import"./clsx-Ciqy0D92.js";import"./Button-ABAzSfOF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";import"./createLucideIcon-CoMafoM3.js";import"./chevron-left-0RMqJ4H8.js";import"./chevron-right-Prjxd3HY.js";import"./Heading-C42QIcPI.js";import"./FieldError-CjHIzoMC.js";import"./Text-D3EOjJ0B.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const J=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,J as __namedExportsOrder,I as default};
