import{$ as p,a as m,r as l,j as d}from"./iframe-CDjUhHkf.js";import{C as n}from"./Calendar-ifS998Tw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_CE_Hcr.js";import"./Button-ZrOuQ2QI.js";import"./utils-BwP8WbxY.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bqtl1bJc.js";import"./useFocusRing-CKu_fLWx.js";import"./index-CtchEpDY.js";import"./index-DoNQNwAs.js";import"./useLabels-ueWd9dbD.js";import"./useButton-svinwHyX.js";import"./RSPContexts-DChnSr8e.js";import"./Text-B18pCq7H.js";import"./useDateFormatter-CSYcbnTZ.js";import"./useControlledState-9B2Btxh8.js";import"./useLocalizedStringFormatter-CYjVYPGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQLpRuWM.js";import"./useEvent-CbUwsR45.js";import"./getScrollParent-C4SgZTQS.js";import"./scrollIntoView-DAsjrTq5.js";import"./useDescription-qOG3Dy7D.js";import"./VisuallyHidden-CTrzc_wT.js";import"./clsx-Ciqy0D92.js";import"./Button-CAbYH_sj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGCNydTJ.js";import"./createLucideIcon-DB6p7_4V.js";import"./chevron-right-Cnlqz5vj.js";import"./Heading-DtuzeRSv.js";import"./FieldError-vdgRg7Vd.js";import"./Text-CdNxzd7k.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
