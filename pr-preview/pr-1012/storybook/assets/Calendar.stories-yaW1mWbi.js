import{$ as c,a as m,r as l,j as d}from"./iframe-Cni-JKW8.js";import{C as n}from"./Calendar-BobQ3Uy4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CZzMa2a6.js";import"./Button-XWhDywVU.js";import"./utils-BBgPw1Ze.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMEQANNf.js";import"./useFocusRing-ecgGW1pG.js";import"./index-CCUYZc-T.js";import"./index-BOJ7Xdv4.js";import"./useLabels-CIS6hw6Q.js";import"./useButton-nRwKGbmO.js";import"./RSPContexts-CiH3wnY5.js";import"./Text-BaLCHv3_.js";import"./useDateFormatter-CxLa1ZLE.js";import"./useControlledState-Bv7XzANZ.js";import"./useLocalizedStringFormatter-CLIXHxcQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CuKKDA6c.js";import"./useEvent-CYtTP2RX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BCfpUS-d.js";import"./VisuallyHidden-D3ce5_bP.js";import"./clsx-Ciqy0D92.js";import"./Button-CLd0MwQu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGbBMSU.js";import"./createLucideIcon-Bi-qWE7K.js";import"./chevron-left-C3MNervn.js";import"./chevron-right-d11Hm_48.js";import"./Heading-RzWY-POA.js";import"./FieldError-C2WkJOys.js";import"./Text-DfMa_H_z.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
