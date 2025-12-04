import{$ as p,a as m,r as l,j as d}from"./iframe-NjzEciz2.js";import{C as n}from"./Calendar-DUbulruC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ce0nYKAN.js";import"./Button-CtzhNdTl.js";import"./utils-BO22LAuU.js";import"./clsx-B-dksMZM.js";import"./Hidden-C0J6_IGJ.js";import"./useFocusRing-pzFTAHVD.js";import"./index-JjVsGnxi.js";import"./index-BPnXoL28.js";import"./useLabels-zRKHb-LF.js";import"./useButton-Ca2UVS6J.js";import"./RSPContexts-Ct4MhcNR.js";import"./Text-BMhjNDEU.js";import"./useDateFormatter-BswDPOHJ.js";import"./useControlledState-DnclevfP.js";import"./useLocalizedStringFormatter-axeaHqCF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dh8uQIMM.js";import"./useEvent-GifwgeES.js";import"./getScrollParent-DS_CqlsL.js";import"./scrollIntoView-CcG1gBOc.js";import"./useDescription-CunDP7hR.js";import"./VisuallyHidden-0o86jBm3.js";import"./clsx-Ciqy0D92.js";import"./Button-BGeEKZH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0TL2D3I.js";import"./createLucideIcon-CQYq2UEE.js";import"./chevron-right-BVmR3S7C.js";import"./Heading-CBj0diMM.js";import"./FieldError-C8GxvgK1.js";import"./Text-DKwC3A1F.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
