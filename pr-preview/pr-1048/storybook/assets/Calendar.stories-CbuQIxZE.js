import{$ as c,a as m,r as l,j as d}from"./iframe-ESF-r1hI.js";import{C as n}from"./Calendar-BEJX8XLO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-IJmLj85T.js";import"./Button-Cij6yxlb.js";import"./utils-B0s5fgWj.js";import"./clsx-B-dksMZM.js";import"./Hidden-8yjMqO1d.js";import"./useFocusRing-DWp5OAg6.js";import"./index-2wIi_N-m.js";import"./index-BL-qZJpS.js";import"./useLabels-Bp-m2sF3.js";import"./useButton-Ct9_-x7Y.js";import"./RSPContexts-DFpIO6wb.js";import"./Text-NxgWluAD.js";import"./useDateFormatter-k1yc6Dtv.js";import"./useControlledState-D0upRdKE.js";import"./useLocalizedStringFormatter-DH7rPe2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DF6SBcO2.js";import"./useEvent-FPTcD_7V.js";import"./getScrollParent-C9qHydg-.js";import"./scrollIntoView-CgwOiqxC.js";import"./useDescription-CmcHNEVN.js";import"./VisuallyHidden-BGIl5X-2.js";import"./clsx-Ciqy0D92.js";import"./Button-DBeVImox.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-ymkSIqCa.js";import"./createLucideIcon-BJanraGz.js";import"./chevron-left-CLrzvwkp.js";import"./chevron-right-DTcbFWr_.js";import"./Heading-yeKYAPfd.js";import"./FieldError-BCCALKVT.js";import"./Text-BkzjukVf.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
