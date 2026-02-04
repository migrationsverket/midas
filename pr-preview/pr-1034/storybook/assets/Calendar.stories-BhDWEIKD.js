import{$ as c,a as m,r as l,j as d}from"./iframe-CIGy1hUJ.js";import{C as n}from"./Calendar-fF-TtYwE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bh28iDLd.js";import"./Button-DhS25rIt.js";import"./utils-DIUL7Bc0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPQtKBZU.js";import"./useFocusRing-K48KyH83.js";import"./index-CCCmawvM.js";import"./index-wAr858SZ.js";import"./useLabels-DE_VkWHn.js";import"./useButton-FPvMdOGq.js";import"./RSPContexts-CeDh6z3w.js";import"./Text-i7AsJtUX.js";import"./useDateFormatter-Ce8ST5D7.js";import"./useControlledState-Dw8OuylW.js";import"./useLocalizedStringFormatter-CMMaxMtm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-NH3xbkcQ.js";import"./useEvent-Dj--zDR1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-KqjRHglP.js";import"./VisuallyHidden-D7Ss9ool.js";import"./clsx-Ciqy0D92.js";import"./Button-DiX-Dk0D.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7PXQcbb.js";import"./createLucideIcon-C7Y4Oiz-.js";import"./chevron-left-C_krmoOh.js";import"./chevron-right-DV1GdxQX.js";import"./Heading-BeTsJOic.js";import"./FieldError-C7bz9hQq.js";import"./Text-LF-2_9Ad.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
