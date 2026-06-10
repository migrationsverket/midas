import{$ as c,a as m,r as l,j as d}from"./iframe-D-sLCnpD.js";import{C as n}from"./Calendar-CJcdOdfh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DocZoVM8.js";import"./Button-DnF54DF8.js";import"./utils-D3U7E8TR.js";import"./clsx-B-dksMZM.js";import"./Hidden-y_sC-lpt.js";import"./useFocusRing-BddZYFRw.js";import"./index-CLCyT0Oh.js";import"./index-D5x8KNVK.js";import"./useLabel-Cu8kCPJx.js";import"./useLabels-r9V9wZ09.js";import"./useButton-QMunS1hB.js";import"./RSPContexts-BDn2DSX_.js";import"./Text-BKNBB32x.js";import"./useDateFormatter-Bvl0aY2W.js";import"./useControlledState-BjvLL9Qd.js";import"./useLocalizedStringFormatter-BcWSncvR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dwd6IJvw.js";import"./useEvent-DaZ7xRUF.js";import"./getScrollParent-D1vwRPGd.js";import"./scrollIntoView-BjuirdaY.js";import"./useDescription-Bu2RrSkA.js";import"./VisuallyHidden-qGd6TSu6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ByzAroJ0.js";import"./createLucideIcon-DYN3agFs.js";import"./chevron-right-Ci7fF3kV.js";import"./Button-DXPPcOjH.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CdR-Kcyq.js";import"./Heading-C6SAYcER.js";import"./FieldError-CFlBecVg.js";import"./Text-CHAFZQ5b.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
