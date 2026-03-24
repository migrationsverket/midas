import{$ as c,a as m,r as l,j as d}from"./iframe-DRF618FK.js";import{C as n}from"./Calendar-D8uEZgyF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-_0ThG2Bs.js";import"./Button-D1u5VWPv.js";import"./utils-CHqxZhUB.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dr-og7MG.js";import"./useFocusRing-fA7oZfLd.js";import"./index-Cjz8zzHP.js";import"./index-BaUCNhoE.js";import"./useLabels-C9Po0DaQ.js";import"./useButton-DiQ0m4E1.js";import"./RSPContexts-D-Mj00TC.js";import"./Text-DzrFOIN-.js";import"./useDateFormatter-B2D6RSDC.js";import"./useControlledState-2qvD9fXu.js";import"./useLocalizedStringFormatter-DdYi2mM1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cq3iqZiV.js";import"./useEvent-7_b0iMeF.js";import"./getScrollParent-E0P1bmgx.js";import"./scrollIntoView-NDoO0M_I.js";import"./useDescription-BYobcx8b.js";import"./VisuallyHidden-fImUcePD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ffhBU0ZY.js";import"./createLucideIcon-B6lUMAq7.js";import"./chevron-right-C9O3lwei.js";import"./Button-BUqgdpCe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CsD_6hYo.js";import"./Heading-DQ6b2Ur-.js";import"./FieldError-D4ZV87iq.js";import"./Text-B70hZHmJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
