import{$ as c,a as m,r as l,j as d}from"./iframe-CJ-60Efo.js";import{C as n}from"./Calendar-CRrVxz5o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BI7yrGcQ.js";import"./Button-DEbA7b2J.js";import"./utils-CZH6ruXT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DsEAHCyp.js";import"./useFocusRing-CupJGFR5.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./RSPContexts-DWc37NkB.js";import"./Text-Bn5fWWC4.js";import"./useDateFormatter-CSaeHkTa.js";import"./useControlledState-xfItMrqO.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BRLR1g_C.js";import"./useEvent-D57KiGSv.js";import"./getScrollParent-iQ5uL2tb.js";import"./scrollIntoView-B5Nn40hc.js";import"./useDescription-QSvqFumA.js";import"./VisuallyHidden-DhklY17S.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DGNM-RZC.js";import"./createLucideIcon-n1hD9M9W.js";import"./chevron-right-CQV_kV5x.js";import"./Button-DePLT0p9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Heading-CcbElr9K.js";import"./FieldError-DwTCOkZc.js";import"./Text-duXz9LRx.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
