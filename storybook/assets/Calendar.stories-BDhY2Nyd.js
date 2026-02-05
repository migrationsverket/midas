import{$ as c,a as m,r as l,j as d}from"./iframe-BZXvBH-F.js";import{C as n}from"./Calendar-DYI3rjhW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-1gZlLVWr.js";import"./Button-qgUbEQ-x.js";import"./utils-D0cahHWr.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnqtCAFp.js";import"./useFocusRing-BIld4Qij.js";import"./index-DMx_9hj9.js";import"./index-BV9gomH3.js";import"./useLabels-D7ZAiJsb.js";import"./useButton-DYEcZB5q.js";import"./RSPContexts-BaMpnc-i.js";import"./Text-HwH_WpJH.js";import"./useDateFormatter-ClMe7tqC.js";import"./useControlledState-92nob15h.js";import"./useLocalizedStringFormatter-CZJb1YX-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7LZs1Pk.js";import"./useEvent-Ba2kTEre.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-yvRYLG0u.js";import"./VisuallyHidden-BrTCLNZ6.js";import"./clsx-Ciqy0D92.js";import"./Button-fGCQSPeO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMdn7775.js";import"./createLucideIcon-DZcmQE6C.js";import"./chevron-left-nd6tkwnO.js";import"./chevron-right-CCVINyQ2.js";import"./Heading-ldMWt8d7.js";import"./FieldError-BKwMNI7Z.js";import"./Text-u8_6XOdU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
