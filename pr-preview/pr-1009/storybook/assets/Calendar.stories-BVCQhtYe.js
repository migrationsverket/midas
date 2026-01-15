import{$ as c,a as m,r as l,j as d}from"./iframe-B2hXki5s.js";import{C as n}from"./Calendar-DuhbOwrh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bnw-nvlc.js";import"./Button-CCrDbf-3.js";import"./utils-D-cZNYk5.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxUrxLhM.js";import"./useFocusRing-HF0eSiIK.js";import"./index-DvCY6ndx.js";import"./index-nI6qS4bb.js";import"./useLabels-DD9ZOY8B.js";import"./useButton-DA4tSPb8.js";import"./RSPContexts-F7HE9ubk.js";import"./Text-CkCJ-ZN3.js";import"./useDateFormatter-CuljB3pz.js";import"./useControlledState-77pcsCop.js";import"./useLocalizedStringFormatter-CgQtT4cY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQPK7u60.js";import"./useEvent-CvQwc1qa.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Co8q0X78.js";import"./VisuallyHidden-91aD8JD1.js";import"./clsx-Ciqy0D92.js";import"./Button-lNOPEuzW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCY5sa9P.js";import"./createLucideIcon-CoTtBMM7.js";import"./chevron-left-b_aGLDUE.js";import"./chevron-right-BSw1uIwV.js";import"./Heading-BZJ9VZkt.js";import"./FieldError-tZ4Rxwzl.js";import"./Text-zXbuoED7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
