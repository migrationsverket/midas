import{$ as c,a as m,r as l,j as d}from"./iframe-DsUbAoSq.js";import{C as n}from"./Calendar-YB-CoUkx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnTNhYTk.js";import"./Button-D9RawpLu.js";import"./utils-CItAFvY_.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6jIkc3U.js";import"./useFocusRing-ClDYXhda.js";import"./index-ZLozb24P.js";import"./index-BR563_q3.js";import"./useLabels-CUikAVDR.js";import"./useButton-ota4yok-.js";import"./RSPContexts-GvaUrLm8.js";import"./Text-Bd-2tMqu.js";import"./useDateFormatter-BOTNVb01.js";import"./useControlledState-DI4_-MQt.js";import"./useLocalizedStringFormatter-CqRU1qss.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C5KRfSGn.js";import"./useEvent-CgdlAV5M.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DayPqPx3.js";import"./VisuallyHidden-BNJ8vALJ.js";import"./clsx-Ciqy0D92.js";import"./Button-pix4LUFA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFjihYlH.js";import"./createLucideIcon-hAagXGW6.js";import"./chevron-left-D1eoOaop.js";import"./chevron-right-N1D9mLM7.js";import"./Heading-Bh0pg882.js";import"./FieldError-ekmgTayW.js";import"./Text-zFFTMSPY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
