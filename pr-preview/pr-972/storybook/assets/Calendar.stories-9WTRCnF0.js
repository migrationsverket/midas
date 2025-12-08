import{$ as p,a as m,r as l,j as d}from"./iframe-D0MbCfGX.js";import{C as n}from"./Calendar-C3W0FY-e.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DtJAMkii.js";import"./Button-CwpQ0ZRN.js";import"./utils-HqVyPsx5.js";import"./clsx-B-dksMZM.js";import"./Hidden-nmq2QyfL.js";import"./useFocusRing-Bu7gL19x.js";import"./index-hynslO7V.js";import"./index-fjtbWm9v.js";import"./useLabels-bAB6zu2C.js";import"./useButton-B-HcF5FI.js";import"./RSPContexts-BOmcJgyX.js";import"./Text-C56uKtog.js";import"./useDateFormatter-DWomX-Rc.js";import"./useControlledState-C8xGgj4C.js";import"./useLocalizedStringFormatter-2hEikx4k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CBRJ21BN.js";import"./useEvent-CYGAUgVS.js";import"./getScrollParent-DtAfmDwe.js";import"./scrollIntoView-DUUJwUq8.js";import"./useDescription--JIgYdID.js";import"./VisuallyHidden-CztvSzbh.js";import"./clsx-Ciqy0D92.js";import"./Button-ZcS88E_Q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cp1Qq6jQ.js";import"./createLucideIcon-BVgI_rj9.js";import"./chevron-right-DSIENnO4.js";import"./Heading-mbCsYgT7.js";import"./FieldError-CJdCsbD5.js";import"./Text-lYk5NG0J.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
