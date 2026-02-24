import{$ as m,a as c,r as l,j as d}from"./iframe-AKYLQdCk.js";import{C as n}from"./Calendar-Dk1zzcn2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-7-nPkwyB.js";import"./Button-DFNriVHD.js";import"./utils-CwZ2LlQC.js";import"./useObjectRef-C1ZIljv5.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaKtfQaU.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DeUGGThd.js";import"./useFocusable-CTBL5lAM.js";import"./index-Bv5J06q2.js";import"./index-DH60KLGl.js";import"./useLabels-DwGxuFNn.js";import"./useButton-I-1qHytb.js";import"./RSPContexts-DNK6gf8O.js";import"./Text-Bn-0i142.js";import"./useDateFormatter-b9zGNDcQ.js";import"./useControlledState-CbVlXO0V.js";import"./useLocalizedStringFormatter-BLFXCP_p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B0qXsQa3.js";import"./useEvent-C0_2xWEm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CBo5mlE7.js";import"./VisuallyHidden-BjOFadh9.js";import"./clsx-Ciqy0D92.js";import"./Button-DI1yGBch.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAqHm93j.js";import"./createLucideIcon-DaHUv1OG.js";import"./chevron-left-BHT2Khnu.js";import"./chevron-right-DK2HVPvK.js";import"./Heading-D6naq-Us.js";import"./FieldError-1z-h802J.js";import"./Text-BwqwIWKs.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
