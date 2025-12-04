import{$ as p,a as m,r as l,j as d}from"./iframe-DFv6IHfp.js";import{C as n}from"./Calendar-49B3-Vfr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3qzpgr_.js";import"./Button-Dw6Cj4Ep.js";import"./utils-CdweZ9b8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CEz7ZVFR.js";import"./useFocusRing-DHeKREWZ.js";import"./index-DQr9Z14G.js";import"./index-BeE2cmwc.js";import"./useLabels-M6t6KXNG.js";import"./useButton-DauDJiKf.js";import"./RSPContexts-VhiPY5ek.js";import"./Text-DUn2-1vf.js";import"./useDateFormatter-CWLUmIbh.js";import"./useControlledState-DjNdup5v.js";import"./useLocalizedStringFormatter-CRBwvr9e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BUMUbcF5.js";import"./useEvent-CcbF0N8H.js";import"./getScrollParent-BenZS4AC.js";import"./scrollIntoView-CW_qc0_A.js";import"./useDescription-CVPZdUKx.js";import"./VisuallyHidden-Ddtdw3a8.js";import"./clsx-Ciqy0D92.js";import"./Button-CR2f2OCB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dap2ufNk.js";import"./createLucideIcon-DF7DR1uu.js";import"./chevron-right-Cyk2uQGo.js";import"./Heading-zhqqpJbx.js";import"./FieldError-lQrH4ZG6.js";import"./Text-3gfxnPvb.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
