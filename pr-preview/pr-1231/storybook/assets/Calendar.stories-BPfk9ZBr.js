import{$ as c,a as m,r as l,j as d}from"./iframe-DHMeiSea.js";import{C as n}from"./Calendar-CDyFYUB6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BeaXyZLX.js";import"./Button-X7Yqj24b.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./Hidden-BDTDIVWX.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./RSPContexts-BSo_BzMb.js";import"./Text-BM4AoGMt.js";import"./useDateFormatter-BYoybAQ8.js";import"./useControlledState-CMV_FSB4.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BU2k-Oau.js";import"./useEvent-lEqisOMe.js";import"./getScrollParent-DqcIICEx.js";import"./scrollIntoView-CXJd081A.js";import"./useDescription-D2PosSZ6.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C2HZCDCG.js";import"./createLucideIcon-DHfZe-cT.js";import"./chevron-right-C2cSQACt.js";import"./Button-DRj-uv9d.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Heading-BSgX0T3V.js";import"./FieldError-lPOYj5uT.js";import"./Text-OJU2i65y.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
