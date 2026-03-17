import{$ as c,a as m,r as l,j as d}from"./iframe--IbK7uvL.js";import{C as n}from"./Calendar-ZJjBWQGQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DEyf-us1.js";import"./Button-Re0Yy6Pp.js";import"./utils-CA7lVtot.js";import"./clsx-B-dksMZM.js";import"./Hidden-BExZVod8.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./RSPContexts-CuIQ88x9.js";import"./Text-fLskqfUb.js";import"./useDateFormatter-BfENiDWV.js";import"./useControlledState-xHQ8O9W1.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEMWzQl_.js";import"./useEvent-C2aKNcd9.js";import"./getScrollParent-BemRRphk.js";import"./scrollIntoView-DpbtecG_.js";import"./useDescription-C_IbgAiL.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Coxp5xQ9.js";import"./createLucideIcon-CZI6jzSG.js";import"./chevron-right-CIIzvpdq.js";import"./Button-BYHfDOH9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";import"./Heading-SJsGu3yX.js";import"./FieldError-C7TTOr5D.js";import"./Text-qvWOJ16d.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
