import{$ as p,a as m,r as l,j as d}from"./iframe-DZlNJ8S4.js";import{C as n}from"./Calendar-Dq9mUsXy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BDA_Xgk8.js";import"./Button-DZzK2L52.js";import"./utils-B9k6LEuL.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6Hj6bpW.js";import"./useFocusRing-Be4o6Un8.js";import"./index-DC3wIA-C.js";import"./index-DR5hiXYB.js";import"./useLabels-f8gjmpAz.js";import"./useButton-Zpg8HNK7.js";import"./RSPContexts-Ct6xn_7s.js";import"./Text-D4o9xbR1.js";import"./useDateFormatter-BPR6vjzt.js";import"./useControlledState-CQnmbS5S.js";import"./useLocalizedStringFormatter-DCAuiTpO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-6dijl4Wk.js";import"./useEvent-DdCye5gc.js";import"./getScrollParent-Bdfnz0Kn.js";import"./scrollIntoView-qmizfuqo.js";import"./useDescription-cDUSzPki.js";import"./VisuallyHidden-6-uiIxz8.js";import"./clsx-Ciqy0D92.js";import"./Button-CXMyUl9m.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CyJv2oB_.js";import"./chevron-right-B4TR_t3f.js";import"./Heading-Bey1w6G0.js";import"./FieldError-Slpr0HzK.js";import"./Text-CdVje7KY.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
