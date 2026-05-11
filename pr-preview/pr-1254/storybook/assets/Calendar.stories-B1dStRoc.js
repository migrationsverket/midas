import{$ as c,a as m,r as l,j as d}from"./iframe-BJvdaX8k.js";import{C as n}from"./Calendar-CEYa-b0u.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BpOGX0m7.js";import"./Button-2rxKwo5b.js";import"./utils-ZkRQ_pis.js";import"./clsx-B-dksMZM.js";import"./Hidden-1TQ91tjS.js";import"./useFocusRing-DK9g2iem.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./RSPContexts-CoTdr7hf.js";import"./Text-BNMtUmCk.js";import"./useDateFormatter-BcEJyon2.js";import"./useControlledState-CFLNrtf2.js";import"./useLocalizedStringFormatter-DTwaBSs6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DCNcPDXB.js";import"./useEvent-CFX03mzz.js";import"./getScrollParent-DAFKwCNH.js";import"./scrollIntoView-B05vA7IT.js";import"./useDescription-BybqaC--.js";import"./VisuallyHidden-PAT-EUPY.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DDE6EuLz.js";import"./createLucideIcon-CeO-jkh6.js";import"./chevron-right-DF0x-O1K.js";import"./Button-Bns6iq4v.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./Heading-U99AeCxa.js";import"./FieldError-Dsj3zxX_.js";import"./Text-C0JJvFIL.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
