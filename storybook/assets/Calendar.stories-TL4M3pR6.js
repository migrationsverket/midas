import{$ as p,a as m,r as l,j as d}from"./iframe-BsLcG5dW.js";import{C as n}from"./Calendar-CKlhBOIf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CR4hTDOq.js";import"./Button-BTB8VJIr.js";import"./utils-D4ybwJ5t.js";import"./clsx-B-dksMZM.js";import"./Hidden-qLdjn3wv.js";import"./useFocusRing-CRMF4aev.js";import"./index-CzmRrwoB.js";import"./index-FzS7-Zeo.js";import"./useLabels-BR2Qh3rY.js";import"./useButton-Ba6tOTsI.js";import"./RSPContexts-hJUcswH1.js";import"./Text-BSyI915z.js";import"./useDateFormatter-lCLZ4126.js";import"./useControlledState-C4DuSNuI.js";import"./useLocalizedStringFormatter-gMpMxUKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-zVUhLT1K.js";import"./useEvent-aUuuXZGE.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bh7CB7XY.js";import"./VisuallyHidden-_HN--CTP.js";import"./clsx-Ciqy0D92.js";import"./Button-B2aniDfg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPMXn8cB.js";import"./createLucideIcon-18oN6ckY.js";import"./chevron-right-4LkDfb9i.js";import"./Heading-B-TWaQON.js";import"./FieldError-5ugqjl9x.js";import"./Text-DxPppo1m.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
