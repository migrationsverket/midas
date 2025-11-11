import{m as t,$ as s}from"./iframe-k-zAH7Ef.js";import{R as n}from"./RangeCalendar-BXnGlvrs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQwvYk8H.js";import"./Button-BdULP_1i.js";import"./utils-BSpJY3Um.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHgR79MS.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./RSPContexts-DGsEwDeK.js";import"./Text-BGMRpBYZ.js";import"./useDateFormatter-Q-uxfb8C.js";import"./useControlledState-CWQoOU6w.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B8qQeMHp.js";import"./useEvent-BG9GMXpu.js";import"./getScrollParent-a6tJLPyA.js";import"./scrollIntoView-MFUOiOkG.js";import"./useDescription-ScrL-_TA.js";import"./VisuallyHidden-DbtIx9ZK.js";import"./clsx-Ciqy0D92.js";import"./Button-DmW_TZqr.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-b2tMwHkv.js";import"./chevron-right-b08DX7XE.js";import"./Heading-BgVylgI-.js";import"./Text-BOoeMNrs.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
