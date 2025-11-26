import{$ as p,a as m,r as l,j as d}from"./iframe-B0TsSvpN.js";import{C as n}from"./Calendar-proUkYUy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-HFI89Iv2.js";import"./Button-BNNDKrj3.js";import"./utils-Cr9q3b11.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFn3CYqd.js";import"./useFocusRing-BgEJNMxL.js";import"./index-4peZajMB.js";import"./index-BlEvzA_t.js";import"./useLabels-CcQRsMgV.js";import"./useButton-4YKnYTOK.js";import"./RSPContexts-BWxM02pN.js";import"./Text-BsgSxeOt.js";import"./useDateFormatter-YMSgIjZd.js";import"./useControlledState-JdOJEBqA.js";import"./useLocalizedStringFormatter-DU6t-nF5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DfU3G4h6.js";import"./useEvent-DNrIx6L7.js";import"./getScrollParent-Dh75CpyK.js";import"./scrollIntoView-C6aLME3I.js";import"./useDescription-BogRrWOC.js";import"./VisuallyHidden-CzqEzZBD.js";import"./clsx-Ciqy0D92.js";import"./Button-CaiHz5_X.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-tisuuO7l.js";import"./createLucideIcon-CW9WyvOy.js";import"./chevron-right-CeFLMgjK.js";import"./Heading-KuBDyk7R.js";import"./FieldError-B-MRedd_.js";import"./Text-NZFj7bgs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
