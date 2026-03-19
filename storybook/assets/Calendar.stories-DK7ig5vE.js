import{$ as c,a as m,r as l,j as d}from"./iframe-D_5POFLP.js";import{C as n}from"./Calendar-DDzdQ_r_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BNwAtyBE.js";import"./Button-fdQqDZ1U.js";import"./utils-DO_vjv71.js";import"./clsx-B-dksMZM.js";import"./Hidden-CviAMZFs.js";import"./useFocusRing--g4Wtvt8.js";import"./index-DqO0WD41.js";import"./index-cRMo-pfK.js";import"./useLabels-BXPD6Dkt.js";import"./useButton-BcNImXbv.js";import"./RSPContexts-xL2uHiKx.js";import"./Text-BKb3b_9z.js";import"./useDateFormatter-B0JKKPW_.js";import"./useControlledState-BKs1wQOh.js";import"./useLocalizedStringFormatter-zQAwDCu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Djuhbf7V.js";import"./useEvent-BsKV9JIv.js";import"./getScrollParent-BYXaL0zG.js";import"./scrollIntoView-Dkbfokvi.js";import"./useDescription-RX7Ggrwn.js";import"./VisuallyHidden-2Q1B73xw.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DxN4i-zE.js";import"./createLucideIcon-DU05kscE.js";import"./chevron-right-DfFdoy6j.js";import"./Button-C961Ae12.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DWsBg7K0.js";import"./Heading-D2gKtbL6.js";import"./FieldError-EOiA5P3C.js";import"./Text-yMJxKm-c.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
