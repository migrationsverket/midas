import{$ as c,a as m,r as l,j as d}from"./iframe-Cq1efVtu.js";import{C as n}from"./Calendar-SSnLLfA6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B01ECght.js";import"./Button-DksBmTbZ.js";import"./utils-CDUIlyKR.js";import"./clsx-B-dksMZM.js";import"./Hidden-DNnAB0GJ.js";import"./useFocusRing-TSe7POO2.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./RSPContexts-Dkmb-asV.js";import"./Text-DK-NnzUH.js";import"./useDateFormatter-DhpefF91.js";import"./useControlledState-C2EcW_bk.js";import"./useLocalizedStringFormatter-UDvCuBP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DVeAqXtk.js";import"./useEvent-Bq3pP39a.js";import"./getScrollParent-5COwKf8k.js";import"./scrollIntoView-CUwLIsqS.js";import"./useDescription-xyqlmyLv.js";import"./VisuallyHidden-DbkwGiLN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BdEDDUh6.js";import"./createLucideIcon-CUu-1dyR.js";import"./chevron-right-aIrPcL7L.js";import"./Button-CTOoH2N3.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./Heading-BXtAiUcs.js";import"./FieldError-C6eAPC3q.js";import"./Text-RuRZ3ncY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
