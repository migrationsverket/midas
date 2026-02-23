import{$ as c,a as m,r as l,j as d}from"./iframe-xAfmlG07.js";import{C as n}from"./Calendar-AZSm_-er.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-krcqe3wT.js";import"./Button-_CPn_6qY.js";import"./utils-9cghZAOb.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaQ6AcOr.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./RSPContexts-COny7Pe5.js";import"./Text-DTHVKRvi.js";import"./useDateFormatter-BMG4BXA4.js";import"./useControlledState-B8262pyO.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BEDR7Mst.js";import"./useEvent-juwi-LBt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BG0yfZwv.js";import"./VisuallyHidden-BPCvzmAs.js";import"./clsx-Ciqy0D92.js";import"./Button-DlzyzK84.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./createLucideIcon-xLqTy_XU.js";import"./chevron-left-je6l0nJU.js";import"./chevron-right-D7sYqIfw.js";import"./Heading-CnWMyh0q.js";import"./FieldError-D0XPClu_.js";import"./Text-Dg2zxxbH.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
