import{$ as c,a as m,r as l,j as d}from"./iframe-BpGtKQe1.js";import{C as n}from"./Calendar-BcAkKVcp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnvyV7nW.js";import"./Button-C7_RBjc4.js";import"./utils-BKq0-BjK.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6AmhJiF.js";import"./useFocusRing-DM78EYAE.js";import"./index-WHmZXjR5.js";import"./index-A40XJ3N3.js";import"./useLabels-Bl-mky30.js";import"./useButton-eFtWSIwf.js";import"./RSPContexts-BV3PZIKk.js";import"./Text-Bsc-Zvgg.js";import"./useDateFormatter-C0t9TlLs.js";import"./useControlledState-MlmZVz50.js";import"./useLocalizedStringFormatter-ByTL2pAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DG4KleRJ.js";import"./useEvent-ITPJf9hS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHH3LopT.js";import"./VisuallyHidden-BXvACDV4.js";import"./clsx-Ciqy0D92.js";import"./Button-D8xW_9uS.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTV9lzwh.js";import"./createLucideIcon-Bd7t5Cp9.js";import"./chevron-left-C-lGVR1c.js";import"./chevron-right-DD9ZXa-w.js";import"./Heading-DMXzII-K.js";import"./FieldError-CvO6Yv2r.js";import"./Text-DVPUkm5u.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
