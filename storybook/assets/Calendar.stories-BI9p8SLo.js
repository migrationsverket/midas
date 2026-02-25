import{$ as c,a as m,r as l,j as d}from"./iframe-H2fTZ2nq.js";import{C as n}from"./Calendar-CMHURt2u.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C0Ljgg9C.js";import"./Button-Thvc77gT.js";import"./utils-DW5ctycD.js";import"./clsx-B-dksMZM.js";import"./Hidden-4IKYQ2HC.js";import"./useFocusRing-rY5-5oYI.js";import"./index-CIV3byj9.js";import"./index-CSi78BJY.js";import"./useLabels-CTAJFpqt.js";import"./useButton-Ch9WkEmD.js";import"./RSPContexts-ClKYWlVb.js";import"./Text-DSNt7iu3.js";import"./useDateFormatter-Cd_oI90A.js";import"./useControlledState-CgUQbm6f.js";import"./useLocalizedStringFormatter-CY6ZTepc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C0swBseD.js";import"./useEvent-DAH9VV2g.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-7i5dhWK0.js";import"./VisuallyHidden-h3OxpH0T.js";import"./clsx-Ciqy0D92.js";import"./Button-wmHwb-lN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CfxXtKTH.js";import"./createLucideIcon-DiZz3DHh.js";import"./chevron-left-Cpa5eCRk.js";import"./chevron-right-LoOqWX1p.js";import"./Heading-BTRJR4jH.js";import"./FieldError-Ze_QYnbw.js";import"./Text-K2RkR5q1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
