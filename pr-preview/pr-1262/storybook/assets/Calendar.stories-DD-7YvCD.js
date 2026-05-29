import{$ as c,a as m,r as l,j as d}from"./iframe-CDEaDO_F.js";import{C as n}from"./Calendar-BWInenhL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CEJFNs6i.js";import"./Button-VtRoDegr.js";import"./utils-OMrxCTYB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DV64-eP0.js";import"./useFocusRing-D6D_N6j5.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./RSPContexts-ByGtY0Qq.js";import"./Text-BM9CJ7ZD.js";import"./useDateFormatter-54g7py1P.js";import"./useControlledState-DL-5sHQJ.js";import"./useLocalizedStringFormatter-BYvnlSsE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1msOMiu.js";import"./useEvent-CWkInWDY.js";import"./getScrollParent-DqH0lpOQ.js";import"./scrollIntoView-Bi7y7USg.js";import"./useDescription-DD-0CJF1.js";import"./VisuallyHidden-D_heY0RE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B3b1DOqZ.js";import"./createLucideIcon-B5m9rABL.js";import"./chevron-right-Dw-RqsU-.js";import"./Button-BRFWodMz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./Heading-CLMFJaeB.js";import"./FieldError-28bsvyp8.js";import"./Text-I0yIqnfi.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
