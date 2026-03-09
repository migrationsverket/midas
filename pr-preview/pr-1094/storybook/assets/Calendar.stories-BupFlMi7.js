import{$ as c,a as m,r as l,j as d}from"./iframe-C2hHAX_c.js";import{C as n}from"./Calendar-SqR-mVJ7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DMsFjMFL.js";import"./Button-D8SyKFCR.js";import"./utils-CYjcBBm1.js";import"./clsx-B-dksMZM.js";import"./Hidden-UkteWA62.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./RSPContexts-PGRfE4kt.js";import"./Text-CEBbuk7S.js";import"./useDateFormatter-Ck9CkPt3.js";import"./useControlledState-Bqiy5-s7.js";import"./useLocalizedStringFormatter-Cusafc4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DelP0G60.js";import"./useEvent-T4VjhQCT.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BiuYFYuv.js";import"./VisuallyHidden-DWzqY3m_.js";import"./clsx-Ciqy0D92.js";import"./Button-DlfSSXdG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./createLucideIcon-BcvDIfsv.js";import"./chevron-left-DvR-vvbL.js";import"./chevron-right-B4_Bc1o3.js";import"./Heading-BANKo2Xq.js";import"./FieldError-D33fSaC5.js";import"./Text-CXKXGfTm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
