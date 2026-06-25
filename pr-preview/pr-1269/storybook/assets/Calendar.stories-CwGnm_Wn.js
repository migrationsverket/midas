import{$ as c,a as m,r as l,j as d}from"./iframe-Cc2x2NhL.js";import{C as n}from"./Calendar-CVyjBr1J.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_ztGGjB.js";import"./Button-ByJMIeTP.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./Hidden-DXurTabA.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./RSPContexts-0YfvD9LK.js";import"./Text-D3p3B56u.js";import"./useDateFormatter-Dgd9y1NG.js";import"./useControlledState-B_OZWkkq.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DRFRpbP7.js";import"./useEvent-BBH3oYjA.js";import"./getScrollParent-D5jUw6gC.js";import"./scrollIntoView-BdS7fMnb.js";import"./useDescription-Djm_rT5S.js";import"./VisuallyHidden-CAnoPPmf.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DTL_RrmK.js";import"./createLucideIcon-DcmAEzc9.js";import"./chevron-right-wYizqd4C.js";import"./Button-ClCBSbVd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Heading-Bd4wMQv_.js";import"./FieldError-l6QnCvwQ.js";import"./Text-DcE_bHZ_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
