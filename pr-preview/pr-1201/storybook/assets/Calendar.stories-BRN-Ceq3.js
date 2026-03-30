import{$ as c,a as m,r as l,j as d}from"./iframe-DTOqtRPp.js";import{C as n}from"./Calendar-DiofjgAM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-JX-Zal1a.js";import"./Button-C4kKXxPS.js";import"./utils-CQz-p0Ar.js";import"./clsx-B-dksMZM.js";import"./Hidden-BopZmEN9.js";import"./useFocusRing-jHCCwEPg.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./RSPContexts-mX6bJ66o.js";import"./Text-CIhwCa8A.js";import"./useDateFormatter-DkUvByKK.js";import"./useControlledState-DPZt2fnR.js";import"./useLocalizedStringFormatter-BUk3tKu_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DPynXPaB.js";import"./useEvent-CLOuM3cb.js";import"./getScrollParent-lUA4pL69.js";import"./scrollIntoView-Bampsmpi.js";import"./useDescription-D7gs14Ar.js";import"./VisuallyHidden-DwgxUjwt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BG3i9ObE.js";import"./createLucideIcon-DdZg643M.js";import"./chevron-right-BFhaMH9U.js";import"./Button-CDDDIvIj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./Heading-6SEs4vL1.js";import"./FieldError-B6hQSiJl.js";import"./Text-BaCnxKWQ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
