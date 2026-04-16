import{$ as c,a as m,r as l,j as d}from"./iframe-JYgA1KQi.js";import{C as n}from"./Calendar-D3Gou87Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-De_350EO.js";import"./Button-w7gIenY9.js";import"./utils-ChLKnNJg.js";import"./clsx-B-dksMZM.js";import"./Hidden-0YDp5zxo.js";import"./useFocusRing-C06MErgQ.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./RSPContexts-gejQyHLH.js";import"./Text-D9TOgsmN.js";import"./useDateFormatter-Bylm6C3C.js";import"./useControlledState-CXI3Yibh.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CIb3u_ya.js";import"./useEvent-BOB9fAnz.js";import"./getScrollParent-zw9jGmc3.js";import"./scrollIntoView-D2aT1v_d.js";import"./useDescription-CE0NAOWk.js";import"./VisuallyHidden-Cov8ReYV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-94XxdU4E.js";import"./createLucideIcon-UApEV6S6.js";import"./chevron-right-CyN7oPst.js";import"./Button-MMPxX2Zb.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Heading-BHTxTGKK.js";import"./FieldError-BlsJhfcN.js";import"./Text-D50EAg-o.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
