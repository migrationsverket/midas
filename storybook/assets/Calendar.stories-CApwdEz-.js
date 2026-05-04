import{$ as c,a as m,r as l,j as d}from"./iframe-y_ZEGYiJ.js";import{C as n}from"./Calendar-CmYpOHMr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-JV2U6Ve_.js";import"./Button-Ch-G3kN7.js";import"./utils-8dWn79IV.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu8enaQS.js";import"./useFocusRing-CZ7WfYYW.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./RSPContexts-DqgeagmW.js";import"./Text-D9z2hAIA.js";import"./useDateFormatter-YjzXVTWa.js";import"./useControlledState-DHT9vmuC.js";import"./useLocalizedStringFormatter-lMWk04dJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZzCXCYl.js";import"./useEvent-Cdh_4pNz.js";import"./getScrollParent-vEn_skDo.js";import"./scrollIntoView-Dr9gm-NQ.js";import"./useDescription-ZoeRT3XG.js";import"./VisuallyHidden-CIMmvdq0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-NdrIXSqO.js";import"./createLucideIcon-BSy6nR5q.js";import"./chevron-right-CWtX7sA-.js";import"./Button-DfIwZ4Yr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./Heading-Dkuwhauc.js";import"./FieldError-DVm8G2oT.js";import"./Text-B7AL5jZC.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
