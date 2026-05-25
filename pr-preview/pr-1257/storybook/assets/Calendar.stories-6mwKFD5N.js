import{$ as c,a as m,r as l,j as d}from"./iframe-BgrJi1dO.js";import{C as n}from"./Calendar-DMsrNmpL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3Pc5Bx9C.js";import"./Button-CzM4r0Q8.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-ocAKFH.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./RSPContexts-DvRO0UAG.js";import"./Text-BwTtjMDe.js";import"./useDateFormatter-8efUWxIL.js";import"./useControlledState-D4OQ_QAh.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DbAMDDv6.js";import"./useEvent-MCxZUdsg.js";import"./getScrollParent-D_EmKFyf.js";import"./scrollIntoView-BBkPTMW6.js";import"./useDescription-jfs0LzVP.js";import"./VisuallyHidden-BtrvhTUL.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CKF2BSVR.js";import"./createLucideIcon-Xa2G53WL.js";import"./chevron-right-BUaHI2zg.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Heading-Pcy6kdR-.js";import"./FieldError-CK0qCQ53.js";import"./Text-U40rqCZc.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
