import{$ as p,a as m,r as l,j as d}from"./iframe-B3cZlMLq.js";import{C as n}from"./Calendar-i7Mv5Tg6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BZbk3Pby.js";import"./Button-D5tqtILh.js";import"./utils-C2IA6zAi.js";import"./clsx-B-dksMZM.js";import"./Hidden-qU92wu5k.js";import"./useFocusRing-Dkrn5RRD.js";import"./index-pKcy2ErU.js";import"./index-D2uszoET.js";import"./useLabels-gayIneyO.js";import"./useButton-DYFBzz8O.js";import"./RSPContexts-BGkD65I-.js";import"./Text-BDM3k8gp.js";import"./useDateFormatter-j9xb4i3v.js";import"./useControlledState-BjN-icKh.js";import"./useLocalizedStringFormatter-BxBaRmG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-EbLqXXBi.js";import"./useEvent-DoDjcMOQ.js";import"./getScrollParent-DjWGnAkK.js";import"./scrollIntoView-3f3I6qXZ.js";import"./useDescription-Ca1I1_7m.js";import"./VisuallyHidden-DFgNwsT9.js";import"./clsx-Ciqy0D92.js";import"./Button-D3BwvYvD.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-ChaREiKB.js";import"./createLucideIcon-cIeaTryR.js";import"./chevron-right-C80un45O.js";import"./Heading-DL-GOIro.js";import"./FieldError-CwMfAejD.js";import"./Text-DMP_bw7r.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
