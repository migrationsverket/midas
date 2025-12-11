import{$ as p,a as m,r as l,j as d}from"./iframe-CKrxTJqk.js";import{C as n}from"./Calendar-C2AW4_fR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Kk7d-G-C.js";import"./Button-DigNz_6t.js";import"./utils-CTp3wZxS.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bbcauoo1.js";import"./useFocusRing-DRsukC58.js";import"./index-gQIqyNrY.js";import"./index-C-w1hNWf.js";import"./useLabels-FN4mMJOV.js";import"./useButton-B9vJGxui.js";import"./RSPContexts-uVMYOfO4.js";import"./Text-DxGoKI9p.js";import"./useDateFormatter-DU1AI-ct.js";import"./useControlledState-DaVWaM2P.js";import"./useLocalizedStringFormatter-a3l9aGqu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BZG3Kl8j.js";import"./useEvent-DOM6ytFV.js";import"./getScrollParent-qWpmxnYs.js";import"./scrollIntoView-fAHEVyF_.js";import"./useDescription-epMjwWcy.js";import"./VisuallyHidden-Lpl0yh2S.js";import"./clsx-Ciqy0D92.js";import"./Button-DkUXR3sV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CbUcgQXm.js";import"./createLucideIcon-BNr4CCY-.js";import"./chevron-right-BvT30dmD.js";import"./Heading-Dd2GEWYO.js";import"./FieldError-B2UvJ45R.js";import"./Text-Ci3fUjCZ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
