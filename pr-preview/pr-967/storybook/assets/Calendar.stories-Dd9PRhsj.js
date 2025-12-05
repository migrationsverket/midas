import{$ as p,a as m,r as l,j as d}from"./iframe-Duvzi_mO.js";import{C as n}from"./Calendar-NH98BNLs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CLg0arxw.js";import"./Button-DEGU7aUv.js";import"./utils-DXbn0oqq.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cj6eSEvr.js";import"./useFocusRing--hZOMB0E.js";import"./index-D5Xrr1Vj.js";import"./index-C3jNp5eG.js";import"./useLabels-D1kjihVB.js";import"./useButton-DiocC29F.js";import"./RSPContexts-DD0p7Dx-.js";import"./Text--15STIft.js";import"./useDateFormatter-CGx1dFEq.js";import"./useControlledState-DUm4m-rZ.js";import"./useLocalizedStringFormatter-BU47f0l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFc5C6-Z.js";import"./useEvent-C1kRtpn3.js";import"./getScrollParent-Dn_cR8X0.js";import"./scrollIntoView-CoN4CEq9.js";import"./useDescription-hfMxyp8f.js";import"./VisuallyHidden-DFNT7U81.js";import"./clsx-Ciqy0D92.js";import"./Button-agFIfSf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJvV6lOf.js";import"./createLucideIcon-Pkzd9K88.js";import"./chevron-right-DOmoRKLm.js";import"./Heading-DxyAYdrG.js";import"./FieldError-KymSBWrt.js";import"./Text-B2Au3uTF.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
