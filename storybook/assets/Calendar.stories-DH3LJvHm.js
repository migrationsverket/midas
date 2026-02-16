import{$ as c,a as m,r as l,j as d}from"./iframe-DB1fQkim.js";import{C as n}from"./Calendar-5M7XYmx1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D_L9B8ZG.js";import"./Button-CfOPYvMd.js";import"./utils-rcw9EHco.js";import"./clsx-B-dksMZM.js";import"./Hidden-DL23eUkw.js";import"./useFocusRing-BqzMj4PE.js";import"./index-Bt17hO8v.js";import"./index-AryLyPHF.js";import"./useLabels-eN3v5AUZ.js";import"./useButton-De_mFC-y.js";import"./RSPContexts-BJrSYr0Z.js";import"./Text-fvBQwzot.js";import"./useDateFormatter-BXL-v2Dv.js";import"./useControlledState-BGJ8Svio.js";import"./useLocalizedStringFormatter-boXa-JbY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BUHjDH28.js";import"./useEvent-Cy_tRzK_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Vm0yjvuZ.js";import"./VisuallyHidden-kOOindq1.js";import"./clsx-Ciqy0D92.js";import"./Button-q_lSiE8f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5j4HyRnM.js";import"./createLucideIcon-BkMAC4LJ.js";import"./chevron-left-CGBzIGXD.js";import"./chevron-right-DmMf_48T.js";import"./Heading-5m64qMAb.js";import"./FieldError-B9rnBVQS.js";import"./Text-Hm2BWrds.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
