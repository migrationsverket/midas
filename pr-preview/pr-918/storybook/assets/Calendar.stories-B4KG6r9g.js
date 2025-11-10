import{$ as p,a as m,r as l,j as d}from"./iframe-D2cP6F3a.js";import{C as n}from"./Calendar-Bllfn8Ks.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B0aFKqi6.js";import"./Button-BdbvQjYI.js";import"./utils-CYJ56a8d.js";import"./clsx-B-dksMZM.js";import"./Hidden-CdI2XBpM.js";import"./useFocusRing-CsKyeFC3.js";import"./index-A2jXSN8N.js";import"./index-D5U9Enu4.js";import"./useLabels-Ml9cK1SD.js";import"./useButton-BE931KVW.js";import"./RSPContexts-Co62-7vH.js";import"./Text-uTyTF2xO.js";import"./useDateFormatter-CG73Jrzj.js";import"./useControlledState-DiQVtu_9.js";import"./useLocalizedStringFormatter-p6d-BWaj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ts_djrty.js";import"./useEvent-Dm4LZbUZ.js";import"./getScrollParent-rg9cwoxD.js";import"./scrollIntoView-BeG40psR.js";import"./useDescription-BDGHoqAG.js";import"./VisuallyHidden-BXXBJOHA.js";import"./clsx-Ciqy0D92.js";import"./Button-C8E-6QCz.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-_SNHOGNJ.js";import"./chevron-right-B9vFTY4W.js";import"./Heading-D99uGahk.js";import"./FieldError-C0d-xSA7.js";import"./Text-7-ZoUH1T.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
