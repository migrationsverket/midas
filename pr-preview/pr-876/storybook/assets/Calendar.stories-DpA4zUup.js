import{$ as c,a as m,r as l,j as d}from"./iframe-OzXVe_TX.js";import{C as n}from"./Calendar-NcAi3JCY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-rsH6hjVw.js";import"./Button-CQhvXyK9.js";import"./utils-tCr9uINw.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1yqLm5L.js";import"./useFocusRing-DizgMThA.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./RSPContexts-DzC-BhmG.js";import"./Text-DQmoUTPX.js";import"./useDateFormatter-B2UZxlkD.js";import"./useControlledState-CLatC1WA.js";import"./useLocalizedStringFormatter-CQl_xHp6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CuaxLaOM.js";import"./useEvent-Ch2KziZH.js";import"./getScrollParent-MM6xXv8T.js";import"./scrollIntoView-B2EduiaM.js";import"./useDescription-w2FiPpGY.js";import"./VisuallyHidden-Bi7DvSRw.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CxPdxyfR.js";import"./createLucideIcon-COmw-XaN.js";import"./chevron-right-BV41G2jx.js";import"./Button-BPALFDJW.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./Heading-CnXfeumr.js";import"./FieldError-homDiWH4.js";import"./Text-C8tynj-R.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
