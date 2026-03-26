import{$ as c,a as m,r as l,j as d}from"./iframe-Du56DBQ9.js";import{C as n}from"./Calendar-CLQ9hxET.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BO5eGE24.js";import"./Button-Bp_A6Sod.js";import"./utils-CAvnU5Td.js";import"./clsx-B-dksMZM.js";import"./Hidden-pui8tPLU.js";import"./useFocusRing-f_eVeiMs.js";import"./index-CuQRkvKt.js";import"./index-QgZ7VLnC.js";import"./useLabel-B6ITnJQY.js";import"./useLabels-BbAQfqg_.js";import"./useButton-BRUJuVat.js";import"./RSPContexts-DOVRjuky.js";import"./Text-BILk2R8l.js";import"./useDateFormatter-BpFs26j8.js";import"./useControlledState-DMDoFiwU.js";import"./useLocalizedStringFormatter-CWz9Ovv4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bf3cHjTf.js";import"./useEvent-X4noRaoO.js";import"./getScrollParent-DL5OVbEN.js";import"./scrollIntoView-Cra0RLpH.js";import"./useDescription-Cdh1_1PM.js";import"./VisuallyHidden-DfEAH0ac.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-8LPMk2ZH.js";import"./createLucideIcon-CmFcJ4zx.js";import"./chevron-right-DdaCcwCX.js";import"./Button-COw5A1XQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B6x4H80B.js";import"./Heading-BX5V11Nr.js";import"./FieldError-OzBsZtu-.js";import"./Text-Cp0RoVFZ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
