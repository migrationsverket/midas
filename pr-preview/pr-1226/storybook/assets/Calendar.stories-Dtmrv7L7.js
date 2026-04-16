import{$ as c,a as m,r as l,j as d}from"./iframe-CCfLQD4z.js";import{C as n}from"./Calendar-Dd63b8jz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ceblfhq1.js";import"./Button-CmCCWuSi.js";import"./utils-6cPY1nOj.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWjl7TwO.js";import"./useFocusRing-EcVjUqlw.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./RSPContexts-CsNweyO-.js";import"./Text-GlhP0ZNt.js";import"./useDateFormatter-D7p8WmIV.js";import"./useControlledState-Dk8QnFuU.js";import"./useLocalizedStringFormatter-BA4949mp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2IQ1nTQ.js";import"./useEvent-BIylNxfJ.js";import"./getScrollParent-Cy4s0DF2.js";import"./scrollIntoView-B56Z4Qb3.js";import"./useDescription-DfOXojso.js";import"./VisuallyHidden-BkMvzT9s.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Yv-8JIhh.js";import"./createLucideIcon-DWEKCqmg.js";import"./chevron-right-P_IsI9mM.js";import"./Button-DJVlOFkK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./Heading-BT23bQxk.js";import"./FieldError-DW0YkXyi.js";import"./Text-DZ79u1iH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
