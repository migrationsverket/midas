import{$ as c,a as m,r as l,j as d}from"./iframe-C7mRVAw-.js";import{C as n}from"./Calendar-8NENtCC0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C-Xc0iav.js";import"./Button-BOx_rjlH.js";import"./utils-BeEL8pJ2.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMuuZGaU.js";import"./useFocusRing-B6vJKCx-.js";import"./index-C_BC5gdb.js";import"./index-BTnShkl9.js";import"./useLabels-Ds9YSjJx.js";import"./useButton-ZvjmP_g6.js";import"./RSPContexts-3BOa1bAA.js";import"./Text-C-q-JnIT.js";import"./useDateFormatter-TNUKXyHk.js";import"./useControlledState-CdL3PN3V.js";import"./useLocalizedStringFormatter-5uEV4cAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-MT3yovPK.js";import"./useEvent-Cc0KmnDZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTA-9R__.js";import"./VisuallyHidden-Bi6dfUTC.js";import"./clsx-Ciqy0D92.js";import"./Button-CZ_HndjP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWqMwdpP.js";import"./createLucideIcon-CxN-HpyC.js";import"./chevron-left-C-PRFvPp.js";import"./chevron-right-C4vsgU7R.js";import"./Heading-0hTRdsf4.js";import"./FieldError-BFaJaxlc.js";import"./Text-SdK-7_Ed.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
