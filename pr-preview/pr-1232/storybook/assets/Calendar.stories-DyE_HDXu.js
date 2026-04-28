import{$ as c,a as m,r as l,j as d}from"./iframe-BWYHj7v3.js";import{C as n}from"./Calendar-BvhZbpvB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BHV7kvxc.js";import"./Button-wGSaEaEO.js";import"./utils-D2pxdcvN.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4Hoeqhu.js";import"./useFocusRing-Dyg95bXZ.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./RSPContexts-Cti5diL6.js";import"./Text-C4Gl7LUF.js";import"./useDateFormatter-lc3Mginp.js";import"./useControlledState-DsTneGsr.js";import"./useLocalizedStringFormatter-C_LLFDGY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DsuH9gAI.js";import"./useEvent-y7Reijfp.js";import"./getScrollParent-DoohMUen.js";import"./scrollIntoView-DbvRPzab.js";import"./useDescription-DkSuF9rM.js";import"./VisuallyHidden-CBrM5tre.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B1eDSpPG.js";import"./createLucideIcon-Dbzq6jGp.js";import"./chevron-right-D4tsZYoS.js";import"./Button-DEdirHEy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./Heading-Cu3egZD8.js";import"./FieldError-BSBdPgF-.js";import"./Text-7TDSW4-z.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
