import{$ as c,a as m,r as l,j as d}from"./iframe-eQfj5TyR.js";import{C as n}from"./Calendar-DlB0PHKX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BI6nWCQ5.js";import"./Button-Bl9G2J9w.js";import"./utils-B1fyRi3f.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKvQ0UCo.js";import"./useFocusRing-FgnAwrg-.js";import"./index-BXO00OuG.js";import"./index-CIA7hP3J.js";import"./useLabels-D68jkqrd.js";import"./useButton-Bt3yaOy2.js";import"./RSPContexts-Ds5n5rrC.js";import"./Text-Adt_UDUW.js";import"./useDateFormatter-DjpFwM22.js";import"./useControlledState-BQkMHVAJ.js";import"./useLocalizedStringFormatter-CGYFFa5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CUWSXjh_.js";import"./useEvent-gQ4dcrYq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BaMN0osh.js";import"./VisuallyHidden-wNpkr7eA.js";import"./clsx-Ciqy0D92.js";import"./Button-D4E-mWNd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-V6SfCR6T.js";import"./createLucideIcon-BnydqwKc.js";import"./chevron-left-D2f-fNJW.js";import"./chevron-right-DL22eKT7.js";import"./Heading-BZN5YGPJ.js";import"./FieldError-Banutwb4.js";import"./Text-D1gBRjyS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
