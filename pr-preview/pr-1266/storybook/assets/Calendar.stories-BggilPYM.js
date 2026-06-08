import{$ as c,a as m,r as l,j as d}from"./iframe-C8RsNfgP.js";import{C as n}from"./Calendar-BNLRKhzC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DX9v67i8.js";import"./Button-A6crx_HM.js";import"./utils-CoNQ4mwz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIvUufzC.js";import"./useFocusRing-Cez6wS5f.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./RSPContexts-DnHOF8LL.js";import"./Text-COO1Tk0x.js";import"./useDateFormatter-CJtXSLnl.js";import"./useControlledState-LFxBnaBs.js";import"./useLocalizedStringFormatter-6GffOhcG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BtHyaZ9z.js";import"./useEvent-Bt-5AhA-.js";import"./getScrollParent-DXaGcTkj.js";import"./scrollIntoView-D2l_qE3A.js";import"./useDescription-CbZGxods.js";import"./VisuallyHidden-D7WZRGTo.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cswjhe9H.js";import"./createLucideIcon-BIQyFJ8n.js";import"./chevron-right-Bm9eiIb-.js";import"./Button-Cfe9iLIu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CdlaUYB9.js";import"./Heading-BmK9CANu.js";import"./FieldError-Dx0wLbZk.js";import"./Text-C2A-yzmp.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
