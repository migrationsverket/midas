import{$ as c,a as m,r as l,j as d}from"./iframe-B_PHmpba.js";import{C as n}from"./Calendar-DRM0-RW_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BVnC11_X.js";import"./Button-BH_CQ35-.js";import"./utils-BLTu9tyH.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dyk48KDQ.js";import"./useFocusRing-pLoaDniN.js";import"./index-BnBRJ5Vs.js";import"./index-CohS7fjA.js";import"./useLabel-um5sn7L2.js";import"./useLabels-CuRAxugE.js";import"./useButton-Bt5iDQO5.js";import"./RSPContexts-OmKNYCMF.js";import"./Text-De6EL-yD.js";import"./useDateFormatter-Dion7GP0.js";import"./useControlledState-Dbw9fj5d.js";import"./useLocalizedStringFormatter-BGDlAUue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1sG2A35.js";import"./useEvent-CJsDiKXk.js";import"./getScrollParent-CcwRz91U.js";import"./scrollIntoView-DSAWaCcr.js";import"./useDescription-DqrvnjB2.js";import"./VisuallyHidden-_6q0RJ_b.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C-W84T97.js";import"./createLucideIcon-Dp1bKuvD.js";import"./chevron-right-EFcZh7LD.js";import"./Button-Bu0PoYIz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B5yN6xVU.js";import"./Heading-hcI3iOWv.js";import"./FieldError-BXXDRXhV.js";import"./Text-CtWvGN0y.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
