import{$ as c,a as m,r as l,j as d}from"./iframe-BQhS1Nl-.js";import{C as n}from"./Calendar-ClDYKCN6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BMmR1UpT.js";import"./Button-Dr48bfBY.js";import"./utils-DX-1lbRH.js";import"./clsx-B-dksMZM.js";import"./Hidden-XO9eD8nd.js";import"./useFocusRing-C7eLc3ua.js";import"./index-BaCUsZ-2.js";import"./index-DPBbUFQF.js";import"./useLabels-DSkvQYsZ.js";import"./useButton-28B5gFXv.js";import"./RSPContexts-C79IcF5o.js";import"./Text-tc6oiTHM.js";import"./useDateFormatter-Dc06gHtp.js";import"./useControlledState-DF0fFfyv.js";import"./useLocalizedStringFormatter-B1JkIDRF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-dcu9jAP6.js";import"./useEvent-DDuhPEOD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-IaZzTqIH.js";import"./VisuallyHidden-DxSkEFyH.js";import"./clsx-Ciqy0D92.js";import"./Button-DJ5OBxjs.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BsVfwROU.js";import"./createLucideIcon-DJtzdfmE.js";import"./chevron-left-CuxP8VZ3.js";import"./chevron-right-BQmRXVfz.js";import"./Heading-CYCNNzFN.js";import"./FieldError-CJdO8pv6.js";import"./Text-C6md5qJ5.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
