import{$ as c,a as m,r as l,j as d}from"./iframe-BEKS4YDN.js";import{C as n}from"./Calendar-hftLziS2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dd98JxU3.js";import"./Button-BPvFIvh-.js";import"./utils-xO_879NF.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwtVgZCk.js";import"./useFocusRing-BhpyH7yS.js";import"./index-C_TP6Ur2.js";import"./index-CEolt4Rx.js";import"./useLabel-CSn61wWa.js";import"./useLabels-BHkcg4nS.js";import"./useButton-BxOD9fvd.js";import"./RSPContexts-CZte2gii.js";import"./Text-BZzeA2Vt.js";import"./useDateFormatter-DnzlQg5z.js";import"./useControlledState-BJkUh9eQ.js";import"./useLocalizedStringFormatter-Ch_NtsBU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bdd-xjla.js";import"./useEvent-h3u_uwpJ.js";import"./getScrollParent-Dd6uns12.js";import"./scrollIntoView-Bhjt-fS-.js";import"./useDescription-qyRNVaLw.js";import"./VisuallyHidden-DHkZrGra.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-eMUBidm7.js";import"./createLucideIcon-BWz3rFdE.js";import"./chevron-right-BbvUk3Qc.js";import"./Button-D3aX5HrM.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CYPaady4.js";import"./Heading-uQEv1yk8.js";import"./FieldError-C9IlqVU0.js";import"./Text-BfCSkgj0.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
