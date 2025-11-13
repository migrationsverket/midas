import{m as t,$ as s}from"./iframe-Bj-I_53F.js";import{R as n}from"./RangeCalendar-Bza5v0Ec.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-y5LdhWNO.js";import"./Button-CYD4aiPQ.js";import"./utils-AYBXNHWH.js";import"./clsx-B-dksMZM.js";import"./Hidden-C4NKfEwd.js";import"./useFocusRing-3Uqdh2tR.js";import"./index-Cr9mSzEt.js";import"./index-DRLQ3B3R.js";import"./useLabels-R0WNnhTM.js";import"./useButton--bsyIudm.js";import"./RSPContexts-CldvHFix.js";import"./Text-DOZw3K2Z.js";import"./useDateFormatter-TWCzzTfx.js";import"./useControlledState-C7UYN2s_.js";import"./useLocalizedStringFormatter-DCLhEoY8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7wTPJMt.js";import"./useEvent-C0iCA9HD.js";import"./getScrollParent-DGhJvWNi.js";import"./scrollIntoView-CR2ITi7r.js";import"./useDescription-D15WWjzT.js";import"./VisuallyHidden-BHWpIZFA.js";import"./clsx-Ciqy0D92.js";import"./Button-DjY0cfru.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DCE2q9z-.js";import"./chevron-right-BQXHJe6m.js";import"./Heading-8W4drCzH.js";import"./Text-BW7nmiG_.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
