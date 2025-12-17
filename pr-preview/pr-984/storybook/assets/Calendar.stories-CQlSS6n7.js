import{$ as p,a as m,r as l,j as d}from"./iframe-D0_uqlPy.js";import{C as n}from"./Calendar-DZHQTJP2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcReh_MP.js";import"./Button-eXHb7oON.js";import"./utils-DZkN7PAb.js";import"./clsx-B-dksMZM.js";import"./Hidden-BjgfQNZ3.js";import"./useFocusRing-Dfa_i0W6.js";import"./index-pB_UCRcv.js";import"./index-Ci7Mui0x.js";import"./useLabels-BQfi_YAD.js";import"./useButton-BfeAEr6h.js";import"./RSPContexts-BUqAcl8X.js";import"./Text-DFiA7Wnk.js";import"./useDateFormatter-CQRXhsHC.js";import"./useControlledState-BFe0ETRm.js";import"./useLocalizedStringFormatter-D3uc4cjF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DMWQJvIu.js";import"./useEvent-Dv95vs0d.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DI1OzZGu.js";import"./VisuallyHidden-D7lPxREE.js";import"./clsx-Ciqy0D92.js";import"./Button-DymjvzeZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgmTFAS9.js";import"./createLucideIcon-Ciz_2pai.js";import"./chevron-right-vOuDoeyg.js";import"./Heading-CoR4_Cl-.js";import"./FieldError-DP3Y5PAe.js";import"./Text-B1302s0A.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
