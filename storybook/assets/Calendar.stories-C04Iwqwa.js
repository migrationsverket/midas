import{$ as c,a as m,r as l,j as d}from"./iframe-bMlrIVqx.js";import{C as n}from"./Calendar-CQxR1cbw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-T6RIcE2L.js";import"./Button-v8dNK1Nl.js";import"./utils-CiQjpS3V.js";import"./clsx-B-dksMZM.js";import"./Hidden-hGkg45bv.js";import"./useFocusRing-D8WCTnIg.js";import"./index-bHuBvRtH.js";import"./index-RO-R4BZE.js";import"./useLabels-1BtgXQl_.js";import"./useButton-d-Sb4YVS.js";import"./RSPContexts-DoPn5P63.js";import"./Text-Bx2VBQkS.js";import"./useDateFormatter-Bys-AXJY.js";import"./useControlledState-B1Wdr8nI.js";import"./useLocalizedStringFormatter-CMgAZYok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CXmeNXDj.js";import"./useEvent-DP6lgkls.js";import"./getScrollParent-CjAAh5mb.js";import"./scrollIntoView-CDYKtDZ7.js";import"./useDescription-DpC2r11h.js";import"./VisuallyHidden-3-YJbPrh.js";import"./clsx-Ciqy0D92.js";import"./Button-BN-gP6-P.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CTQktmvu.js";import"./createLucideIcon-BpTSGys0.js";import"./chevron-left-CRK3HKvR.js";import"./chevron-right-DGzDp8Vm.js";import"./Heading-CVhmOHIJ.js";import"./FieldError-BuQ4lPqn.js";import"./Text-Bdt-QSsh.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
