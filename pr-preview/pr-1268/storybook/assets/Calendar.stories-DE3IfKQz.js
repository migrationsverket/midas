import{$ as c,a as m,r as l,j as d}from"./iframe-usp88RXh.js";import{C as n}from"./Calendar-BHe70r69.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CkwCRImb.js";import"./Button-B-TKlEdD.js";import"./utils-BXqK3GQS.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTFNJ6XH.js";import"./useFocusRing-BnVcW9EZ.js";import"./index-BaVleoZK.js";import"./index-B6kb6Xt1.js";import"./useLabel-Rz3gMjr1.js";import"./useLabels-BlUIkC-Y.js";import"./useButton-Dr8gKvJs.js";import"./RSPContexts-D2RkbuPx.js";import"./Text-nB3EVkcg.js";import"./useDateFormatter-D0ahzX6x.js";import"./useControlledState-Bk0Ug2PQ.js";import"./useLocalizedStringFormatter-zmPeK12I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BaxWgQvk.js";import"./useEvent-DwdxgGhf.js";import"./getScrollParent-C_HcNQWA.js";import"./scrollIntoView-CDzWWEyI.js";import"./useDescription-aGifrTIo.js";import"./VisuallyHidden-CVXdiwcx.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D3cHdhJN.js";import"./createLucideIcon-DHgdMN24.js";import"./chevron-right-u8PHy6g7.js";import"./Button-DOBuF016.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-JvTntPif.js";import"./Heading-Ce7-DSoc.js";import"./FieldError-DqHkKxnT.js";import"./Text-BRG4rOQY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
