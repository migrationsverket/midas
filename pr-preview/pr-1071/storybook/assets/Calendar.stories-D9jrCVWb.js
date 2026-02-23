import{$ as c,a as m,r as l,j as d}from"./iframe-DKSPN_rt.js";import{C as n}from"./Calendar-CA_xa3-c.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0WlsthmT.js";import"./Button-D_ksf53O.js";import"./utils-Dsb4CS80.js";import"./clsx-B-dksMZM.js";import"./Hidden-rmoVbPRV.js";import"./useFocusRing-DIM101qK.js";import"./index-CgoYFXbr.js";import"./index-DIEsqu5Q.js";import"./useLabels-DMhDiSEv.js";import"./useButton-ld_mmKe7.js";import"./RSPContexts-D7Y3JUuE.js";import"./Text-Bjh-HQuI.js";import"./useDateFormatter-BcNyVwOf.js";import"./useControlledState-CRiY1CfR.js";import"./useLocalizedStringFormatter-DHrvMH-8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BwWPDfaK.js";import"./useEvent-WaBg8569.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CtUioLWT.js";import"./VisuallyHidden-C5ojwSbT.js";import"./clsx-Ciqy0D92.js";import"./Button-DeDsiUlU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BNEuYvl4.js";import"./createLucideIcon-Cef0fBNb.js";import"./chevron-left-kUtN0fsD.js";import"./chevron-right-DaJ5PtjD.js";import"./Heading-BumJDw-e.js";import"./FieldError-CGHdNWyD.js";import"./Text-DS4myfGl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
