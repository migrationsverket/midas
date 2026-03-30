import{$ as c,a as m,r as l,j as d}from"./iframe-mq0SU6Z9.js";import{C as n}from"./Calendar-D3fVsvg8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-IUuds1aG.js";import"./Button-D5Wvq1Pl.js";import"./utils-BJUm3EKx.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNCyzMOi.js";import"./useFocusRing-D78q_c7L.js";import"./index-CiCCX6wU.js";import"./index-Cnhx9KUB.js";import"./useLabel-B5pFd3Xm.js";import"./useLabels-CIFPEs6o.js";import"./useButton-KkDhW6MW.js";import"./RSPContexts-4AWQzH5S.js";import"./Text-BbVeu3X7.js";import"./useDateFormatter-CJjW7zLN.js";import"./useControlledState-CIPDjvWu.js";import"./useLocalizedStringFormatter-6SvQMdyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cr4l9WGQ.js";import"./useEvent-D25AVNy_.js";import"./getScrollParent-CQdctl5w.js";import"./scrollIntoView-B1GlEmmZ.js";import"./useDescription-BIdqTDt5.js";import"./VisuallyHidden-BbUhQySq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CWVBZl27.js";import"./createLucideIcon-D9XqkqtN.js";import"./chevron-right-yOJf1s67.js";import"./Button-Cvp14hiG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Deu_fvUu.js";import"./Heading-Dxt_SHlA.js";import"./FieldError-f-MdB8SD.js";import"./Text-QATMG5Uj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
