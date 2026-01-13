import{$ as c,a as m,r as l,j as d}from"./iframe-CLDUBT6H.js";import{C as n}from"./Calendar-I81K97DS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BNarWygF.js";import"./Button-CMos7Slo.js";import"./utils-B2mKk8ds.js";import"./clsx-B-dksMZM.js";import"./Hidden-DLcE0MmQ.js";import"./useFocusRing-Dyp-2U09.js";import"./index-CQqCc5kI.js";import"./index-CGFri1B6.js";import"./useLabels-BZXL5PjD.js";import"./useButton-CWWImr4k.js";import"./RSPContexts-CLyyRvTx.js";import"./Text-DVTsZrXV.js";import"./useDateFormatter-CU_UeRBP.js";import"./useControlledState-BGBJm32t.js";import"./useLocalizedStringFormatter-BmkSBfS1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DiKPL9as.js";import"./useEvent-DGS4bHRi.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Do_MXPnI.js";import"./VisuallyHidden-B6ZRi5s4.js";import"./clsx-Ciqy0D92.js";import"./Button-B6mQ2Bq0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BaqAvC1h.js";import"./createLucideIcon-5ka4vtZl.js";import"./chevron-left-NtYA35Sw.js";import"./chevron-right-B2qZRgoa.js";import"./Heading-TRsTpXmi.js";import"./FieldError-Br1ud4c9.js";import"./Text-t9fg8swz.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
