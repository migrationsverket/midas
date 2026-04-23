import{$ as c,a as m,r as l,j as d}from"./iframe-C-mFL-y5.js";import{C as n}from"./Calendar-nNuXnZrW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B-nz20E3.js";import"./Button-muDgoa96.js";import"./utils-D1nXJARU.js";import"./clsx-B-dksMZM.js";import"./Hidden-9ao8Y1ps.js";import"./useFocusRing-BcE_QfPF.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./RSPContexts-D19sCzde.js";import"./Text-BMqghmwo.js";import"./useDateFormatter-BIKUcBK7.js";import"./useControlledState-CYklShRN.js";import"./useLocalizedStringFormatter-DwJHjI96.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-RlH990VU.js";import"./useEvent-B7aauAUS.js";import"./getScrollParent-doaue_Gl.js";import"./scrollIntoView-CtFeL4L4.js";import"./useDescription-BVglMPey.js";import"./VisuallyHidden-CO1695QU.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D6Fm0xas.js";import"./createLucideIcon-B54AhZJE.js";import"./chevron-right-lHlUuWDG.js";import"./Button-DbyCtJuo.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./Heading-DaXl97NH.js";import"./FieldError-5__MdH0k.js";import"./Text-CCSjYwix.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
