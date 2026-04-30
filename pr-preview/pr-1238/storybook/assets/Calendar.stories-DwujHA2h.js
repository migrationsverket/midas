import{$ as c,a as m,r as l,j as d}from"./iframe-Ex-KEKbR.js";import{C as n}from"./Calendar-B_8C9AJr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DWbFLQoY.js";import"./Button-C8JSYTF8.js";import"./utils-Dq_8TIe4.js";import"./clsx-B-dksMZM.js";import"./Hidden-CyDaCMoS.js";import"./useFocusRing-H-1VYNNS.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./RSPContexts-DxlwqgCa.js";import"./Text-CeEAoIdH.js";import"./useDateFormatter-D3R-ng-S.js";import"./useControlledState-OUr4VazD.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-1FylvW6V.js";import"./useEvent-B4t1a7CS.js";import"./getScrollParent-ClgoPRH9.js";import"./scrollIntoView-D4kGYOib.js";import"./useDescription-Bk4LSLU-.js";import"./VisuallyHidden-B1UrQI4k.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DiHjbi73.js";import"./createLucideIcon-CnalT5R6.js";import"./chevron-right-BeH802ew.js";import"./Button-BAZVnFvD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Heading-Hwdatq5V.js";import"./FieldError-CgmLooUG.js";import"./Text-DJaiOuNK.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
