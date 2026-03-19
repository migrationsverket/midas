import{$ as c,a as m,r as l,j as d}from"./iframe-DU8NLsSw.js";import{C as n}from"./Calendar-DrEgDRlH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBa5yKo0.js";import"./Button-CLXNoy7Y.js";import"./utils-DschNtJz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjBEVfsr.js";import"./useFocusRing-BMKmF6E1.js";import"./index-C6itxEvf.js";import"./index-DDAOQfjR.js";import"./useLabels-C6Oc5R34.js";import"./useButton-D62E3rKh.js";import"./RSPContexts-B6N-eI9R.js";import"./Text-BZqm9ELR.js";import"./useDateFormatter-CjDf4H6S.js";import"./useControlledState-CI3nCHv5.js";import"./useLocalizedStringFormatter-Cj1K2IHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DV3LrtrP.js";import"./useEvent-DHKGnH5O.js";import"./getScrollParent-vSGEZB_b.js";import"./scrollIntoView-D3YlmEdr.js";import"./useDescription-DHAJH0jb.js";import"./VisuallyHidden-CTGBozXG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B_bVnG1k.js";import"./createLucideIcon-24KtAMn6.js";import"./chevron-right-BbpXNZeQ.js";import"./Button-CMEO0cNM.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CFXzQyxC.js";import"./Heading-BFFMpYOw.js";import"./FieldError-CwLWEdZN.js";import"./Text-Dif5ls4o.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
