import{m as t,$ as s}from"./iframe-Zncv4Z_q.js";import{R as n}from"./RangeCalendar-Ck8JksqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BIg1SQsD.js";import"./Button-C1wQYifO.js";import"./utils-Devluy5R.js";import"./clsx-B-dksMZM.js";import"./Hidden-mvxWno9C.js";import"./useFocusRing-Ca5sQuoz.js";import"./index-DOrRd1fP.js";import"./index--5vlIxZw.js";import"./useLabels-CK9bUtvN.js";import"./useButton-0w55E1yr.js";import"./RSPContexts-Dq6yafuR.js";import"./Text-DYVl_AjA.js";import"./useDateFormatter-B7qlJjBt.js";import"./useControlledState-CdK6s_X4.js";import"./useLocalizedStringFormatter-CEb7hF4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2fQEmt89.js";import"./useEvent-CjvTY6Ub.js";import"./getScrollParent-lpMGunez.js";import"./scrollIntoView-BSmcXjZG.js";import"./useDescription-Dwj8v6fw.js";import"./VisuallyHidden-Cr1_BNyT.js";import"./clsx-Ciqy0D92.js";import"./Button-uct9GVFZ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DfBRHJjR.js";import"./chevron-right-bdlLYBnr.js";import"./Heading-CES6z74c.js";import"./Text-B8DR8Mpf.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
