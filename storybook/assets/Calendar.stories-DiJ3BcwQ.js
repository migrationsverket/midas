import{$ as c,a as m,r as l,j as d}from"./iframe-ClA4Jp0w.js";import{C as n}from"./Calendar-LNjwOZub.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BDBIBOLL.js";import"./Button-lxcybUX-.js";import"./utils-D0z16UKm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BjxHpkJU.js";import"./useFocusRing-CH7YMdaA.js";import"./index-bNRMcRC-.js";import"./index-B9CA3Byf.js";import"./useLabels-l7dZfeia.js";import"./useButton-Dq5YitBv.js";import"./RSPContexts-iTkphylR.js";import"./Text-BOHdvQkr.js";import"./useDateFormatter-ClEgqDi7.js";import"./useControlledState-BVmLEOQ4.js";import"./useLocalizedStringFormatter-LKr8XwmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cy7t0KC-.js";import"./useEvent-YydGr1-7.js";import"./getScrollParent-DQC80py1.js";import"./scrollIntoView-pB7m18ZN.js";import"./useDescription-iMciGuDR.js";import"./VisuallyHidden-Dka0OyWW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Y3od6e81.js";import"./createLucideIcon-nVFpiFPl.js";import"./chevron-right-CGDMuaml.js";import"./Button-D3i3Yqak.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-f9qOXevm.js";import"./Heading-BDTZomZp.js";import"./FieldError-CCOnpqUO.js";import"./Text-BtZnFY82.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
