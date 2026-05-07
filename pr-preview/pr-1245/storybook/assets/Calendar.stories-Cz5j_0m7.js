import{$ as c,a as m,r as l,j as d}from"./iframe-B3CWHhIN.js";import{C as n}from"./Calendar-T-e2Athm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ClDpeIMK.js";import"./Button-BI1n4R5H.js";import"./utils-Jns7c9tB.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgV_CbEL.js";import"./useFocusRing-Dqy31Yu8.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./RSPContexts-D5wE8Zis.js";import"./Text-CjXkmRxL.js";import"./useDateFormatter-JCZXj7h3.js";import"./useControlledState-DO7MzpyM.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CjW3TO62.js";import"./useEvent-Dz0-ORXf.js";import"./getScrollParent-k-5r8MVO.js";import"./scrollIntoView-CEOdDLMX.js";import"./useDescription-BXbEU8r2.js";import"./VisuallyHidden-DPG3Zp-i.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ch3lOchs.js";import"./createLucideIcon-B55uVL59.js";import"./chevron-right-BxDNgGcP.js";import"./Button-CFIqCifj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Heading-J4CHMMjr.js";import"./FieldError-DaCLZlSC.js";import"./Text-BEt0Rg_V.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
