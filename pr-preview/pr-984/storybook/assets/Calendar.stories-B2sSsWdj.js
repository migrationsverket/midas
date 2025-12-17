import{$ as p,a as m,r as l,j as d}from"./iframe-CQ_fy_EY.js";import{C as n}from"./Calendar-BmSkVfbn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CNKbm38_.js";import"./Button-B89jYYjE.js";import"./utils-C7l7LqzK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CzYLxqKr.js";import"./useFocusRing-CBjwNCjA.js";import"./index-BJJvraYt.js";import"./index-DXn3pDe8.js";import"./useLabels-DWjvmaBB.js";import"./useButton-BeUorQOe.js";import"./RSPContexts-DAW1b0Sd.js";import"./Text-CW8LcNQ6.js";import"./useDateFormatter-uFjIiMFq.js";import"./useControlledState-CnAeDNgw.js";import"./useLocalizedStringFormatter-C29QY5VX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Admi8phe.js";import"./useEvent-gT9bYXp3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Be4J1cHA.js";import"./VisuallyHidden-DxPMhaND.js";import"./clsx-Ciqy0D92.js";import"./Button-DtIQcLuH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BTlSi4nT.js";import"./createLucideIcon-mqgaB7OL.js";import"./chevron-right-B1Kq110B.js";import"./Heading-jrsyU3L3.js";import"./FieldError-DMdpyDE1.js";import"./Text-hjykNwCE.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
