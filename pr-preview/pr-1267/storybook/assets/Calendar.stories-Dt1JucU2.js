import{$ as c,a as m,r as l,j as d}from"./iframe-_-I-4bmX.js";import{C as n}from"./Calendar-C4r0qvuz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bn16KxKu.js";import"./Button-tRjJFBuJ.js";import"./utils-DzcaSYTj.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeH_JIKl.js";import"./useFocusRing-CMcqGwdV.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./RSPContexts-CMPH0wn8.js";import"./Text-Cm78CGL1.js";import"./useDateFormatter-Dg6Wl9H9.js";import"./useControlledState-CitIWhQv.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRHSweTu.js";import"./useEvent-BT5AWThM.js";import"./getScrollParent-BjhgnRjO.js";import"./scrollIntoView-CFKl5YUv.js";import"./useDescription-BdnU8zj8.js";import"./VisuallyHidden-CK8kGowV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-NdqTlbx1.js";import"./createLucideIcon-0TA1baeh.js";import"./chevron-right-e-MA3i7V.js";import"./Button-Cur5alMr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./Heading-D9DO-Wov.js";import"./FieldError-B-jtvqK5.js";import"./Text-CY5kPrUO.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
