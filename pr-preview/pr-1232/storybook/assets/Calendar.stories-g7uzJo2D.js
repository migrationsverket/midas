import{$ as c,a as m,r as l,j as d}from"./iframe-CiZlFozv.js";import{C as n}from"./Calendar-Npu7kLTu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CKRsZYaP.js";import"./Button-CxmVBxVQ.js";import"./utils-CtoKVfJq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBUgc4Bq.js";import"./useFocusRing-C8iINmO1.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./RSPContexts-fJFJPzCo.js";import"./Text-Dp6H8GRU.js";import"./useDateFormatter-Csxrtfc9.js";import"./useControlledState-k5LcuuXZ.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CY3AhfRb.js";import"./useEvent-CUD5UUml.js";import"./getScrollParent-BTcAThv_.js";import"./scrollIntoView-De6oNUSa.js";import"./useDescription-6-pChhm_.js";import"./VisuallyHidden-D6ktoCNF.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CcJBrfb0.js";import"./createLucideIcon-DFSC9aW4.js";import"./chevron-right-BoVQ0R3t.js";import"./Button-BS9Q-Own.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Heading-D2XIdd63.js";import"./FieldError-BFjjyPg1.js";import"./Text-CXoRcQkQ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
