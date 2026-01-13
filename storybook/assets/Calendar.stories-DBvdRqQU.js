import{$ as c,a as m,r as l,j as d}from"./iframe-DHyVQXUX.js";import{C as n}from"./Calendar-Es3P0l14.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CoKfKH_8.js";import"./Button-CgYi1yiU.js";import"./utils-Cetumt8p.js";import"./clsx-B-dksMZM.js";import"./Hidden-LyTL37of.js";import"./useFocusRing-DM6_DbeH.js";import"./index-C151B4pU.js";import"./index-CIApz_MG.js";import"./useLabels-BHMJFSGA.js";import"./useButton-C_cAHMJL.js";import"./RSPContexts-Ct6jR0wT.js";import"./Text-D3UlMe3R.js";import"./useDateFormatter-CPvyy-1U.js";import"./useControlledState-bSLg3DhZ.js";import"./useLocalizedStringFormatter-BO0fwLCb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BHpW_8sf.js";import"./useEvent-BtAGcOSe.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-066NI39g.js";import"./VisuallyHidden-CrEjrJr0.js";import"./clsx-Ciqy0D92.js";import"./Button-BG_KuVY6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXMcFhqN.js";import"./createLucideIcon-BDpeJ1vC.js";import"./chevron-left-ocaAYs9W.js";import"./chevron-right-CCcPeAjE.js";import"./Heading-Bzpzqhe4.js";import"./FieldError-BMHmwlEE.js";import"./Text-el-hmg7N.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
