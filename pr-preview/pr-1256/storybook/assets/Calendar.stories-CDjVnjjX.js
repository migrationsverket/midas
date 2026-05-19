import{$ as c,a as m,r as l,j as d}from"./iframe-TmYtQgnY.js";import{C as n}from"./Calendar-DybVNbwD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CKQ2naeB.js";import"./Button-ChpfMuYO.js";import"./utils-DvgYso-7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Curp_cq_.js";import"./useFocusRing-DS5bIIsk.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./RSPContexts-DD-NCnvs.js";import"./Text-Buf9POGu.js";import"./useDateFormatter-DyDZ6AVg.js";import"./useControlledState-D8j9ZCcX.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BjEaIc_E.js";import"./useEvent-znuN9vlN.js";import"./getScrollParent-D0szpDfO.js";import"./scrollIntoView-BMboN7jH.js";import"./useDescription-BlLDYGFU.js";import"./VisuallyHidden-Bad1FF8A.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B0lpfb0E.js";import"./createLucideIcon-DeoFDGGs.js";import"./chevron-right-VaL59oiZ.js";import"./Button-CPisJxWJ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Heading-DQC2lV1W.js";import"./FieldError-7FPxvhrU.js";import"./Text-T0trnrKS.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
