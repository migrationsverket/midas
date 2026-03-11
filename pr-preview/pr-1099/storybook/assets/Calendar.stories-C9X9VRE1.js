import{$ as c,a as m,r as l,j as d}from"./iframe-DnruN8Hi.js";import{C as n}from"./Calendar-DKc2Mdqb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D-xEB1ag.js";import"./Button-DqyDElzI.js";import"./utils-BX8UrSvi.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPKBd4kU.js";import"./useFocusRing-CIcdEl5_.js";import"./index-pkhbjMNc.js";import"./index-D9PIboWj.js";import"./useLabels-CTW32vH1.js";import"./useButton-vQ4A074D.js";import"./RSPContexts-BxvIfT03.js";import"./Text-DCNJHhrE.js";import"./useDateFormatter-DEXo3COt.js";import"./useControlledState-BjH9byFR.js";import"./useLocalizedStringFormatter-CClWoe23.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dj-PpBEt.js";import"./useEvent-YY42qbpM.js";import"./getScrollParent-iZijDBuV.js";import"./scrollIntoView-BcsYkCDN.js";import"./useDescription-C5Ac6ktb.js";import"./VisuallyHidden-G4dK4wUP.js";import"./clsx-Ciqy0D92.js";import"./Button-DqZTSrsn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-y9TFNf60.js";import"./createLucideIcon-Bmpp_QRu.js";import"./chevron-left-AnQa73Zu.js";import"./chevron-right-B_GFkt66.js";import"./Heading-CtJEqhzp.js";import"./FieldError-CR8f1e8f.js";import"./Text-CtjP_E78.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
