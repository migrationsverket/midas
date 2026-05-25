import{$ as c,a as m,r as l,j as d}from"./iframe-D9EwWE8M.js";import{C as n}from"./Calendar-BW9uIqKd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BXK--7RW.js";import"./Button-T_q17eYt.js";import"./utils-VDmJlITu.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsKNJICf.js";import"./useFocusRing-BivnDFw5.js";import"./index-DAH1O1Iu.js";import"./index-BR2as-GY.js";import"./useLabel-Bss4QgXi.js";import"./useLabels-C5o1EFbo.js";import"./useButton-BXxscPHn.js";import"./RSPContexts-BNUf7IyR.js";import"./Text-DTRaBlNQ.js";import"./useDateFormatter-BCxaClM2.js";import"./useControlledState-D4c56bPB.js";import"./useLocalizedStringFormatter-Bshgwq-R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BHI_hYNU.js";import"./useEvent-DbELLyrS.js";import"./getScrollParent-Bc3C6zu_.js";import"./scrollIntoView-COj35Dws.js";import"./useDescription-C0gXCY7I.js";import"./VisuallyHidden-D48zSaf7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-6LqR4rRw.js";import"./createLucideIcon-DiPE6Ful.js";import"./chevron-right-CAYc1bBF.js";import"./Button-EDaj_92B.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C2YbnlKW.js";import"./Heading-Cc7e5DA7.js";import"./FieldError-BbtBJcYl.js";import"./Text-D4q9EFLH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
