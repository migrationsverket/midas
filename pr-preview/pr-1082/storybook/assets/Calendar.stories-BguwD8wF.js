import{$ as c,a as m,r as l,j as d}from"./iframe-CCQoa_za.js";import{C as n}from"./Calendar-DI99WRKy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Yq4HRMX2.js";import"./Button-BrsQgG2O.js";import"./useFocusRing-BCtmiU0K.js";import"./utils-BdXRUyql.js";import"./clsx-B-dksMZM.js";import"./index-B-zUS5Y_.js";import"./index-v9D4YVUO.js";import"./Hidden-DcjYmRqi.js";import"./useLabels-B6SFlZG6.js";import"./useButton-CrmhM509.js";import"./RSPContexts-7vhnChNh.js";import"./Text-YX2OQKIh.js";import"./useDateFormatter-gRhc7XEM.js";import"./useControlledState-CDPjHx4z.js";import"./useLocalizedStringFormatter-DGLdWeqa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7cVUbKB.js";import"./useEvent-CScpbFfp.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTFIEJBZ.js";import"./VisuallyHidden-B--Ked72.js";import"./clsx-Ciqy0D92.js";import"./Button-C_b8qgGp.js";import"./Button.module-CPCFE9o0.js";import"./useLocalizedStringFormatter-C-e4eVhQ.js";import"./createLucideIcon-Q-uPorfw.js";import"./chevron-left-BD0zLRgb.js";import"./chevron-right-C6J1-s7P.js";import"./Heading-e8mJhic5.js";import"./FieldError-CpKUhFOP.js";import"./Text-CqLZ0QeB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
