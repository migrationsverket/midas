import{m as t,$ as s}from"./iframe-Cm-nFXgj.js";import{R as n}from"./RangeCalendar-CM6AznNg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BmQGvnLi.js";import"./Button-BqjtFLeK.js";import"./utils-DzXT04ji.js";import"./clsx-B-dksMZM.js";import"./Hidden-C2cWBi-M.js";import"./useFocusRing-B1ph6_YX.js";import"./index-COonVY99.js";import"./index-Cgz1zuFt.js";import"./useLabels-k6HUJMVn.js";import"./useButton-WCkm0bok.js";import"./RSPContexts-B-hrydvR.js";import"./Text-COY0mYa2.js";import"./useDateFormatter-B4klMkAu.js";import"./useControlledState-BAnQ-hqM.js";import"./useLocalizedStringFormatter-Q8gIMwH7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BrA69Y8K.js";import"./useEvent-BSNIYPFi.js";import"./getScrollParent-D_A0WQI2.js";import"./scrollIntoView-GK21G1Qr.js";import"./useDescription-CQizvqev.js";import"./VisuallyHidden-B9taaflH.js";import"./clsx-Ciqy0D92.js";import"./Button-DoGJ8kEh.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-Cv6XV0Hb.js";import"./chevron-right-CTo1wCCM.js";import"./Heading-CDG1N05B.js";import"./Text-BPyIK2Xp.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
