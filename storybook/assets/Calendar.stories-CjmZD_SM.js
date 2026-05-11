import{$ as c,a as m,r as l,j as d}from"./iframe-B8ApkfN9.js";import{C as n}from"./Calendar-B5wmK-Mn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWV9gMmm.js";import"./Button-D0ujuU3m.js";import"./utils-DY9Yxgt6.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3-5R_c4.js";import"./useFocusRing-t4lmh3Yy.js";import"./index-B1GJl5u8.js";import"./index-Dam3589Q.js";import"./useLabel-CJkRyn3E.js";import"./useLabels-C6kkXsgA.js";import"./useButton-CG0EpAju.js";import"./RSPContexts-BYDi1jbG.js";import"./Text-DCpVGc-0.js";import"./useDateFormatter-BegxHukO.js";import"./useControlledState-CcqX14cB.js";import"./useLocalizedStringFormatter-fZ8nAVLV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BcX9-QnF.js";import"./useEvent-INSFkTc2.js";import"./getScrollParent-BsnoEbY8.js";import"./scrollIntoView-ChlyCIqm.js";import"./useDescription-C1wJSBol.js";import"./VisuallyHidden-Cpti0KaM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-cpbFhMS6.js";import"./createLucideIcon-tZEetkZ6.js";import"./chevron-right-BtsNuYsK.js";import"./Button-DBfSMFHv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-5IW1LiLo.js";import"./Heading-dTcXRExX.js";import"./FieldError-BN9b5ZCd.js";import"./Text-nPgffpxE.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
