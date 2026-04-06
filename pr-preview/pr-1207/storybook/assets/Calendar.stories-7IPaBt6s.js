import{$ as c,a as m,r as l,j as d}from"./iframe-iqG9Nh4p.js";import{C as n}from"./Calendar-CPJxOEte.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DfaATIhD.js";import"./Button-DY22xJQl.js";import"./utils-CoA-xVnF.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGqHEiYj.js";import"./useFocusRing-DlPMedN0.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./RSPContexts-DhG5bWz2.js";import"./Text-CGCkUK8m.js";import"./useDateFormatter-qsk6JmWc.js";import"./useControlledState-_AGiuRBn.js";import"./useLocalizedStringFormatter-Cghfuk7K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BJ9VVEyY.js";import"./useEvent-BB-kg239.js";import"./getScrollParent-D-DaScmO.js";import"./scrollIntoView-BjOH4z_I.js";import"./useDescription-Cj0GwJ4J.js";import"./VisuallyHidden-DzRCdULp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BHTp9fQA.js";import"./createLucideIcon-Boi8XEVW.js";import"./chevron-right-CnRy-1Wu.js";import"./Button-DtcyQC3H.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./Heading-BP9YWUvV.js";import"./FieldError-BAXhhZix.js";import"./Text-CSjoqRHi.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
