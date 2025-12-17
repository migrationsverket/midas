import{$ as p,a as m,r as l,j as d}from"./iframe-BkwZBgQB.js";import{C as n}from"./Calendar-25xoeIVx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DYo3LKtm.js";import"./Button-DpNES8Mp.js";import"./utils-DRDg4FYD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CjaNJwk3.js";import"./useFocusRing-yaIiikqm.js";import"./index-Dc04iqLv.js";import"./index-tLxIEPdH.js";import"./useLabels-CoCvP3vg.js";import"./useButton-f6mPFvlj.js";import"./RSPContexts-DfwIAS8E.js";import"./Text-CqraFZpH.js";import"./useDateFormatter-CJsMbNPu.js";import"./useControlledState-BBX4_4Sa.js";import"./useLocalizedStringFormatter-DU0hnyiw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Blu9vDqH.js";import"./useEvent-CsBEnloE.js";import"./getScrollParent-DRpoKEwA.js";import"./scrollIntoView-DoC-WaXh.js";import"./useDescription-DJivPjTX.js";import"./VisuallyHidden-CfZQE67O.js";import"./clsx-Ciqy0D92.js";import"./Button-BXuxybWM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BDvEu7Qr.js";import"./createLucideIcon-D32Zx4L2.js";import"./chevron-right-BizeIZO7.js";import"./Heading-DTe6A-8I.js";import"./FieldError-CywfLTZm.js";import"./Text-BS5-w4Gk.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
