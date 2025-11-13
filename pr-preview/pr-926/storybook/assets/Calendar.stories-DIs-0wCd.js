import{$ as p,a as m,r as l,j as d}from"./iframe-FtEa7VQj.js";import{C as n}from"./Calendar-n95hrqyN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C7CS8kU_.js";import"./Button-Dqxngb1_.js";import"./utils-COfxaHf8.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvRPXbsY.js";import"./useFocusRing-D8XlJGR3.js";import"./index-DAEPIqsi.js";import"./index-loZrsOH8.js";import"./useLabels-BKIUEpC2.js";import"./useButton-cS6iWc3P.js";import"./RSPContexts-BCdKzl2o.js";import"./Text-ESAF9nxg.js";import"./useDateFormatter-U7uTzlxv.js";import"./useControlledState-CCkxZ5nC.js";import"./useLocalizedStringFormatter-iKxxmVnK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRTaWmxj.js";import"./useEvent-S9LJqkM-.js";import"./getScrollParent-D2Nxm4kL.js";import"./scrollIntoView-DgbQWClN.js";import"./useDescription-BpV-4EC3.js";import"./VisuallyHidden-DfcEnh0s.js";import"./clsx-Ciqy0D92.js";import"./Button-BHyJkgwt.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BFKkZNi-.js";import"./chevron-right-CYpK35GB.js";import"./Heading-CR3FQ06N.js";import"./FieldError-ClKp2imH.js";import"./Text-DiMsQpYZ.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
