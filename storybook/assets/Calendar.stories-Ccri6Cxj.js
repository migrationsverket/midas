import{$ as p,a as m,r as l,j as d}from"./iframe-CTgOJ9Ps.js";import{C as n}from"./Calendar-B1GOZcBB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B49k_CgI.js";import"./Button-C-UPDMJV.js";import"./utils-DVlNRVKr.js";import"./clsx-B-dksMZM.js";import"./Hidden-BgNUkzG2.js";import"./useFocusRing-X2jAZYAF.js";import"./index-CCWPqzcV.js";import"./index-BoZlgUKT.js";import"./useLabels-A9HpFVJQ.js";import"./useButton-BHqm994R.js";import"./RSPContexts-CtkEES1X.js";import"./Text-DcY7rHII.js";import"./useDateFormatter-DB6vlAyv.js";import"./useControlledState-CFnILQr1.js";import"./useLocalizedStringFormatter-DYKfyeFk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C8pQHlZt.js";import"./useEvent-DdPK42_P.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BAzN6H68.js";import"./VisuallyHidden-DMWuysUy.js";import"./clsx-Ciqy0D92.js";import"./Button-BrzX4JOs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-uMvmKC8y.js";import"./createLucideIcon-8WvXNeel.js";import"./chevron-right-CNjcJm_l.js";import"./Heading-ClW6Bag1.js";import"./FieldError-bycMJmoo.js";import"./Text-KKNDIRRs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
