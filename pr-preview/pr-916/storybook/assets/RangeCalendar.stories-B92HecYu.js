import{m as t,$ as s}from"./iframe-6vocyBZR.js";import{R as n}from"./RangeCalendar-xqGnkQek.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-COfjecW0.js";import"./Button-BhGf2H3u.js";import"./utils-BBfZu9kz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuJvOqEn.js";import"./useFocusRing-B50ygi4K.js";import"./index-B3IiVLzz.js";import"./index-BLXYeBoF.js";import"./useLabels-7KDepcIy.js";import"./useButton-CJoNFuGt.js";import"./RSPContexts-D4oWSe-H.js";import"./Text-D-Z22iAA.js";import"./useDateFormatter-czQBctZM.js";import"./useControlledState-DmeySdaI.js";import"./useLocalizedStringFormatter-Df5C4zQW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CUbpEmh7.js";import"./useEvent-ZYUzuaQ4.js";import"./getScrollParent-D9OqJMJq.js";import"./scrollIntoView-_NUEia3r.js";import"./useDescription-Co639SVw.js";import"./VisuallyHidden-7XC-BKhD.js";import"./clsx-Ciqy0D92.js";import"./Button-CpfHjZxO.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C6fwsjaL.js";import"./chevron-right-47OxegO8.js";import"./Heading-ula2A9Gq.js";import"./Text-fxXJjlwh.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
