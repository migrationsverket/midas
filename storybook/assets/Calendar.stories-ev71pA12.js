import{$ as c,a as m,r as l,j as d}from"./iframe-D6sKX6II.js";import{C as n}from"./Calendar-DGq-iAKf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CdxUlfuw.js";import"./Button-BaCPfcFA.js";import"./utils-C4RQL2_3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGXb4i6s.js";import"./useFocusRing-CSkB88rB.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./RSPContexts-DvpaVa_O.js";import"./Text-BrckZ8Xv.js";import"./useDateFormatter-CCWnbmaF.js";import"./useControlledState-lIXa58Dk.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-jRDz-o72.js";import"./useEvent-DGV7xSYV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-kimTwMt1.js";import"./VisuallyHidden-D9YxITQY.js";import"./clsx-Ciqy0D92.js";import"./Button-DCKGBAMV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CajHjEjY.js";import"./createLucideIcon-sDHC6FPE.js";import"./chevron-left-B-0e-Xx1.js";import"./chevron-right-BEEwxKfa.js";import"./Heading-DbyuvViy.js";import"./FieldError-Bvl7FuR6.js";import"./Text-jsf--eUF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
