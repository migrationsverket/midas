import{$ as c,a as m,r as l,j as d}from"./iframe-BXrAfsjq.js";import{C as n}from"./Calendar-Crd0L2fH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DgnVYcw-.js";import"./Button-By4fIxyI.js";import"./utils-cdAGpjgV.js";import"./clsx-B-dksMZM.js";import"./Hidden-DJwBGsVR.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./RSPContexts-CF2MUXv8.js";import"./Text-aWKwJErA.js";import"./useDateFormatter-sRe1RwRq.js";import"./useControlledState-CpFSzBx7.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-sa8pQ5dh.js";import"./useEvent-BoaBlzfX.js";import"./getScrollParent-CVvcmYh-.js";import"./scrollIntoView-3U7tLxsU.js";import"./useDescription-t7xMbrFZ.js";import"./VisuallyHidden-DmvbNouy.js";import"./clsx-Ciqy0D92.js";import"./Button-ClxvzqtQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./createLucideIcon-CYigPS-O.js";import"./chevron-left-Caaeq9aj.js";import"./chevron-right-C_0ZgjeR.js";import"./Heading-zviiFLoA.js";import"./FieldError-BVjBbXJN.js";import"./Text-DoxGzedC.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
