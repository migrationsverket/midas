import{$ as c,a as m,r as l,j as d}from"./iframe-CpD0sz2e.js";import{C as n}from"./Calendar-0vs9jRbB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BVZwQpOO.js";import"./Button-TIyC3aNe.js";import"./utils-ojEvGYm9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CJYkSVxl.js";import"./useFocusRing-CBhF1Pep.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./RSPContexts-C3ByxqzR.js";import"./Text-eC571-Sp.js";import"./useDateFormatter-C25_ISHL.js";import"./useControlledState-DBG5XgRx.js";import"./useLocalizedStringFormatter-CO2jAPcS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKMD5FRx.js";import"./useEvent-ZFJxjcoT.js";import"./getScrollParent-DH_QPoUW.js";import"./scrollIntoView-Dc3aCiHD.js";import"./useDescription-BlE-AVuu.js";import"./VisuallyHidden-BXLSQV9r.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CPvaxQoo.js";import"./createLucideIcon-DFkdkqMu.js";import"./chevron-right-DJy2-CzW.js";import"./Button-BEQpNkHS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./Heading-DbFG1U6V.js";import"./FieldError-DwX7T7Dy.js";import"./Text-BdNXNsJY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
