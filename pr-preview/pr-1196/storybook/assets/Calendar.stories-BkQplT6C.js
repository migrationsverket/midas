import{$ as c,a as m,r as l,j as d}from"./iframe-BaglzexA.js";import{C as n}from"./Calendar-DQ6BXcbr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BGlm8G_N.js";import"./Button-4C6qbeHh.js";import"./utils-BRuvLXhr.js";import"./clsx-B-dksMZM.js";import"./Hidden-DtQ8Bocl.js";import"./useFocusRing-o2chUIJx.js";import"./index-BDFHFH_G.js";import"./index-B5KTxMw4.js";import"./useLabel-DPVf23Bi.js";import"./useLabels-BQSacZGu.js";import"./useButton-CAOCdVrC.js";import"./RSPContexts-DSk9wo8I.js";import"./Text-BjRotHGw.js";import"./useDateFormatter-BPCCd4Ky.js";import"./useControlledState-j7ZeGh6U.js";import"./useLocalizedStringFormatter-CA4tuOSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5suZYl9.js";import"./useEvent-DiuOeyiB.js";import"./getScrollParent-VIhewieb.js";import"./scrollIntoView-CZ_G2l1H.js";import"./useDescription-DGnmrtwz.js";import"./VisuallyHidden--A_wY8k-.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cv4fE_9b.js";import"./createLucideIcon-B0HwbXf8.js";import"./chevron-right-AF1lrgan.js";import"./Button-DEzldRuR.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DzzpmN-7.js";import"./Heading-CgwcTn9c.js";import"./FieldError-Cz0FB3Ou.js";import"./Text-BUo0m_vR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
