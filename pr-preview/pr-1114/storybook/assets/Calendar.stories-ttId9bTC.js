import{$ as c,a as m,r as l,j as d}from"./iframe-wk1uxL0R.js";import{C as n}from"./Calendar-QJeLjVfV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTeEhRTB.js";import"./Button-BJm7MwiY.js";import"./utils-BKmHeGDP.js";import"./clsx-B-dksMZM.js";import"./Hidden-OSmil6gU.js";import"./useFocusRing-mtIFdSYG.js";import"./index-DpCKx4XG.js";import"./index-B9EV4M0O.js";import"./useLabels-Z8jFtyR8.js";import"./useButton-CzrLl786.js";import"./RSPContexts-CLBTCfJ3.js";import"./Text-D_aWqMlk.js";import"./useDateFormatter-DqvlmeGO.js";import"./useControlledState-DQ_KGuHt.js";import"./useLocalizedStringFormatter-Ceub4S3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BlwkEUm-.js";import"./useEvent-CWBKex4u.js";import"./getScrollParent-CmjId40O.js";import"./scrollIntoView-C5wBRPen.js";import"./useDescription-B-96JeUD.js";import"./VisuallyHidden-C2txOMCT.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CZvdT-D5.js";import"./createLucideIcon-DGfTdO3_.js";import"./chevron-right-C9ECPkku.js";import"./Button-DDyJ2oTu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-KI7sGx_d.js";import"./Heading-BlwA6-bZ.js";import"./FieldError-5unwDnAP.js";import"./Text-BueF1im7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
