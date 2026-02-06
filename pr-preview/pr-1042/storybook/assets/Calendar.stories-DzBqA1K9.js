import{$ as c,a as m,r as l,j as d}from"./iframe-C_0qThD6.js";import{C as n}from"./Calendar-CeNj5LrN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BZrR918-.js";import"./Button-B_Hp7nF_.js";import"./utils-bnb8b6bb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Btf5vQwa.js";import"./useFocusRing-DfupDaWX.js";import"./index-BSnKqic_.js";import"./index-CPoNMQTv.js";import"./useLabels-05vWhTwh.js";import"./useButton-DiIDLtaM.js";import"./RSPContexts-CF-RUooF.js";import"./Text-CKF9tCug.js";import"./useDateFormatter-CdUrRgbu.js";import"./useControlledState-DErGdLYP.js";import"./useLocalizedStringFormatter-C4FXgmdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ccqp90AI.js";import"./useEvent-Bc3qbCgw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCtBRw9v.js";import"./VisuallyHidden-pXLJ5Ug_.js";import"./clsx-Ciqy0D92.js";import"./Button-DqbGeqrs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQjkICgF.js";import"./createLucideIcon-CC2FZLZA.js";import"./chevron-left-C6OhcXZE.js";import"./chevron-right-BBws9ytx.js";import"./Heading-CJSVZ5WU.js";import"./FieldError-CqD9H87d.js";import"./Text-Due48UAx.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
