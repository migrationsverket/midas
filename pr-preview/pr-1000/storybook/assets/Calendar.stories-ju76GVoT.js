import{$ as p,a as m,r as l,j as d}from"./iframe-BQrtIPmh.js";import{C as n}from"./Calendar-DE55kuph.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DUYtf0Iy.js";import"./Button-CwSqfpei.js";import"./utils-BS6sXZRH.js";import"./clsx-B-dksMZM.js";import"./Hidden-ChFGCUwp.js";import"./useFocusRing-y2IKkZpt.js";import"./index-YT1oLI7a.js";import"./index-4QHcSQc6.js";import"./useLabels-B8OZel6J.js";import"./useButton-Bq3twKx0.js";import"./RSPContexts-B7BZpIEv.js";import"./Text-COf1Fc6Q.js";import"./useDateFormatter-f9-tEpd9.js";import"./useControlledState-BehPunq_.js";import"./useLocalizedStringFormatter-aBffhIh6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BCtYpHpR.js";import"./useEvent-DsjSvcKm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CFR_hxpk.js";import"./VisuallyHidden-KB2QFTLi.js";import"./clsx-Ciqy0D92.js";import"./Button-of3UeUzt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DkVOPURc.js";import"./createLucideIcon-j47tDFs8.js";import"./chevron-right-CT0bAAmV.js";import"./Heading-Dx2eNYM8.js";import"./FieldError-DxXo_lqN.js";import"./Text-Ar7CbXL2.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
