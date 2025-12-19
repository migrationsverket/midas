import{$ as c,a as m,r as l,j as d}from"./iframe-1f3rxXdd.js";import{C as n}from"./Calendar-wZ-OaMLf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3VDUJpx.js";import"./Button-_mxlpwte.js";import"./utils-DTlh9C3r.js";import"./clsx-B-dksMZM.js";import"./Hidden-BXaTRR1s.js";import"./useFocusRing-DN9l4SO_.js";import"./index-DeUdjjir.js";import"./index-B6Uo-J4R.js";import"./useLabels-DCQuJ-gm.js";import"./useButton-Dy6D2y1s.js";import"./RSPContexts-Ddb_9nY5.js";import"./Text-Bh_25_l1.js";import"./useDateFormatter-CBn1sesw.js";import"./useControlledState-D9gyYFcQ.js";import"./useLocalizedStringFormatter-BAZ5Qp5C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CcOftAt1.js";import"./useEvent-C_xz6dVr.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-TRy5yL60.js";import"./VisuallyHidden-DMADwpeo.js";import"./clsx-Ciqy0D92.js";import"./Button-C8uwiZ4T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkjvqcq6.js";import"./createLucideIcon-R1tXtWjx.js";import"./chevron-left-D9jjxswa.js";import"./chevron-right-Bhb8ope6.js";import"./Heading-DqKKK-is.js";import"./FieldError-D6PqbjM6.js";import"./Text-_zCkEVaW.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
