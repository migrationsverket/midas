import{$ as c,a as m,r as l,j as d}from"./iframe-BBl_wx91.js";import{C as n}from"./Calendar-C7PoAQGa.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSQfDCn1.js";import"./Button-FXCxhgQI.js";import"./utils-D68juJtw.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6G0FIbn.js";import"./useFocusRing-BjKrvikX.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./RSPContexts-bPv5UHdE.js";import"./Text-D6DSOlat.js";import"./useDateFormatter-BOgkIObc.js";import"./useControlledState-D0NTyUH5.js";import"./useLocalizedStringFormatter-RNUbG8Ti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-babjvtMy.js";import"./useEvent-BIKoKN_5.js";import"./getScrollParent-y3ebv2is.js";import"./scrollIntoView-dyHX5qbm.js";import"./useDescription-0arSrRQM.js";import"./VisuallyHidden-DEPyp4m6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CU_Zeq9H.js";import"./createLucideIcon-ie2vk2qe.js";import"./chevron-right-sc2sETdR.js";import"./Button-PgTnRDDW.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./Heading-DDSTrqIv.js";import"./FieldError-BhvtU_6s.js";import"./Text-B468MR_I.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
