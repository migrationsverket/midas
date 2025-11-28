import{$ as p,a as m,r as l,j as d}from"./iframe-DOTz5vLQ.js";import{C as n}from"./Calendar-Bp5fTV80.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLnGVIar.js";import"./Button-DIeU5GkG.js";import"./utils-DXAj4U2V.js";import"./clsx-B-dksMZM.js";import"./Hidden-BGFB1vfR.js";import"./useFocusRing-q_YwuAcy.js";import"./index-nlddG7ZQ.js";import"./index-owQEYkmE.js";import"./useLabels-884FkDRT.js";import"./useButton-DTRH3a68.js";import"./RSPContexts-yjaANf4K.js";import"./Text-CjdyZ5QW.js";import"./useDateFormatter-aAxrZ7iy.js";import"./useControlledState-_AKX2YUw.js";import"./useLocalizedStringFormatter-Bhl8mpnd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DNOxtsU2.js";import"./useEvent-CPymZ_91.js";import"./getScrollParent-C__SYK6q.js";import"./scrollIntoView-DX3Zfy83.js";import"./useDescription-CIj0AxHV.js";import"./VisuallyHidden-CKFFXczS.js";import"./clsx-Ciqy0D92.js";import"./Button-BI9bImZc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DemG_s2c.js";import"./createLucideIcon-0SbUiGqR.js";import"./chevron-right-Bi8jxbwD.js";import"./Heading-NV9ut5Xx.js";import"./FieldError-ja_Ote2y.js";import"./Text-DrWNBvy9.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
