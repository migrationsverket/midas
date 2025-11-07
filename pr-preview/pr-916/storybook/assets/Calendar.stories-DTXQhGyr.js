import{$ as p,a as m,r as l,j as d}from"./iframe-BdMP7xRe.js";import{C as n}from"./Calendar-BqIgwydP.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-CZoEAQpn.js";import"./Button-BShsBV_n.js";import"./utils-BXZxyj6A.js";import"./clsx-B-dksMZM.js";import"./Hidden-21u4YwCE.js";import"./useFocusRing-DNVUOvoN.js";import"./index-ran4ZW8i.js";import"./index-CG9v_bJu.js";import"./useLabels-BBjabKP_.js";import"./useButton-Dp6FlW9J.js";import"./RSPContexts-R6BMhwXi.js";import"./Text-DVcK-pIr.js";import"./useDateFormatter-CpvYW9l9.js";import"./useControlledState-BdK1PO_0.js";import"./useLocalizedStringFormatter-uCha_X5U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CJcKCab1.js";import"./useEvent-Dg6CSePe.js";import"./getScrollParent-0ab75Emi.js";import"./scrollIntoView-Bipo5DH-.js";import"./useDescription-ta-S5uMH.js";import"./VisuallyHidden-DTwk-y4u.js";import"./clsx-Ciqy0D92.js";import"./Button-B87e4ZpD.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B_BA-bIQ.js";import"./chevron-right-DVFGorue.js";import"./Heading-C-n8PJFQ.js";import"./FieldError-C8wOBOO7.js";import"./Text-iZDkKzt3.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
