import{$ as c,a as m,r as l,j as d}from"./iframe-DTfJSErE.js";import{C as n}from"./Calendar-BQaMlObP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BYNnAj8E.js";import"./Button-DSjX8i_m.js";import"./utils-B73muxhO.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7A9_Rse.js";import"./useFocusRing-B1zsHiit.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./RSPContexts-DA83ZcWW.js";import"./Text-D5Dq4q45.js";import"./useDateFormatter-4rVsu2dB.js";import"./useControlledState-BaQo_f5T.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CkRKkXMC.js";import"./useEvent-BxSLArWq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-gEBlcK5R.js";import"./VisuallyHidden-CKITv4VW.js";import"./clsx-Ciqy0D92.js";import"./Button-Bw1mXw0X.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BApN70s6.js";import"./createLucideIcon-DuvGCIEA.js";import"./chevron-left-eUHj3M43.js";import"./chevron-right-BHBW3TGT.js";import"./Heading-DZRygZKP.js";import"./FieldError-Bkpg5gnq.js";import"./Text-DDwjjFnB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
