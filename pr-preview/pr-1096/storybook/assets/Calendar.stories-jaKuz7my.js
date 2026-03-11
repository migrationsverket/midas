import{$ as c,a as m,r as l,j as d}from"./iframe-CVrVLVvE.js";import{C as n}from"./Calendar-BQ-ftGsu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSZRqYAX.js";import"./Button-DKh6gE9A.js";import"./utils-BQ4eCaf5.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dy9iPVZJ.js";import"./useFocusRing-CcC1WvlX.js";import"./index-BwMrQiTV.js";import"./index-Cf_el0h6.js";import"./useLabels-DIC4GUAu.js";import"./useButton-gbPJhBj_.js";import"./RSPContexts-B3Vd-HVy.js";import"./Text-HjnVJGnN.js";import"./useDateFormatter-C9VERUJQ.js";import"./useControlledState-CFHykN0p.js";import"./useLocalizedStringFormatter-tPqq8kYp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-exhmIsP1.js";import"./useEvent-DbHEkQiv.js";import"./getScrollParent-BV3r_DJq.js";import"./scrollIntoView-Bievv59Y.js";import"./useDescription-DOe2Pr8v.js";import"./VisuallyHidden-3CXgcY_E.js";import"./clsx-Ciqy0D92.js";import"./Button-CzwXcWRm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CZN-mYff.js";import"./createLucideIcon-vz5WAnkp.js";import"./chevron-left-C8w_j9wh.js";import"./chevron-right-apDg6wps.js";import"./Heading-CE_jETY5.js";import"./FieldError-QAxLbE52.js";import"./Text-Btrte15F.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
