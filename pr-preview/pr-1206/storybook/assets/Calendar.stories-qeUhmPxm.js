import{$ as c,a as m,r as l,j as d}from"./iframe-CPZ4_d2q.js";import{C as n}from"./Calendar-DkTlAhWS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnHCTpfb.js";import"./Button-CXhapsAk.js";import"./utils-DWW_dCIy.js";import"./clsx-B-dksMZM.js";import"./Hidden-ddHOLGj0.js";import"./useFocusRing-d1kY_X2y.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./RSPContexts-CNU_cvLJ.js";import"./Text-C-nhapA_.js";import"./useDateFormatter-JBqljRNO.js";import"./useControlledState-DiN_YqvG.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BrNCpMnQ.js";import"./useEvent-Bz5nfpns.js";import"./getScrollParent-B7yWW-nR.js";import"./scrollIntoView-DakIikjX.js";import"./useDescription-DY6oOuRz.js";import"./VisuallyHidden-D_2Qiydl.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BQYxhI99.js";import"./createLucideIcon-CHHQY25e.js";import"./chevron-right-DwC5drtM.js";import"./Button-hn_7_4-p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Heading-CCkMK4RX.js";import"./FieldError-rOuvG30X.js";import"./Text-CxhoFnBV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
