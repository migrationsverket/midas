import{$ as c,a as m,r as l,j as d}from"./iframe-DsyUTAcE.js";import{C as n}from"./Calendar-D0RK4mWw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-bF4bhHEN.js";import"./Button-CyvfdMVt.js";import"./utils-BnWDXxML.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6TlAeVz.js";import"./useFocusRing-Cx6ToNCy.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./RSPContexts-Bq3W9l8U.js";import"./Text-BcSWoPTn.js";import"./useDateFormatter-DEHlP0hZ.js";import"./useControlledState-CUD0SDj1.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CUPD6Q02.js";import"./useEvent-CSHJ_TNr.js";import"./getScrollParent-dZX6mtkV.js";import"./scrollIntoView-C7SZHVqe.js";import"./useDescription-umLegZgN.js";import"./VisuallyHidden-hue3FDJw.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DYz069VK.js";import"./createLucideIcon-BXEX14cZ.js";import"./chevron-right-KmWu-l9R.js";import"./Button-D3VEHZPU.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Heading-D4DQoq2I.js";import"./FieldError-CUL53TAh.js";import"./Text-BbelKnYK.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
