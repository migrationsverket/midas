import{$ as c,a as m,r as l,j as d}from"./iframe-D6iOFlNk.js";import{C as n}from"./Calendar-B8mcHJvO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CzJFAb0s.js";import"./Button-B4EeNfOQ.js";import"./utils-CD1tK_62.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cd_aaCcf.js";import"./useFocusRing-upgm9Lvd.js";import"./index-cK5OqLVZ.js";import"./index-BOUWd1Up.js";import"./useLabels-CZQ88t08.js";import"./useButton-84WMXec5.js";import"./RSPContexts-BvwPJGsb.js";import"./Text-aL4nWdoT.js";import"./useDateFormatter-kqJLGGrc.js";import"./useControlledState-DejCxbfT.js";import"./useLocalizedStringFormatter-BIP2SAND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DTEBxJbz.js";import"./useEvent-ClK_-pLi.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CuOT9qT9.js";import"./VisuallyHidden-CIEzbUDk.js";import"./clsx-Ciqy0D92.js";import"./Button-CjctI97I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAscfSQt.js";import"./createLucideIcon-Gwq4fNDs.js";import"./chevron-left-4wzgZZuv.js";import"./chevron-right-AGwlVLWy.js";import"./Heading-Dk1N_l44.js";import"./FieldError-BlY0sckk.js";import"./Text-D5zoqrMb.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
