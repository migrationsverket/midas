import{$ as c,a as m,r as l,j as d}from"./iframe-DR5TyuB-.js";import{C as n}from"./Calendar-Cfk3PTIe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-PrXr5jC8.js";import"./Button-BmNGs9rp.js";import"./utils-Bg7QEZnU.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEv0etPG.js";import"./useFocusRing-QfZ3-vOV.js";import"./index-D2JS04df.js";import"./index-LQ5iOOx9.js";import"./useLabels-C7LvHmcE.js";import"./useButton-DuR77GJR.js";import"./RSPContexts-DfXBv57K.js";import"./Text-Bj_TB6m0.js";import"./useDateFormatter-3YjtXYDl.js";import"./useControlledState-CZJBEfwd.js";import"./useLocalizedStringFormatter-CWc-yWtF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-XwIGNp_G.js";import"./useEvent-CAO5kR0P.js";import"./getScrollParent-DwvwwXDB.js";import"./scrollIntoView-BBNsC_WK.js";import"./useDescription-q7H7pmJx.js";import"./VisuallyHidden-BSWLvPww.js";import"./clsx-Ciqy0D92.js";import"./Button-C-s2hOqB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CkyMnK2W.js";import"./createLucideIcon-BIu09S4H.js";import"./chevron-left-ChKwOqVH.js";import"./chevron-right-BB8SEzSS.js";import"./Heading-DeCIOYLm.js";import"./FieldError-Cq9sQfrK.js";import"./Text-rstErEAJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
