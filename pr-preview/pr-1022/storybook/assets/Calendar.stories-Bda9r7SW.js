import{$ as c,a as m,r as l,j as d}from"./iframe-D-t8l-nQ.js";import{C as n}from"./Calendar-BXJYK3Lu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cq4CLAus.js";import"./Button-Bv6XbooR.js";import"./utils-C09TX1Ea.js";import"./clsx-B-dksMZM.js";import"./Hidden-8h6Lngiq.js";import"./useFocusRing-CR_o_Q9s.js";import"./index-BdqC0PhN.js";import"./index-csafQpnv.js";import"./useLabels-BDhfzl9l.js";import"./useButton-ucD7gpk8.js";import"./RSPContexts-Bjm4deda.js";import"./Text-CG0yYSyZ.js";import"./useDateFormatter-Dla43QOC.js";import"./useControlledState-D_vJ43oY.js";import"./useLocalizedStringFormatter-Dt4C4rmW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DSOd12sn.js";import"./useEvent-D7sZf_Zj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DnttFM8m.js";import"./VisuallyHidden-CznJ6A2t.js";import"./clsx-Ciqy0D92.js";import"./Button-CHG0rl3V.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BmdgiejR.js";import"./createLucideIcon-CI-4TPo-.js";import"./chevron-left-PclTBDwW.js";import"./chevron-right-BuD2Cnn0.js";import"./Heading-BwMOfTtT.js";import"./FieldError-Nn4mt1Aj.js";import"./Text-D8XkFvPl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
