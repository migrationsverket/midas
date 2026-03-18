import{$ as c,a as m,r as l,j as d}from"./iframe-B6mQtHg_.js";import{C as n}from"./Calendar-DZaA1AHZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQ2oMU_J.js";import"./Button-fYT3W3-R.js";import"./utils-BRho1dRj.js";import"./clsx-B-dksMZM.js";import"./Hidden-Zr6f3d_F.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./RSPContexts-BXQmSd5O.js";import"./Text-P1kAvbTC.js";import"./useDateFormatter-D-UfKTDg.js";import"./useControlledState-BRStpwCw.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-NwmgfCmi.js";import"./useEvent-CRuitgb9.js";import"./getScrollParent-D1snmpn8.js";import"./scrollIntoView-5Pop8Kz8.js";import"./useDescription-D1JiDHG9.js";import"./VisuallyHidden-B9plZj9e.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-dsNtNA37.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./chevron-right-BFRuyPMK.js";import"./Button-CjEwSg5p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./Heading-K2R40Ekj.js";import"./FieldError-DsUm8Cjt.js";import"./Text-CC5_ooHx.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
