import{$ as p,a as m,r as l,j as d}from"./iframe-CUHTTXY9.js";import{C as n}from"./Calendar-CydX10aj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dv81pTea.js";import"./Button-CTW6va-d.js";import"./utils-Dcvemnmi.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4n6kN_K.js";import"./useFocusRing-DjsRWKNx.js";import"./index-CAqaGyj3.js";import"./index-4Ydb_h1E.js";import"./useLabels-BI5qQt6r.js";import"./useButton-BfZu2Gs4.js";import"./RSPContexts-AZZ75FD2.js";import"./Text-D835pmOj.js";import"./useDateFormatter-Bn2iLamz.js";import"./useControlledState-Dsr3uqIL.js";import"./useLocalizedStringFormatter-CrK0txrp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bKbdLBvZ.js";import"./useEvent-M16ECpV-.js";import"./getScrollParent-Dau4AleY.js";import"./scrollIntoView-1WMQlWAp.js";import"./useDescription-BM1Fm2SQ.js";import"./VisuallyHidden-B5Z1t7Bp.js";import"./clsx-Ciqy0D92.js";import"./Button-BpmtbzrD.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BTFShZrE.js";import"./chevron-right-JYdRPQIe.js";import"./Heading-CrKTex-4.js";import"./FieldError-DhrB2_qe.js";import"./Text-Bxb0XJzo.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
