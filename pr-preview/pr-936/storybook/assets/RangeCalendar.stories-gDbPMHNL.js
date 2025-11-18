import{m as t,$ as s}from"./iframe-1ypBIpqt.js";import{R as n}from"./RangeCalendar-DNAbdaLt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CE9DvILb.js";import"./Button-sTPpWxn_.js";import"./utils-B8wMECB5.js";import"./clsx-B-dksMZM.js";import"./Hidden-JN6h68tz.js";import"./useFocusRing-BE60GF6p.js";import"./index-OME_eh5M.js";import"./index-bt6Kq2KN.js";import"./useLabels-LwVbPde8.js";import"./useButton-CiHam1fw.js";import"./RSPContexts-BL8PJjGn.js";import"./Text-0r7LapIC.js";import"./useDateFormatter-BsTUlPP-.js";import"./useControlledState-Dh7cHA4x.js";import"./useLocalizedStringFormatter-DyDkLKc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B9Gm1wFD.js";import"./useEvent-Cutut5XJ.js";import"./getScrollParent-CZ3e9-X3.js";import"./scrollIntoView-C9GMTZXb.js";import"./useDescription-BbB1SG_e.js";import"./VisuallyHidden-C69N3wb4.js";import"./clsx-Ciqy0D92.js";import"./Button-Cxrzoy92.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C531gWR5.js";import"./chevron-right-qzG0Gk7a.js";import"./Heading-yWckuHhd.js";import"./Text-B5RNhX_R.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
