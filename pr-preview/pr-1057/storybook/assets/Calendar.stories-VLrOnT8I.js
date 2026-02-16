import{$ as c,a as m,r as l,j as d}from"./iframe-JdJ-OJm1.js";import{C as n}from"./Calendar-BpYNmWlR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CM4C1Lu8.js";import"./Button-DZGa_zA9.js";import"./utils-96Qmq1tf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKn4TiUA.js";import"./useFocusRing-DO3ZBB6k.js";import"./index-BNPS8vul.js";import"./index-DPgChp4i.js";import"./useLabels-TKpnNBwe.js";import"./useButton-CFkNx72h.js";import"./RSPContexts-FHwAvAup.js";import"./Text-DIR17Pu1.js";import"./useDateFormatter-CaoVl3pA.js";import"./useControlledState-D8NqpIqI.js";import"./useLocalizedStringFormatter-1JARTe_X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CiIfTNPm.js";import"./useEvent-LxIxBIYw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CQRfVWLt.js";import"./VisuallyHidden-Dgod2K5q.js";import"./clsx-Ciqy0D92.js";import"./Button-DhPOwdCl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8P-aJlJ.js";import"./createLucideIcon-oTUJ9cxW.js";import"./chevron-left-BUxGW4US.js";import"./chevron-right-CILI6bdf.js";import"./Heading-C_TZWBlV.js";import"./FieldError-BnFcX8Xu.js";import"./Text-JWOQbzzd.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
