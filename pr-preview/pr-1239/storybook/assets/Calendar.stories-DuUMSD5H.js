import{$ as c,a as m,r as l,j as d}from"./iframe-D2jWlRbY.js";import{C as n}from"./Calendar-CU5_7AQo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C5ZfjSs3.js";import"./Button-C20mW5cN.js";import"./utils-BgILje6T.js";import"./clsx-B-dksMZM.js";import"./Hidden-BQ9eCogI.js";import"./useFocusRing-DCfgz9z-.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./RSPContexts-DBHxiWWN.js";import"./Text-BlnXWmBt.js";import"./useDateFormatter-B8P_hx2v.js";import"./useControlledState-TsNhVwVg.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BpAfY_Tt.js";import"./useEvent-CcxES9pj.js";import"./getScrollParent-Bttan2TX.js";import"./scrollIntoView-ZO2UpkDZ.js";import"./useDescription-CJaXbPeA.js";import"./VisuallyHidden-DcHq__qP.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dpd7Auab.js";import"./createLucideIcon-3nESSKIe.js";import"./chevron-right-DGWZqSVa.js";import"./Button-Cx6hm3Pz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Heading-15Bg67se.js";import"./FieldError-BlwhWSc6.js";import"./Text-dwHB4N6Q.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
