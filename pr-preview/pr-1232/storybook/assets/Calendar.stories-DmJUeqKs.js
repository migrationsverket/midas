import{$ as c,a as m,r as l,j as d}from"./iframe-DoRPDZ-n.js";import{C as n}from"./Calendar-Bfx0TP5_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C9wMlT0B.js";import"./Button-B0xwVoX4.js";import"./utils-BzVzQHtN.js";import"./clsx-B-dksMZM.js";import"./Hidden-Kgphbk6f.js";import"./useFocusRing-Cpj_6FFs.js";import"./index-BpvQun69.js";import"./index-dxvpTbK-.js";import"./useLabel-D--L_qeT.js";import"./useLabels-6Au6pJO1.js";import"./useButton-C_Cxj7yi.js";import"./RSPContexts-CIekAzAn.js";import"./Text-CSSrkUG7.js";import"./useDateFormatter-Bog0t8wc.js";import"./useControlledState-Ddc7Cp2E.js";import"./useLocalizedStringFormatter-C5mreUQq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CzyQFJFh.js";import"./useEvent-B1VSdZUj.js";import"./getScrollParent-D1g3Kg9R.js";import"./scrollIntoView-DAAp94bF.js";import"./useDescription-B7wqrjVm.js";import"./VisuallyHidden-Bcu1ZANu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DkwN9eaZ.js";import"./createLucideIcon-CiSuNVkc.js";import"./chevron-right-Bc4PFVtV.js";import"./Button-qJNZwD8g.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Ckjeog25.js";import"./Heading-CoW8frit.js";import"./FieldError-DkiFq4VK.js";import"./Text-BM5KdGqj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
