import{$ as c,a as m,r as l,j as d}from"./iframe-CdQJjHUi.js";import{C as n}from"./Calendar-BZCOMFYd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Fo_z8gFz.js";import"./Button-BTABl2Ab.js";import"./utils-DNRK4ZX5.js";import"./clsx-B-dksMZM.js";import"./Hidden-CC5jBV06.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./RSPContexts-AyfQfw_C.js";import"./Text-B0vmQyu5.js";import"./useDateFormatter-BI_N4xU8.js";import"./useControlledState-C5Qq6LCr.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ACXC_gpN.js";import"./useEvent-B7b_rfbF.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-xXh2sHRV.js";import"./VisuallyHidden-TcZUaxvx.js";import"./clsx-Ciqy0D92.js";import"./Button-CglFoMow.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./createLucideIcon-DPIpdseQ.js";import"./chevron-left-oD1-KdgG.js";import"./chevron-right-vxNYsBg0.js";import"./Heading-C1LTQQVo.js";import"./FieldError-CD4-cihP.js";import"./Text-Ch7iewHE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
