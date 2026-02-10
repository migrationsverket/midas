import{$ as c,a as m,r as l,j as d}from"./iframe-B5c7-TS8.js";import{C as n}from"./Calendar-CGa2m27k.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-cjxA4-OS.js";import"./Button-C5Qp8sRI.js";import"./utils-OlD28Oco.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgJfQ7aj.js";import"./useFocusRing-C18dDj3L.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./RSPContexts-yBqgqokE.js";import"./Text-DYD59UTl.js";import"./useDateFormatter-BDRvi75X.js";import"./useControlledState-DEZrae_z.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DBJWHIG4.js";import"./useEvent-LUYrey9d.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BhjMw0Jb.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./clsx-Ciqy0D92.js";import"./Button-MSp50WJ0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";import"./createLucideIcon-DHsWZlEk.js";import"./chevron-left-DB2kaaY6.js";import"./chevron-right-0hFqNUmU.js";import"./Heading-C6uCjmJK.js";import"./FieldError-BUOTNQMM.js";import"./Text-CXLpjGso.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
