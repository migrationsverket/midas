import{$ as c,a as m,r as l,j as d}from"./iframe-cMEgXkU9.js";import{C as n}from"./Calendar-oMXJSfyM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_LGySrW.js";import"./Button-yd3xuf6R.js";import"./utils-B3lOSj3F.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5y8YolZ.js";import"./useFocusRing-CxXiz-Gm.js";import"./index-BmRYBJCP.js";import"./index-BMkS1cfA.js";import"./useLabels-CkaQlQl_.js";import"./useButton-BPJwIAj2.js";import"./RSPContexts-B_AUN_Nr.js";import"./Text-ltK-qi4B.js";import"./useDateFormatter-Bec9mK6p.js";import"./useControlledState-BX5yaqFT.js";import"./useLocalizedStringFormatter-DBj2jYWp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CIYSmzh-.js";import"./useEvent-CYCFwh_w.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3zABGFf.js";import"./VisuallyHidden-ClFhsG2n.js";import"./clsx-Ciqy0D92.js";import"./Button-B1lVQr-S.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bd2ZBdeQ.js";import"./createLucideIcon-DtfcjQlU.js";import"./chevron-left-BIPYN5Sf.js";import"./chevron-right-Cl9fAZX2.js";import"./Heading-CZmRs31h.js";import"./FieldError-Cg9_4rDN.js";import"./Text-oSal6G8w.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
