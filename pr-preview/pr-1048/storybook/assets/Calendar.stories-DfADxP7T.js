import{$ as c,a as m,r as l,j as d}from"./iframe-MVim3oui.js";import{C as n}from"./Calendar-CM_lCTpB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CxzMAZDQ.js";import"./Button-gb006erw.js";import"./utils-GfAQeq6-.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnPFK6GE.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./RSPContexts-CtooKiU1.js";import"./Text-CK8mjed6.js";import"./useDateFormatter-DPvIJsB4.js";import"./useControlledState-BAKDmaF6.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bek8YayL.js";import"./useEvent-BkJEM1S7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DDMJG_rN.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./clsx-Ciqy0D92.js";import"./Button-DXLRWKWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./createLucideIcon-DbJYazUv.js";import"./chevron-left-CGHHaTJV.js";import"./chevron-right-Cs70EX8M.js";import"./Heading-CRtmBqrr.js";import"./FieldError-BDvc8nCv.js";import"./Text-BRJKcgIb.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
