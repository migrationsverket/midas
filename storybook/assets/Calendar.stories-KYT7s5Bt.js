import{$ as c,a as m,r as l,j as d}from"./iframe-CmqPL-ve.js";import{C as n}from"./Calendar-B3TrULri.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bdsqw8a_.js";import"./Button-9NJzBnLU.js";import"./utils-SAP-OCBT.js";import"./clsx-B-dksMZM.js";import"./Hidden-C_mQN8s6.js";import"./useFocusRing-C_UBzR4Z.js";import"./index-D6miHDB-.js";import"./index-BBGo7RoQ.js";import"./useLabels-Bi-sZgxK.js";import"./useButton-CQub_DYW.js";import"./RSPContexts-DTDiXTQC.js";import"./Text-DLxMYZ1_.js";import"./useDateFormatter-D9ralt9W.js";import"./useControlledState-DSdzAD24.js";import"./useLocalizedStringFormatter-B-4EZhTm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-dE-F4AkK.js";import"./useEvent-BjnpXFvw.js";import"./getScrollParent-B2JBaajl.js";import"./scrollIntoView-BTl5uiXp.js";import"./useDescription-Sr7ZTB4e.js";import"./VisuallyHidden-DSb_BfCD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DXv49Hbn.js";import"./createLucideIcon-s6c-d0_0.js";import"./chevron-right-T-YMnOPj.js";import"./Button-M655P-gZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKe91JX1.js";import"./Heading-DirSBg-B.js";import"./FieldError-6cTdJ_Za.js";import"./Text-9ERWHN0X.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
