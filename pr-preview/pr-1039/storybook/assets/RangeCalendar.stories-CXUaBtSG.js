import{$ as t,m as s}from"./iframe-Zc8QEBEs.js";import{R as n}from"./RangeCalendar-D7M7IElX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBeougwS.js";import"./Button-CVF2QLQE.js";import"./utils-B5Ft6r77.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwlmQhVF.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./RSPContexts-D6ksqvWo.js";import"./Text-D3gJufSD.js";import"./useDateFormatter-UaoiFeh2.js";import"./useControlledState--JkDKSQL.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DDV3umF5.js";import"./useEvent-sXQWxw0f.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bmj6vDCw.js";import"./VisuallyHidden-DAd_ytwS.js";import"./clsx-Ciqy0D92.js";import"./Button-Dkxo3GyP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./createLucideIcon-BfbY4clK.js";import"./chevron-left-BW7UsIMq.js";import"./chevron-right-VX4MdaZT.js";import"./Heading-C0aUvMQS.js";import"./FieldError-RKqcL0cn.js";import"./Text-DJvoMdLY.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
