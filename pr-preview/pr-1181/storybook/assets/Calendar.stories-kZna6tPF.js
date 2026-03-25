import{$ as c,a as m,r as l,j as d}from"./iframe-BP7DzUIh.js";import{C as n}from"./Calendar-B4SjkRTv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BEu8SK0s.js";import"./Button-yD28QKfx.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlKvXDgO.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./RSPContexts-C286y1L4.js";import"./Text-C6QCLAD1.js";import"./useDateFormatter-XgOf8vi6.js";import"./useControlledState-B7al1qBg.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFTR4-zE.js";import"./useEvent-boX-2EsT.js";import"./getScrollParent-CMfkxxdv.js";import"./scrollIntoView-BqUk0Mej.js";import"./useDescription-B4UE-M1p.js";import"./VisuallyHidden-CFJkh_29.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BD-vHDDw.js";import"./createLucideIcon-zXtIRWL6.js";import"./chevron-right-C_47lfp2.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Heading-C3r0aHk-.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C-lFPFDT.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
