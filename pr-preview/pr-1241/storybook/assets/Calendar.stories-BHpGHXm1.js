import{$ as c,a as m,r as l,j as d}from"./iframe-ChiJKfMX.js";import{C as n}from"./Calendar-z1RIB6PC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cythxbv7.js";import"./Button-DW_Sqb80.js";import"./utils-Dm4E4mwc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaIjPHil.js";import"./useFocusRing-C3m7c-xg.js";import"./index-CKWxshzR.js";import"./index-C6BXlkmx.js";import"./useLabel-DFY6Hgn5.js";import"./useLabels-DqUEOu1i.js";import"./useButton-B2C85R1d.js";import"./RSPContexts-CERUV9Us.js";import"./Text-D-VvP9KN.js";import"./useDateFormatter-X2p_uYLp.js";import"./useControlledState-BXkqcj0T.js";import"./useLocalizedStringFormatter-DxP6DEYd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFyYKWZo.js";import"./useEvent-BgfjEJOG.js";import"./getScrollParent-D9F-6EpN.js";import"./scrollIntoView-B923z5fn.js";import"./useDescription-BVzp0w86.js";import"./VisuallyHidden-D09TEuo-.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-VT6Ra-ef.js";import"./createLucideIcon-CGmKAaMX.js";import"./chevron-right-CAzary87.js";import"./Button-CL16j7Sc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dpd2BHxH.js";import"./Heading-ukudU_SQ.js";import"./FieldError-Bf_I7BGY.js";import"./Text-FMeRFHDx.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
