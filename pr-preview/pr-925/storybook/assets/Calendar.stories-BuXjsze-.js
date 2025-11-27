import{$ as p,a as m,r as l,j as d}from"./iframe-BZebrEas.js";import{C as n}from"./Calendar-CROCI96O.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSbB2YPj.js";import"./Button-BNKoZpIx.js";import"./utils-Cv9uZo9K.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ca7SziLN.js";import"./useFocusRing-BUV9YV_S.js";import"./index-CMbZ6i8n.js";import"./index-CRcYGfdJ.js";import"./useLabels-Bg0bSlQa.js";import"./useButton-DldPu05S.js";import"./RSPContexts-CR_BySB8.js";import"./Text-BLwI2igp.js";import"./useDateFormatter-De_rB_yo.js";import"./useControlledState-CdL0Vn8u.js";import"./useLocalizedStringFormatter-C6EoZcm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGbpo7Pc.js";import"./useEvent-BvUmgLEr.js";import"./getScrollParent-DgDI8Mdk.js";import"./scrollIntoView-I6Vyn3AQ.js";import"./useDescription-9b_SNdIF.js";import"./VisuallyHidden-DdwHvdeJ.js";import"./clsx-Ciqy0D92.js";import"./Button-rfuzx7LV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Cvv0O9w3.js";import"./createLucideIcon-BzZU7Nc4.js";import"./chevron-right-JrVCUt_P.js";import"./Heading-Ci0MqNsG.js";import"./FieldError-S8zlZ8Qt.js";import"./Text-PUTIA7Gc.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
