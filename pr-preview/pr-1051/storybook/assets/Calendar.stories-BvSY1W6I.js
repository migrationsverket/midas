import{$ as c,a as m,r as l,j as d}from"./iframe-BZJIgrzq.js";import{C as n}from"./Calendar-BwpDD4Ir.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B14XN7mc.js";import"./Button-nILSV0Zl.js";import"./utils-CDsu9e82.js";import"./clsx-B-dksMZM.js";import"./Hidden-BH3zIE_M.js";import"./useFocusRing-CLRJYDX3.js";import"./index-CMFY0fD_.js";import"./index-DLK3qOyE.js";import"./useLabels-1qpMULhJ.js";import"./useButton-DhBm0XNi.js";import"./RSPContexts-Db0C8CO2.js";import"./Text-BCf7Uakc.js";import"./useDateFormatter-Cpl9vI61.js";import"./useControlledState-YwjV-cgx.js";import"./useLocalizedStringFormatter--c6s_bUB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BlpTKB2q.js";import"./useEvent-8RC0B9o7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D0LbgrVb.js";import"./VisuallyHidden-C0iAQ1h6.js";import"./clsx-Ciqy0D92.js";import"./Button-CLHjLMLk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-c0g796co.js";import"./createLucideIcon-OgUSFDFv.js";import"./chevron-left-Bt133X5B.js";import"./chevron-right-BGxoWWP_.js";import"./Heading-Bqi4zKXZ.js";import"./FieldError-Xf7luySm.js";import"./Text-CLRTBMzT.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
