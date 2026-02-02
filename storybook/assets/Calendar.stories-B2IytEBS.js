import{$ as c,a as m,r as l,j as d}from"./iframe-D1MYXp-w.js";import{C as n}from"./Calendar-D11_1bv3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CzekBHti.js";import"./Button-Cu_o7jy-.js";import"./utils-aWuB-QdR.js";import"./clsx-B-dksMZM.js";import"./Hidden-BE2MqSt0.js";import"./useFocusRing-BMjUS9b1.js";import"./index-BxRInLIQ.js";import"./index-DKk9wEG4.js";import"./useLabels-uwnDLehD.js";import"./useButton-DiNOWPXA.js";import"./RSPContexts-KH8njxZF.js";import"./Text-DFmQ5vZk.js";import"./useDateFormatter-C84Zl2le.js";import"./useControlledState-Bn7jLDvo.js";import"./useLocalizedStringFormatter-nJ6vlP7S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-tHk05p25.js";import"./useEvent-D8uPwVMW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C4XQCS9x.js";import"./VisuallyHidden-DeZDzV12.js";import"./clsx-Ciqy0D92.js";import"./Button-CWi-yXwr.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH5t1GsE.js";import"./createLucideIcon-DypBOEHT.js";import"./chevron-left-DEb2ibhA.js";import"./chevron-right-BpcxiFZw.js";import"./Heading-CYS4LgEf.js";import"./FieldError-DXvMK5mU.js";import"./Text-3-mIHV0D.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
