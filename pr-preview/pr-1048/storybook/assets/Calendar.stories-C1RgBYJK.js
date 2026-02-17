import{$ as c,a as m,r as l,j as d}from"./iframe-DFPNwlkc.js";import{C as n}from"./Calendar-B_ziPtZ5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTjOMfvk.js";import"./Button-DQefDSoE.js";import"./utils-CV6nHplc.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0i80-zA.js";import"./number-DfkVkf0F.js";import"./useFocusRing-BCqmlDXx.js";import"./index-BDUmJqpj.js";import"./index-Dpft1Kq9.js";import"./useLabels-3zYOWwD6.js";import"./useButton-DiLGUc5M.js";import"./RSPContexts-ZFMplKwB.js";import"./Text-C4FKP_kf.js";import"./useDateFormatter-yqtzMmdI.js";import"./useControlledState-DApIq544.js";import"./useLocalizedStringFormatter-ERBM7yjl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOXtwOE3.js";import"./useEvent-D1XNdLaU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BwrmQFfb.js";import"./VisuallyHidden-ChW5Sl-W.js";import"./clsx-Ciqy0D92.js";import"./Button-kZACelDn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCEDmOYO.js";import"./createLucideIcon-C-NMhMRQ.js";import"./chevron-left-C3RqsdRt.js";import"./chevron-right-B2BqruLJ.js";import"./Heading-DYEjwoMW.js";import"./FieldError-C5roi1Sk.js";import"./Text-tvz73rc8.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
