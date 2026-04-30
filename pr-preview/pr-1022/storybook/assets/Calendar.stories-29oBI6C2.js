import{$ as c,a as m,r as l,j as d}from"./iframe-Bs-4Q0RS.js";import{C as n}from"./Calendar-CZeiBLeW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CGUMJVsK.js";import"./Button-BRycn86x.js";import"./utils-D6H3fjwf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DC5u3Uje.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./RSPContexts-B9ePokfA.js";import"./Text-DUhY8chK.js";import"./useDateFormatter-3t3WxTO2.js";import"./useControlledState-DOA-W8fE.js";import"./useLocalizedStringFormatter-BiyFB0Ck.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CCsFjj4V.js";import"./useEvent-DlRuF4SX.js";import"./getScrollParent-DKOj2UCK.js";import"./scrollIntoView-Dyrx4XX-.js";import"./useDescription-uNFQQz6p.js";import"./VisuallyHidden-D2ZFd25y.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-v-kWByjP.js";import"./createLucideIcon-C-ocypBz.js";import"./chevron-right-Cl7xXwyE.js";import"./Button-DTSBAwbm.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./Heading-kjBpztUM.js";import"./FieldError-B2Y4IZts.js";import"./Text-CODpWWcU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
