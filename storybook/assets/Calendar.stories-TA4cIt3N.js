import{$ as c,a as m,r as l,j as d}from"./iframe-6UVP4gzF.js";import{C as n}from"./Calendar-CpUTLPkc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DWSlqtQp.js";import"./Button-Cexa-7Qi.js";import"./utils-DOxsvNuE.js";import"./clsx-B-dksMZM.js";import"./Hidden-CM-w2pmZ.js";import"./useFocusRing-C5gCUZ-8.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./RSPContexts-Brux6LMo.js";import"./Text-BTPWticG.js";import"./useDateFormatter-ClWHMzwm.js";import"./useControlledState-CSt56eyg.js";import"./useLocalizedStringFormatter-CRr2CS_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bnwl2ryZ.js";import"./useEvent-BcFNSZ1q.js";import"./getScrollParent-Dm1SN3eh.js";import"./scrollIntoView-B9I7jkoL.js";import"./useDescription-CDSI2B06.js";import"./VisuallyHidden-Coo2bS_I.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-JGhVefcN.js";import"./createLucideIcon-CZM_qkx4.js";import"./chevron-right-CAe3M5Nd.js";import"./Button-Dank0oAc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./Heading-CW14flDD.js";import"./FieldError-BpE-wczM.js";import"./Text-C9xgYxgE.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
