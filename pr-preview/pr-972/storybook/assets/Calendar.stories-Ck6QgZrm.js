import{$ as p,a as m,r as l,j as d}from"./iframe-D7PorBx8.js";import{C as n}from"./Calendar-DM3h_WAN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BRwzNIld.js";import"./Button-BLXzbyhr.js";import"./utils-BRnNwB4A.js";import"./clsx-B-dksMZM.js";import"./Hidden-CALyrsXm.js";import"./useFocusRing-lOPOB9b4.js";import"./index-CVGY0x-i.js";import"./index-DjO4sh_O.js";import"./useLabels-CcuOGFTT.js";import"./useButton-_Sa8lUYH.js";import"./RSPContexts-CGV8yMDv.js";import"./Text-D7__6bd9.js";import"./useDateFormatter-C3K6AzI3.js";import"./useControlledState-Cu60Zsv0.js";import"./useLocalizedStringFormatter-CX2ZmV-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CoOWw20L.js";import"./useEvent-CIuVaqMW.js";import"./getScrollParent-uRQuqh9K.js";import"./scrollIntoView-C2jQgIYI.js";import"./useDescription-D2ZN9jHt.js";import"./VisuallyHidden-B5Wc-8q5.js";import"./clsx-Ciqy0D92.js";import"./Button-BN9DksRd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4dcCYqU.js";import"./createLucideIcon-s0-oR3K2.js";import"./chevron-right-XPRi6pF5.js";import"./Heading-DL-iVrBB.js";import"./FieldError-Depqq_2u.js";import"./Text-19E1mvi9.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
