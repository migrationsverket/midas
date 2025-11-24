import{$ as p,a as m,r as l,j as d}from"./iframe-GcUoBMSg.js";import{C as n}from"./Calendar-DZup_T__.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D8lcrqLE.js";import"./Button-DSIvaIV3.js";import"./utils-rtD3T3TW.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqpeSpmt.js";import"./useFocusRing-DIuTFd3b.js";import"./index-DRY6s0Uf.js";import"./index-CzFqfJNr.js";import"./useLabels-DexiCPCf.js";import"./useButton-DXkPYxVk.js";import"./RSPContexts-B8ZXf98J.js";import"./Text-F1ylVkWL.js";import"./useDateFormatter-BTzvtxCk.js";import"./useControlledState-BbDaPJvR.js";import"./useLocalizedStringFormatter-ygoypWk4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKxrX_Xl.js";import"./useEvent-B47GfUV2.js";import"./getScrollParent-DJeQ7SrW.js";import"./scrollIntoView-DEGH2g_V.js";import"./useDescription-DegkKtjI.js";import"./VisuallyHidden-CO11mDnh.js";import"./clsx-Ciqy0D92.js";import"./Button-CKo_jchp.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-3VUd_YGv.js";import"./createLucideIcon-iWDg5CCZ.js";import"./chevron-right-tfrhIKHw.js";import"./Heading-S7p3z2GQ.js";import"./FieldError-UiNQLKTT.js";import"./Text-CNOZt7Js.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
