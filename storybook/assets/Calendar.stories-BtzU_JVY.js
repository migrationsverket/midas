import{$ as c,a as m,r as l,j as d}from"./iframe-BMI9LcwD.js";import{C as n}from"./Calendar-NBI9NDhe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ClhYYOjD.js";import"./Button-Czr2XHcN.js";import"./utils-CUKuiloA.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWYxNcIi.js";import"./useFocusRing-DwyCmeGr.js";import"./index-fsqC8uXs.js";import"./index-CWh_0PxX.js";import"./useLabels-ipZVyWiu.js";import"./useButton-BpdaM1mY.js";import"./RSPContexts-CxOtl2I6.js";import"./Text-IBNi6CET.js";import"./useDateFormatter-BjXTcb9v.js";import"./useControlledState-DULbg8rB.js";import"./useLocalizedStringFormatter-BGq9CHdg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D5RlGeze.js";import"./useEvent-Cmtr8QN3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DUAcqLRU.js";import"./VisuallyHidden-CqjPFeZK.js";import"./clsx-Ciqy0D92.js";import"./Button-k6WQaZpy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzttMcKh.js";import"./createLucideIcon-BUDo9TFX.js";import"./chevron-left-mv25PEJT.js";import"./chevron-right-B0a1p9qI.js";import"./Heading-BS2BXfs4.js";import"./FieldError-Bn65JKdh.js";import"./Text-Cp8-jRoc.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
