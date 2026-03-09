import{$ as c,a as m,r as l,j as d}from"./iframe-CHgot2X7.js";import{C as n}from"./Calendar-CMlGZB9l.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CCqaquvE.js";import"./Button-0zMY2rUc.js";import"./utils-DQgfFqY2.js";import"./clsx-B-dksMZM.js";import"./Hidden-CqaFLcD3.js";import"./useFocusRing-DV-BAEmR.js";import"./index-CmxdV0gr.js";import"./index-BY5gyNOq.js";import"./useLabels-XlyeLMQd.js";import"./useButton-DTMPsQ98.js";import"./RSPContexts-BcdrHj2t.js";import"./Text-DCyFtYSi.js";import"./useDateFormatter-BFFIZyRg.js";import"./useControlledState-CTq5bkOP.js";import"./useLocalizedStringFormatter-BwcUD0xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2lZDq6Xh.js";import"./useEvent-Bgs3fgM1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cv6ZH6Jp.js";import"./VisuallyHidden-D0onDKtY.js";import"./clsx-Ciqy0D92.js";import"./Button-CgoLRGMY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DCHR-uXl.js";import"./createLucideIcon-Bs877ZR1.js";import"./chevron-left-DDlDHK-o.js";import"./chevron-right-DHWU_kjK.js";import"./Heading-DzhgT2C8.js";import"./FieldError-BKJs5LOX.js";import"./Text-CLrr9WjV.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
