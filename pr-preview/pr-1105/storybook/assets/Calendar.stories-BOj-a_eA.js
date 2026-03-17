import{$ as c,a as m,r as l,j as d}from"./iframe-BuuAXrXC.js";import{C as n}from"./Calendar-I4GXn1Dw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D6V3Xgx4.js";import"./Button-DvBK65Gf.js";import"./utils-CtsDHbZe.js";import"./clsx-B-dksMZM.js";import"./Hidden-E4h0Oh4e.js";import"./useFocusRing-CrOe_O8c.js";import"./index-BbfDc97u.js";import"./index-32pD7yrL.js";import"./useLabels-CGKYF4iS.js";import"./useButton-BnwORE09.js";import"./RSPContexts-GYXhZ2kG.js";import"./Text-6_usI8rI.js";import"./useDateFormatter-BTNOr-4t.js";import"./useControlledState-jhkXU9fd.js";import"./useLocalizedStringFormatter-BEGIzj17.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CxsANN4V.js";import"./useEvent-CPDI-Sn6.js";import"./getScrollParent-CUa_lcZe.js";import"./scrollIntoView-BPvWn1k3.js";import"./useDescription-DdQEt6e5.js";import"./VisuallyHidden-6El7FPtm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DDVUxqI_.js";import"./createLucideIcon-iyjQV_Z5.js";import"./chevron-right-Du3lyux-.js";import"./Button-DGWTIzH5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B4LAAnFe.js";import"./Heading-BY8SUnpc.js";import"./FieldError-EC843UUw.js";import"./Text-ri3V3kO7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
