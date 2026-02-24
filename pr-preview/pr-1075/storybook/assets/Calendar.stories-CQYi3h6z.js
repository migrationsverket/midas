import{$ as c,a as m,r as l,j as d}from"./iframe-Cz8HHCXP.js";import{C as n}from"./Calendar-Cpe9O0kD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DnAY9j_t.js";import"./Button-CyhSWA6k.js";import"./utils-CHHvFpL5.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjfT0FF_.js";import"./useFocusRing-CifWSbR7.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./RSPContexts-BZpnDWsc.js";import"./Text-C2eLHPBt.js";import"./useDateFormatter-D7N72n_0.js";import"./useControlledState-CGafyotv.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Zp4_hfNM.js";import"./useEvent-CnM7m0F3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D6nJ7Lob.js";import"./VisuallyHidden-Bnafg7jN.js";import"./clsx-Ciqy0D92.js";import"./Button-_rHSG3fZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";import"./createLucideIcon-D0LCllt7.js";import"./chevron-left-PJxqniKZ.js";import"./chevron-right-DjEOnUdZ.js";import"./Heading-DEjXC6uX.js";import"./FieldError-CP8pZpTQ.js";import"./Text-Ds9GT8qW.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
