import{$ as c,a as m,r as l,j as d}from"./iframe-b0nZhEJS.js";import{C as n}from"./Calendar-DTXaXb63.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-K1IMSjv5.js";import"./Button-W8LmO0wX.js";import"./utils-Czy4cRiY.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZ6waCzP.js";import"./useFocusRing-CFZ-IXl8.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./RSPContexts-BwF7V3QB.js";import"./Text-CKTyuYl3.js";import"./useDateFormatter-DevcfukO.js";import"./useControlledState-s-wNeubv.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-RoMvZwP5.js";import"./useEvent-D9RmNfeT.js";import"./getScrollParent-C1OYKDte.js";import"./scrollIntoView-BA0MjwzP.js";import"./useDescription-CGMez1fw.js";import"./VisuallyHidden-BU0juR5g.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Bdlm6_Pc.js";import"./createLucideIcon-t4UVlQbW.js";import"./chevron-right-CLnBPfRO.js";import"./Button-BHZxE8mE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Heading-BHoXnOGe.js";import"./FieldError-CFDpOADY.js";import"./Text-PpOivcva.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
