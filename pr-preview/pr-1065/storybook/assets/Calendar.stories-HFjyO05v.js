import{$ as c,a as m,r as l,j as d}from"./iframe-Bh3VWgCW.js";import{C as n}from"./Calendar-CbMQEkjL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Q3RlucRm.js";import"./Button-DwNgNAHT.js";import"./utils-BIL3a6ib.js";import"./clsx-B-dksMZM.js";import"./Hidden-471kEs7D.js";import"./useFocusRing-0AZg0skd.js";import"./index-N6QzfeSJ.js";import"./index-CqYODit3.js";import"./useLabels-db71Wl0y.js";import"./useButton-DQTLzfh-.js";import"./RSPContexts-eTOZoUex.js";import"./Text-GPAWAUKl.js";import"./useDateFormatter-Dapw_Uw7.js";import"./useControlledState-CEpZVo0k.js";import"./useLocalizedStringFormatter-Ca1HzZqp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOh4kS6s.js";import"./useEvent-C3iLfYya.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B6uYpxUN.js";import"./VisuallyHidden-BYkApvtM.js";import"./clsx-Ciqy0D92.js";import"./Button-DI241M-e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRrSbQCy.js";import"./createLucideIcon-_2yVZkpy.js";import"./chevron-left-BkVTo3gi.js";import"./chevron-right-DeBDhkij.js";import"./Heading-Cv2bIYwC.js";import"./FieldError-DE6lH482.js";import"./Text-rR-9MpjH.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
