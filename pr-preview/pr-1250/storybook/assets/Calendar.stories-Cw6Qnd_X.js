import{$ as c,a as m,r as l,j as d}from"./iframe-ZWFuO3rS.js";import{C as n}from"./Calendar-B4kIP9CV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CYAAE1aH.js";import"./Button-CuvBXfLT.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlAqJEIp.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./RSPContexts-Dt_P8EmM.js";import"./Text-CW08t5T_.js";import"./useDateFormatter-FQbqXS7D.js";import"./useControlledState-CaSPfHyR.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CaIs76Ri.js";import"./useEvent-D0Q6FxQg.js";import"./getScrollParent-CnRw05DR.js";import"./scrollIntoView-CxB-7RAS.js";import"./useDescription-BZozsu8w.js";import"./VisuallyHidden-5iCcQboa.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dn6T3pi4.js";import"./createLucideIcon-BJpb_u0I.js";import"./chevron-right-CywANtLq.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Heading-7px2xDz0.js";import"./FieldError-BqdH46Wm.js";import"./Text-uwKeqPz3.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
