import{$ as c,a as m,r as l,j as d}from"./iframe-Bn-EzP7D.js";import{C as n}from"./Calendar-CU0SWpeJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DefMIW6V.js";import"./Button-Cc7PB3J4.js";import"./utils-CQaUuJEL.js";import"./clsx-B-dksMZM.js";import"./Hidden-CqBpBgFh.js";import"./useFocusRing-vAuqzLMr.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./RSPContexts-_DVvg2ct.js";import"./Text-Bqg57V95.js";import"./useDateFormatter-BL2uxv6c.js";import"./useControlledState-DvYkz0eX.js";import"./useLocalizedStringFormatter-C_da5e_o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BytjWiQg.js";import"./useEvent-BUUS48jd.js";import"./getScrollParent-CgJ84-Vu.js";import"./scrollIntoView-D5GyckjK.js";import"./useDescription-DriieE3T.js";import"./VisuallyHidden-CKLV3oRP.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cj8x_TW3.js";import"./createLucideIcon-DeptTAqN.js";import"./chevron-right-Bkigq1Zg.js";import"./Button-CQePxhIL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./Heading-BKnq4xgM.js";import"./FieldError-Bmf4SDk8.js";import"./Text-6vmkm8mz.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
