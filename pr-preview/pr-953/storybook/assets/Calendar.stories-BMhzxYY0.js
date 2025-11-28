import{$ as p,a as m,r as l,j as d}from"./iframe-DXZswXcd.js";import{C as n}from"./Calendar-BgojFfiy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D3sP1F4w.js";import"./Button-D1-arsKK.js";import"./utils-Cf0-1u65.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHOmIzAb.js";import"./useFocusRing-BG9tZgKA.js";import"./index-Crv0Q4vS.js";import"./index-C1YRI8qY.js";import"./useLabels-DwvLFUwE.js";import"./useButton-C6Wl-MUd.js";import"./RSPContexts-C5Z6RhjK.js";import"./Text-nnXd3bBi.js";import"./useDateFormatter-D2MhV6ly.js";import"./useControlledState-CJ_efx1W.js";import"./useLocalizedStringFormatter-LFtnKqVA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DwmYQZbU.js";import"./useEvent-BUY7bp5p.js";import"./getScrollParent-D9uKd0qs.js";import"./scrollIntoView-CaLNI_wC.js";import"./useDescription-IwVOs4ub.js";import"./VisuallyHidden-BQhZj104.js";import"./clsx-Ciqy0D92.js";import"./Button-AcRXejUz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BQ5mUNua.js";import"./createLucideIcon-Jyt4-ntd.js";import"./chevron-right-i-OqwXli.js";import"./Heading-Dqbz5JVQ.js";import"./FieldError-BvKOTYSn.js";import"./Text-BGzfgZXL.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
