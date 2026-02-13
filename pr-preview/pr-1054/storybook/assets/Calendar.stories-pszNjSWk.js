import{$ as c,a as m,r as l,j as d}from"./iframe-Dw-35drA.js";import{C as n}from"./Calendar-Cdx3S3BN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-I3L3ACpP.js";import"./Button-CIiKNDDC.js";import"./utils-CUGO82B6.js";import"./clsx-B-dksMZM.js";import"./Hidden-4ZD6Ocwe.js";import"./useFocusRing-BNamEjDv.js";import"./index-CtEHNpSJ.js";import"./index-DiZcibWP.js";import"./useLabels-_6TVeuod.js";import"./useButton-CerW7b9z.js";import"./RSPContexts-Bt0JulsM.js";import"./Text-CJvMRgPB.js";import"./useDateFormatter-BzqZKH5l.js";import"./useControlledState-BE-LxPbE.js";import"./useLocalizedStringFormatter-xmiH9SGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DXRqOBJL.js";import"./useEvent-HEqeVpuS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dg7Q-zU8.js";import"./VisuallyHidden-iwvGgNVy.js";import"./clsx-Ciqy0D92.js";import"./Button-LqRiQ1bb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BExB6Uos.js";import"./createLucideIcon-Ct15IBRs.js";import"./chevron-left-COprKb72.js";import"./chevron-right-TKEX7fe-.js";import"./Heading-CRVf-zUZ.js";import"./FieldError-DkHYXYvi.js";import"./Text-Cldt2zLV.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
