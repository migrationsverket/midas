import{$ as c,a as m,r as l,j as d}from"./iframe-C0YgPd_X.js";import{C as n}from"./Calendar-48GCug9H.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3_HBg2-.js";import"./Button-XxkWRrW-.js";import"./utils-Ci8FU_mO.js";import"./clsx-B-dksMZM.js";import"./Hidden-B7mLw12T.js";import"./useFocusRing-d4xeVmwI.js";import"./index-DR6-hAa4.js";import"./index-B1yuzVKX.js";import"./useLabels-CDHVT8zI.js";import"./useButton-1PkuGq_I.js";import"./RSPContexts-DAjBn9Ce.js";import"./Text-DmZIPz6e.js";import"./useDateFormatter-DA7-FnJ3.js";import"./useControlledState-CoSP0aK4.js";import"./useLocalizedStringFormatter-DXSG4DWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bvsvvzjq.js";import"./useEvent-Cmu4Aec-.js";import"./getScrollParent-B8LViZWg.js";import"./scrollIntoView-DpW98Jv0.js";import"./useDescription-Ce3Mvgly.js";import"./VisuallyHidden-DgXH2cKS.js";import"./clsx-Ciqy0D92.js";import"./Button-CRNHL0rZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-eCcOY5R3.js";import"./createLucideIcon-Btasiudw.js";import"./chevron-left-Cz2zX9h7.js";import"./chevron-right-Ca95-v29.js";import"./Heading-2FeCFYvq.js";import"./FieldError-DPY80cAa.js";import"./Text-CQgzeM0c.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
