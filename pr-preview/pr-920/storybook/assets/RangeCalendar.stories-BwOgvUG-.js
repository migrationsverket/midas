import{m as t,$ as s}from"./iframe-9CWn0dLe.js";import{R as n}from"./RangeCalendar-Dqs4cayU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DKFKE493.js";import"./Button-BJGIOWWr.js";import"./utils-CuV_iOgg.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvOu_WHO.js";import"./useFocusRing-B85yjLqW.js";import"./index-ChHL_39O.js";import"./index-CgCHr7e4.js";import"./useLabels-C0HlmxZK.js";import"./useButton-mlyjrjfq.js";import"./RSPContexts-CQWVYSX6.js";import"./Text-An75_Zxb.js";import"./useDateFormatter-BaJSCjOk.js";import"./useControlledState-By_9HlDg.js";import"./useLocalizedStringFormatter-CncNPno2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8m0pSVWQ.js";import"./useEvent-DpugV3Z6.js";import"./getScrollParent-Tyo35a9C.js";import"./scrollIntoView-DTq6YPeW.js";import"./useDescription-CN24XJha.js";import"./VisuallyHidden-D1VOR-Jq.js";import"./clsx-Ciqy0D92.js";import"./Button-CujSre3v.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B5h6e8RU.js";import"./chevron-right-LCxFp_cr.js";import"./Heading-C2p66HiZ.js";import"./Text-6xl2iDhz.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
