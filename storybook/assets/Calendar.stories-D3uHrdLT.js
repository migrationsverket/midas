import{$ as c,a as m,r as l,j as d}from"./iframe-f7w4ng_k.js";import{C as n}from"./Calendar-CVotyvUP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cn2rNfAa.js";import"./Button-Cc-TNn9L.js";import"./utils-CsngUmKh.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTte53jM.js";import"./useFocusRing-D2_28YrY.js";import"./index-BPHMLxna.js";import"./index-AUNQREmD.js";import"./useLabels-C80eq718.js";import"./useButton-D4PZb1F-.js";import"./RSPContexts-B8g52CrK.js";import"./Text-DxL6Rji7.js";import"./useDateFormatter-w9IJWSY2.js";import"./useControlledState-HdtZioBu.js";import"./useLocalizedStringFormatter-Cul2dCid.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C1TQlf8Q.js";import"./useEvent-CYtWltky.js";import"./getScrollParent-RY3Tj0rv.js";import"./scrollIntoView-BbkBiiSm.js";import"./useDescription-s0qvynA_.js";import"./VisuallyHidden-C0OILqoq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cp1aCnqf.js";import"./createLucideIcon-BKDiJvQY.js";import"./chevron-right-B9HW9Dhp.js";import"./Button-DjmPZJ5Y.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BW0f4aMp.js";import"./Heading-Dw8tjQVL.js";import"./FieldError-CSW0NKF8.js";import"./Text-KyyKZpMF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
