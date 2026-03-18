import{$ as c,a as m,r as l,j as d}from"./iframe-gH8ABtWn.js";import{C as n}from"./Calendar-g20-CFrA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bi1mvLCz.js";import"./Button-BNQc1T02.js";import"./utils-Dr0NplXF.js";import"./clsx-B-dksMZM.js";import"./Hidden-LWIlbl0l.js";import"./useFocusRing-BzsOph_O.js";import"./index-C3LVocIP.js";import"./index-BXReFhAr.js";import"./useLabels-7BQEP7LD.js";import"./useButton-BwMcnHkP.js";import"./RSPContexts-JH-s2nvd.js";import"./Text-CfaWjhbQ.js";import"./useDateFormatter-C-0sf-Bf.js";import"./useControlledState-CxcfWzqE.js";import"./useLocalizedStringFormatter-DY58p06X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnbVc4MV.js";import"./useEvent-Bt_gQioX.js";import"./getScrollParent-CLH27qmc.js";import"./scrollIntoView-BqHSzV05.js";import"./useDescription-Cs18I91_.js";import"./VisuallyHidden-CA2YzQGk.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BgyK4kfs.js";import"./createLucideIcon-BESY5gGm.js";import"./chevron-right-CxHMllVQ.js";import"./Button-BbxyNHP5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CwcPRwvH.js";import"./Heading-C0hTf1fg.js";import"./FieldError-B2F_p8LM.js";import"./Text-CW1FG424.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
