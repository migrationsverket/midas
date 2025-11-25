import{$ as p,a as m,r as l,j as d}from"./iframe-DTEEsWKs.js";import{C as n}from"./Calendar-C2u7QXER.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CIy7Y2Lb.js";import"./Button-D8fw21xh.js";import"./utils-Bei6jhoM.js";import"./clsx-B-dksMZM.js";import"./Hidden-H9M_Xkwd.js";import"./useFocusRing-Bt_R5Kxb.js";import"./index-CDhAOoC2.js";import"./index-CAL1rCpR.js";import"./useLabels-hQ-tPN-N.js";import"./useButton-Ci76CoW9.js";import"./RSPContexts-5KZxHimu.js";import"./Text-D2Kdkld6.js";import"./useDateFormatter-BRRRR-no.js";import"./useControlledState-DH-4U24x.js";import"./useLocalizedStringFormatter-ClfAxNed.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DX0WFCSj.js";import"./useEvent-DsaPgCLq.js";import"./getScrollParent-BkVioRiR.js";import"./scrollIntoView-BryBizoW.js";import"./useDescription-D1sH4a-N.js";import"./VisuallyHidden-DXWpkl8V.js";import"./clsx-Ciqy0D92.js";import"./Button-Ir9Meu39.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-4UzQK-SV.js";import"./createLucideIcon-CxA0LOFq.js";import"./chevron-right-C3m_xdlx.js";import"./Heading-BZKArxoK.js";import"./FieldError-YzVCmXmy.js";import"./Text-RBLlkHxH.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
