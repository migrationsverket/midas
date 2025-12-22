import{$ as p,a as m,r as l,j as d}from"./iframe-D3VtUWSl.js";import{C as n}from"./Calendar-DLnO-3T-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9lRX3Sd.js";import"./Button-DGLiOuZ9.js";import"./utils-CJW5kjsb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dl7lCnqG.js";import"./useFocusRing-BNShuMky.js";import"./index-C6GLa6dJ.js";import"./index-Do45vOIK.js";import"./useLabels-G0Yi_Cff.js";import"./useButton-BTM0ezGo.js";import"./RSPContexts-DQTwS8CB.js";import"./Text-MlqW2q7o.js";import"./useDateFormatter-3bP5SvE8.js";import"./useControlledState-D3RFosaK.js";import"./useLocalizedStringFormatter-DFLRg_X9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DlrPEvBk.js";import"./useEvent-B0ijDIr5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BN2PP9Tw.js";import"./VisuallyHidden-CH7WgZ8s.js";import"./clsx-Ciqy0D92.js";import"./Button-B6kHoh3j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwDdLei2.js";import"./createLucideIcon-7E-0s_aZ.js";import"./chevron-right-C9EzzOlK.js";import"./Heading-BDorIF3l.js";import"./FieldError-Bm_vztuN.js";import"./Text-NG_CJW3Y.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
