import{$ as c,a as m,r as l,j as d}from"./iframe-DTgf2yWr.js";import{C as n}from"./Calendar-Ct-JAPWA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C0eyNq13.js";import"./Button-DsiJh3rg.js";import"./utils-DzwNYuTN.js";import"./clsx-B-dksMZM.js";import"./Hidden-CB9dI_i8.js";import"./useFocusRing-CP7gcATu.js";import"./index-vkqPEYc_.js";import"./index-BH-DXcRM.js";import"./useLabels-BOW8HuY_.js";import"./useButton-C1yhLz7X.js";import"./RSPContexts-B_H1Uz4-.js";import"./Text-bWE3sRjS.js";import"./useDateFormatter-BR1VJqGv.js";import"./useControlledState-SjDZU1Af.js";import"./useLocalizedStringFormatter-DNR4J-Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D9am1KDI.js";import"./useEvent-DuxHD3US.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bv7lMAxy.js";import"./VisuallyHidden-DLhSHTT7.js";import"./clsx-Ciqy0D92.js";import"./Button-ni8lscHZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDsobOj3.js";import"./createLucideIcon-D9vwcDME.js";import"./chevron-left-CvHEDBpw.js";import"./chevron-right-B7n2qK5b.js";import"./Heading-BBS5QCZB.js";import"./FieldError-D0N2b3Uz.js";import"./Text-BnRqnZ91.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
