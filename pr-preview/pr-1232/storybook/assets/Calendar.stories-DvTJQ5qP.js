import{$ as c,a as m,r as l,j as d}from"./iframe-EPbYJ3aH.js";import{C as n}from"./Calendar-CNwdfEI2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DwpUvt1a.js";import"./Button-D1GYvhMH.js";import"./utils-BFyuPOg-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CHhsJSI8.js";import"./useFocusRing-vFk-w4SV.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./RSPContexts-BCgG5sDy.js";import"./Text-DXPQUnae.js";import"./useDateFormatter-2wwaja48.js";import"./useControlledState-B7DCF9AW.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BuQrKDqm.js";import"./useEvent-DrVet--T.js";import"./getScrollParent-IjDHduKu.js";import"./scrollIntoView-DIrfA17L.js";import"./useDescription-B2aIStsg.js";import"./VisuallyHidden-CRUsIDEu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-kzklxTIV.js";import"./createLucideIcon-CDlkFEI-.js";import"./chevron-right-C9mNlilY.js";import"./Button-CF00LYtn.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Heading-Dg6ksqRs.js";import"./FieldError-QU59tQ0w.js";import"./Text-DaRCpEpM.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
