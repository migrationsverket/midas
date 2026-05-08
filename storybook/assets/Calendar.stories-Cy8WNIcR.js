import{$ as c,a as m,r as l,j as d}from"./iframe-DG7j_jog.js";import{C as n}from"./Calendar-BLIdL5m3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CDrrJHh9.js";import"./Button-BXZJnhMA.js";import"./utils-DlqTy2YG.js";import"./clsx-B-dksMZM.js";import"./Hidden-C_hvN9In.js";import"./useFocusRing-CVU8iu1p.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./RSPContexts-Dpj1kihF.js";import"./Text-qxRWFYP_.js";import"./useDateFormatter-C05sc04C.js";import"./useControlledState-D0o-1ht4.js";import"./useLocalizedStringFormatter-Cy6w6_S0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B4hi1Hnu.js";import"./useEvent-DfWqyckn.js";import"./getScrollParent-BNyZCVqh.js";import"./scrollIntoView-BjyHJlah.js";import"./useDescription-C3vr3r7Y.js";import"./VisuallyHidden-DFIbjjfa.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BUC4LGRF.js";import"./createLucideIcon-DciogvgI.js";import"./chevron-right-eNjEtTKI.js";import"./Button-KUvfLJ-A.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./Heading-Vv9pEtkq.js";import"./FieldError-Jed7qGAw.js";import"./Text-BYthEMg3.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
