import{$ as c,a as m,r as l,j as d}from"./iframe-CYrC2O7n.js";import{C as n}from"./Calendar-Dd7b8cMr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DDFPnSPO.js";import"./Button-BKTJlLGY.js";import"./utils-W9KFSJyi.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cuqxaz-j.js";import"./useFocusRing-DwhBMXNM.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./RSPContexts-96m8ngxa.js";import"./Text-kU8vQOsb.js";import"./useDateFormatter-CgD-LK30.js";import"./useControlledState-CWVzqNB6.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BXzwZRRY.js";import"./useEvent-Cl9zlQud.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CS0207ko.js";import"./VisuallyHidden-vjowbZXC.js";import"./clsx-Ciqy0D92.js";import"./Button-OKR0VFLl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";import"./createLucideIcon-B2v0PGO8.js";import"./chevron-left-BvAS9CWS.js";import"./chevron-right-DkXqkXxh.js";import"./Heading-gejMn2xX.js";import"./FieldError-Co8p2V5G.js";import"./Text-C6dUuRFD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
