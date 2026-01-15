import{$ as c,a as m,r as l,j as d}from"./iframe-CfYlVJbT.js";import{C as n}from"./Calendar-F5clk6Ll.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-GY1BgBj8.js";import"./Button-CF5oaspZ.js";import"./utils-CJmxlmBT.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLJR8IU5.js";import"./useFocusRing-CoZPHDQr.js";import"./index-Ye0e-ntf.js";import"./index-CP4lNSy2.js";import"./useLabels-CfaUcrJ-.js";import"./useButton-CwgKmRtS.js";import"./RSPContexts-B6MfxgMQ.js";import"./Text-DPDTmGdI.js";import"./useDateFormatter-WsC3hVcs.js";import"./useControlledState-BKJCcjym.js";import"./useLocalizedStringFormatter-BY8QYVwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKrzEtkl.js";import"./useEvent-X8mwGVrv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DZuf13ft.js";import"./VisuallyHidden-DRHGK4kj.js";import"./clsx-Ciqy0D92.js";import"./Button-mO0qg6G0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XdRVw3Iq.js";import"./createLucideIcon-BodeLy3S.js";import"./chevron-left-6Wv95JEH.js";import"./chevron-right-DuIOu4CH.js";import"./Heading-CxtVvS-8.js";import"./FieldError-C1ZSTrtV.js";import"./Text-a5g5-yXG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
