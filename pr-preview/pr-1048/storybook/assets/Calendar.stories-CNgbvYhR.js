import{$ as c,a as m,r as l,j as d}from"./iframe-C7bjyZwM.js";import{C as n}from"./Calendar-C3_1lMZO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DuxIqzeI.js";import"./Button-C2JLJi6L.js";import"./utils-CIiQPwyX.js";import"./clsx-B-dksMZM.js";import"./Hidden-aFyf7gu8.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./RSPContexts-CnvL7WZL.js";import"./Text-BJaGdqWL.js";import"./useDateFormatter-ZvRsBsl7.js";import"./useControlledState-D62BjFgf.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRPY8_S0.js";import"./useEvent-B8VlZ3mC.js";import"./getScrollParent-BeyReYlz.js";import"./scrollIntoView-BhIbPiYG.js";import"./useDescription-CweaZgNC.js";import"./VisuallyHidden-B7bbQpVf.js";import"./clsx-Ciqy0D92.js";import"./Button-B0ce8tXc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./createLucideIcon-C5pih5R6.js";import"./chevron-left-D078DVOi.js";import"./chevron-right-B7qAXK4F.js";import"./Heading-CT2NG_Xd.js";import"./FieldError-BXfQY4zD.js";import"./Text-C5NeNGM2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
