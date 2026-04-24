import{$ as c,a as m,r as l,j as d}from"./iframe-Csum_Dn_.js";import{C as n}from"./Calendar-CcGix_t6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BdkZn_VQ.js";import"./Button-BUrmgwKE.js";import"./utils-Ge-V0544.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxHKwZ6C.js";import"./useFocusRing-ClEYMHRu.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./RSPContexts-CufW8UMt.js";import"./Text-D-PYeQb1.js";import"./useDateFormatter-CETBP8aF.js";import"./useControlledState-CRJrM8G1.js";import"./useLocalizedStringFormatter-CsJPWzRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-vp2ruFlK.js";import"./useEvent-CwVY4pnK.js";import"./getScrollParent-BZSpcJr9.js";import"./scrollIntoView-Dy2xPLMm.js";import"./useDescription-LL4f_7qE.js";import"./VisuallyHidden-DDF8meml.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DLTlYGQm.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./chevron-right-CrJbSowc.js";import"./Button-dhowh8Zu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./Heading-DvcYpWA5.js";import"./FieldError-JqGe9xU9.js";import"./Text-tsq8PiKH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
