import{$ as c,a as m,r as l,j as d}from"./iframe-BvaNkZ6j.js";import{C as n}from"./Calendar-BDpHpIy5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cow1tphu.js";import"./Button-DSPwUnGO.js";import"./utils-CNgJIKxW.js";import"./clsx-B-dksMZM.js";import"./Hidden-D5Pu3QcA.js";import"./useFocusRing-qCtyWvqN.js";import"./index-1t0eXXk7.js";import"./index-CU93jXVK.js";import"./useLabels-COvNNRTy.js";import"./useButton-DkC5W3Ti.js";import"./RSPContexts-DNdoMlvy.js";import"./Text-YlHeMW3d.js";import"./useDateFormatter-DhN1uX_p.js";import"./useControlledState-jnjho331.js";import"./useLocalizedStringFormatter-DRG9aNFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DwwYt57Q.js";import"./useEvent-07YEmXce.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DJyGbkRQ.js";import"./VisuallyHidden-QqUieSTF.js";import"./clsx-Ciqy0D92.js";import"./Button-BwfGni6y.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B1tb5Rk6.js";import"./createLucideIcon-C_AWNDAW.js";import"./chevron-left-EF01p30B.js";import"./chevron-right-_W4jMEOp.js";import"./Heading-BGtGvdOe.js";import"./FieldError-CXm6_yyH.js";import"./Text-Bnqxz3nE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
