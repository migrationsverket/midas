import{$ as c,a as m,r as l,j as d}from"./iframe-BtoRqfbN.js";import{C as n}from"./Calendar-CoT0Hd1D.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D4_svgYE.js";import"./Button-D0NLyYor.js";import"./utils-D3T2l2Oh.js";import"./clsx-B-dksMZM.js";import"./Hidden-DmNqBwSB.js";import"./useFocusRing-CPJmXdz2.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./RSPContexts-DkTToRLK.js";import"./Text-x1siHFmD.js";import"./useDateFormatter-Bror2LKL.js";import"./useControlledState-acke6wY8.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DMqv8wU_.js";import"./useEvent-DfABwBS6.js";import"./getScrollParent-D4tvg9G7.js";import"./scrollIntoView-DKC0Wlwj.js";import"./useDescription-Dme_kk-C.js";import"./VisuallyHidden-DH8wexDg.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-qKRmIUh1.js";import"./createLucideIcon-BGwZIy7f.js";import"./chevron-right-BDc8Qhs5.js";import"./Button-Dz0YcLF0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./Heading-CYWasPPU.js";import"./FieldError-B4waYEQL.js";import"./Text-UZHsyA5K.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
