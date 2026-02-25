import{$ as c,a as m,r as l,j as d}from"./iframe-BemYTmI0.js";import{C as n}from"./Calendar-BNUNtxtt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cbo1faTc.js";import"./Button-BIUCE2_i.js";import"./utils-BFE3Bu5p.js";import"./clsx-B-dksMZM.js";import"./Hidden-BgieuMJL.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./RSPContexts-Bpi28sKY.js";import"./Text-BdKoRU3R.js";import"./useDateFormatter-CDqCH3wN.js";import"./useControlledState-CpK-5b_b.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-1vUf0G1K.js";import"./useEvent-BjqKnd5t.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DhkrqMYF.js";import"./VisuallyHidden-BYKpW6eG.js";import"./clsx-Ciqy0D92.js";import"./Button-BvlrAquf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./createLucideIcon-CvZzPSN7.js";import"./chevron-left-D43miSfr.js";import"./chevron-right-X0pKcDqm.js";import"./Heading-DoAu3hzM.js";import"./FieldError-Cmx8qBX6.js";import"./Text-C_3jh_f2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
