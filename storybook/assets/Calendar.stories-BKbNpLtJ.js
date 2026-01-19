import{$ as c,a as m,r as l,j as d}from"./iframe-CPEWJk1e.js";import{C as n}from"./Calendar-BwPVwkTe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DnWz16uC.js";import"./Button-D3ppew-K.js";import"./utils-zqFEKEPh.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTXMChVh.js";import"./useFocusRing-ILJnPhUK.js";import"./index-CtVcx0yG.js";import"./index-CHrfy1ht.js";import"./useLabels-D-Hy4YuH.js";import"./useButton-DQ-7sy2B.js";import"./RSPContexts-_qG5IX47.js";import"./Text-C52_CQW6.js";import"./useDateFormatter-FGnRPnJT.js";import"./useControlledState-B4oLgPdt.js";import"./useLocalizedStringFormatter-B-rP9j5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-HE8IINMA.js";import"./useEvent-Bp8WcJ43.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BxyIXG7-.js";import"./VisuallyHidden-Cf1hSoJ3.js";import"./clsx-Ciqy0D92.js";import"./Button-BQy3vbUL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CifXZ-cd.js";import"./createLucideIcon-CtQUs0EG.js";import"./chevron-left-Cd_VJUzD.js";import"./chevron-right-BzDry1jl.js";import"./Heading-CsRWFTvi.js";import"./FieldError-BBhushzd.js";import"./Text-BzUC5NL3.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
