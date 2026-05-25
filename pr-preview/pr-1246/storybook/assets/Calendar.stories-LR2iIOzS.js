import{$ as c,a as m,r as l,j as d}from"./iframe-RhDbrXC3.js";import{C as n}from"./Calendar-BOqVfuJK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BAnugHw-.js";import"./Button-B7Qh-IV7.js";import"./utils-DW8RLnA8.js";import"./clsx-B-dksMZM.js";import"./Hidden-UG-LGAyj.js";import"./useFocusRing-gsVXsph9.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./RSPContexts-CYLIcFJW.js";import"./Text-BjSdk3hx.js";import"./useDateFormatter-jopmD-Oi.js";import"./useControlledState-DqxoR-5f.js";import"./useLocalizedStringFormatter-DVReLGbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5egeYz0.js";import"./useEvent-Cahrq6rW.js";import"./getScrollParent-CN5B_Bz1.js";import"./scrollIntoView-BRqXrGDm.js";import"./useDescription-D6Rbp9cO.js";import"./VisuallyHidden-BacDaEj4.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dbs0lAYw.js";import"./createLucideIcon-CO3bJS-y.js";import"./chevron-right-B4eUTlyD.js";import"./Button-ByeM9eCK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./Heading-BSbl4Tma.js";import"./FieldError-BMJ6O_ac.js";import"./Text-CcqjDRD2.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
