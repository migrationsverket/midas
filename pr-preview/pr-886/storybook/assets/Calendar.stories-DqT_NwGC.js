import{$ as p,a as m,r as l,j as d}from"./iframe-DpimZ4vu.js";import{C as n}from"./Calendar-DdPeMQ-Q.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-BUIU9m6y.js";import"./Button-BlvOxMDL.js";import"./utils-sUShH4Zp.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8U0ds-5.js";import"./useFocusRing-Cvk1I5yA.js";import"./index-BFp4dbMl.js";import"./index-DXLavACN.js";import"./useLabels-QQqtllqV.js";import"./useButton-DLLjkHVB.js";import"./RSPContexts-1RfZJYPH.js";import"./Text-BU40xBzY.js";import"./useDateFormatter-BDTvadGQ.js";import"./useControlledState-Dm6fk6wz.js";import"./useLocalizedStringFormatter-k2WHvzo2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7IC7cKt.js";import"./useEvent-DSaRE3GX.js";import"./getScrollParent-DCJmM9dv.js";import"./scrollIntoView-CCfZUFZI.js";import"./useDescription-DR9U-L1o.js";import"./VisuallyHidden-D38RTIJD.js";import"./clsx-Ciqy0D92.js";import"./Button-CAiuqkSW.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-2ltAEOx8.js";import"./chevron-right-CZeT6AMn.js";import"./Heading-B4MNzCXT.js";import"./FieldError-yhW5HiV-.js";import"./Text-HCdZ9zIX.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
