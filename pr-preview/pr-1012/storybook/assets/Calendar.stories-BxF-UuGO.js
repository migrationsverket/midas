import{$ as c,a as m,r as l,j as d}from"./iframe-C-bTQS5b.js";import{C as n}from"./Calendar-BWc4RDc3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-dlfDylzj.js";import"./Button-BaZzqN3-.js";import"./utils-BN4n3pVV.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cyhjgpq-.js";import"./useFocusRing-CnEIlzX4.js";import"./index-0H14NhtQ.js";import"./index-Cdo4-yyt.js";import"./useLabels-BAE89oEy.js";import"./useButton-DzG_bmRJ.js";import"./RSPContexts-Dzh2LgXf.js";import"./Text-Bor6iAR0.js";import"./useDateFormatter-p5KPFYQ5.js";import"./useControlledState-De-wF9dR.js";import"./useLocalizedStringFormatter-fekdwmGJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B9anftim.js";import"./useEvent-zzI8eDEU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CP6yOtdD.js";import"./VisuallyHidden-DRZO2hdA.js";import"./clsx-Ciqy0D92.js";import"./Button-DUHsSslZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_i8rKrL.js";import"./createLucideIcon-DAQi76Bv.js";import"./chevron-left-tBbyNmZy.js";import"./chevron-right-15NPP-J-.js";import"./Heading-CSE4Iek0.js";import"./FieldError-C20ZhlYT.js";import"./Text-jh07sOT3.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
