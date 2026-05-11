import{$ as c,a as m,r as l,j as d}from"./iframe-B--hDPXb.js";import{C as n}from"./Calendar-DXCiYag4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0nafUYmK.js";import"./Button-C9U5DdED.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMfVl8d1.js";import"./useFocusRing-DBQnIZ7Q.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./RSPContexts-DkE08RbH.js";import"./Text-eQWaQXgM.js";import"./useDateFormatter-D0z3fSj7.js";import"./useControlledState-DZkg54SI.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BfKX2Srt.js";import"./useEvent-DlQ_v0NJ.js";import"./getScrollParent-DYArvUGl.js";import"./scrollIntoView-Cdvuqxjj.js";import"./useDescription-BIxNiA0o.js";import"./VisuallyHidden-8_Tg-jOG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BtiEQnl3.js";import"./createLucideIcon-BSPs0YiP.js";import"./chevron-right-BTpjpc5x.js";import"./Button-Bz3nOl8L.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Heading-CZ2LHrqz.js";import"./FieldError-B0I-izd3.js";import"./Text-BKE4mpEc.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
