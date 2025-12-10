import{$ as p,a as m,r as l,j as d}from"./iframe-BEnukkSz.js";import{C as n}from"./Calendar-B_b94kxv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-gQTtfLJs.js";import"./Button-BqfWUXxO.js";import"./utils-BbU1CVYT.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9TQXGL0.js";import"./useFocusRing-CoFg4iIP.js";import"./index-CsvThf5c.js";import"./index-XX1rAQcD.js";import"./useLabels-ugYGghQ_.js";import"./useButton-D_d4gnP9.js";import"./RSPContexts-Dqt4Tvru.js";import"./Text-DeqrOkdQ.js";import"./useDateFormatter-BmaeatUH.js";import"./useControlledState-rz1_euMV.js";import"./useLocalizedStringFormatter-BYVAgv0U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-rsMHZ9m0.js";import"./useEvent-DAOaZ6v6.js";import"./getScrollParent-BLEprXuX.js";import"./scrollIntoView-BomYB8lz.js";import"./useDescription-73K0p83_.js";import"./VisuallyHidden-CJIG9rle.js";import"./clsx-Ciqy0D92.js";import"./Button-Dm5kz4rE.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CMLQkYUH.js";import"./createLucideIcon-duiEOPcW.js";import"./chevron-right-DmP-sLb2.js";import"./Heading-glCZ44Mw.js";import"./FieldError-Bwl06kWX.js";import"./Text-t8HEv2as.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
