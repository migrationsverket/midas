import{$ as m,a as c,r as l,j as d}from"./iframe-BooRIkJT.js";import{C as n}from"./Calendar-DYF_0g5b.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CleafZZE.js";import"./Button-BqahGGDP.js";import"./utils-744b8K7d.js";import"./useObjectRef-C69ZsrXw.js";import"./clsx-B-dksMZM.js";import"./Hidden-KVVrjxXu.js";import"./number-DfkVkf0F.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./RSPContexts-DW-eESO9.js";import"./Text-BN2_aXJR.js";import"./useDateFormatter-CBnZphG4.js";import"./useControlledState-BubjIjDe.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cu3ftdOW.js";import"./useEvent-DMEFFZ8b.js";import"./getScrollParent-GNvtAy2u.js";import"./scrollIntoView-BCltoq3s.js";import"./useDescription-yfp6cPtE.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./clsx-Ciqy0D92.js";import"./Button-t6IXiYo0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./createLucideIcon-CtYgVG1u.js";import"./chevron-left-1ReTw_nM.js";import"./chevron-right-CLUGGFo7.js";import"./Heading-Cm_OjdTp.js";import"./FieldError-B9tJyWw2.js";import"./Text-EWpD-_jr.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
