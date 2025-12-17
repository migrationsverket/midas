import{$ as p,a as m,r as l,j as d}from"./iframe-Dmln2s8W.js";import{C as n}from"./Calendar-cHil05r6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B6eI_-8o.js";import"./Button-C5hq3iWd.js";import"./utils-DN9YrxvM.js";import"./clsx-B-dksMZM.js";import"./Hidden-7UyqWpMT.js";import"./useFocusRing-g7C5sCWj.js";import"./index-Cc6wq1BM.js";import"./index-C6K-yTup.js";import"./useLabels-Bj5Rya5X.js";import"./useButton-DT7lzV_U.js";import"./RSPContexts-C_ptDiqD.js";import"./Text-Bi8iFHf7.js";import"./useDateFormatter-C3ErLVlS.js";import"./useControlledState-DsKm9z2H.js";import"./useLocalizedStringFormatter-Cv3mFRMK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C6ynjDt6.js";import"./useEvent-RAMa1tqT.js";import"./getScrollParent-B4GVGfW4.js";import"./scrollIntoView-BZ0zJ7wl.js";import"./useDescription-DWosbqC5.js";import"./VisuallyHidden-DuElax1d.js";import"./clsx-Ciqy0D92.js";import"./Button-DnEmQCas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BqeJSIDu.js";import"./createLucideIcon-DAJh3Chd.js";import"./chevron-right-D0trbxkZ.js";import"./Heading-CTTK_qZT.js";import"./FieldError-cMeQo-5a.js";import"./Text-D8VRkt36.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
