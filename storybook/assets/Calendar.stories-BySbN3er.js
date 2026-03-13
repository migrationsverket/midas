import{$ as c,a as m,r as l,j as d}from"./iframe-EoEhw5Zh.js";import{C as n}from"./Calendar-B213y7hS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BFDiPW6a.js";import"./Button-DjmrYvse.js";import"./utils-9vpvreaM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CX87kr-j.js";import"./useFocusRing-DMgSEdD4.js";import"./index-Dr8ff7Yx.js";import"./index-BnBZZEud.js";import"./useLabels-CyiNSM6o.js";import"./useButton-CoeBifMi.js";import"./RSPContexts-0TY2XP1U.js";import"./Text-DXp13W0h.js";import"./useDateFormatter-3kNNKbf2.js";import"./useControlledState-cFso-qT1.js";import"./useLocalizedStringFormatter-SZJWhWFc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-_0fZufzB.js";import"./useEvent-BNUGgeID.js";import"./getScrollParent-B_rII4gY.js";import"./scrollIntoView-CQrFR7ZE.js";import"./useDescription-BA8q_yzK.js";import"./VisuallyHidden-q1pwiIQH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BK960_dz.js";import"./createLucideIcon-mCwC6Qs_.js";import"./chevron-right-BnLtIM9A.js";import"./Button-y454-6pk.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Crb0wUWJ.js";import"./Heading-CEG4slW5.js";import"./FieldError-D-MKG4ii.js";import"./Text-D9CNFP89.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
