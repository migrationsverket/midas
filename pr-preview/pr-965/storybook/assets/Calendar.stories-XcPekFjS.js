import{$ as p,a as m,r as l,j as d}from"./iframe-CUQ35QY-.js";import{C as n}from"./Calendar-Br4olS9m.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ccysIhzD.js";import"./Button-Bsh9_HoT.js";import"./utils-5RKy4vaX.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ct1SE1DS.js";import"./useFocusRing-B7idPrX2.js";import"./index-CGbKJlQM.js";import"./index-C6uWvgQh.js";import"./useLabels-Bt6x9uRf.js";import"./useButton-BansXk_T.js";import"./RSPContexts-DZARiAzW.js";import"./Text-TgbZ0VlZ.js";import"./useDateFormatter-DrGMr-Q-.js";import"./useControlledState-6cnBDVnB.js";import"./useLocalizedStringFormatter-CoOBbLCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ww5ZR_jF.js";import"./useEvent-DKevCmMh.js";import"./getScrollParent-oXbVstWc.js";import"./scrollIntoView-k0ZnzZN6.js";import"./useDescription-DpHNilUH.js";import"./VisuallyHidden-Bxln8_qY.js";import"./clsx-Ciqy0D92.js";import"./Button-B1Lfpc_P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHMj4qxM.js";import"./createLucideIcon-CfvbpDl0.js";import"./chevron-right-Dv5C0HkW.js";import"./Heading-DmIr2b1p.js";import"./FieldError-BjkxW7lY.js";import"./Text-NEiftwSw.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
