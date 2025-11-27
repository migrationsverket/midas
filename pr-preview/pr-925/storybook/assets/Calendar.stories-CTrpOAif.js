import{$ as p,a as m,r as l,j as d}from"./iframe-C4RBV6GX.js";import{C as n}from"./Calendar-BJLTxJKe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-GMfnEPCG.js";import"./Button-B_dAQwQ7.js";import"./utils-BM88gxdX.js";import"./clsx-B-dksMZM.js";import"./Hidden-J-idEOIL.js";import"./useFocusRing-Pgaw3Tz8.js";import"./index-jywy1dsl.js";import"./index-ChQorhKd.js";import"./useLabels-DAt0_SEo.js";import"./useButton-CORpOC_p.js";import"./RSPContexts-owpiQDgK.js";import"./Text-C8QGPdDY.js";import"./useDateFormatter-DWKyLFc2.js";import"./useControlledState-DnbLjGs7.js";import"./useLocalizedStringFormatter-CkJZKvBs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CiAr2wu4.js";import"./useEvent-tTghAMBH.js";import"./getScrollParent-Kj6L2nZg.js";import"./scrollIntoView-MVruq_nP.js";import"./useDescription-NLjHVWnU.js";import"./VisuallyHidden-C_g1YpNq.js";import"./clsx-Ciqy0D92.js";import"./Button-5X29Z93h.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C2kDDKER.js";import"./createLucideIcon-BJxYqGO_.js";import"./chevron-right--PgiRLeT.js";import"./Heading-B2TH1H8T.js";import"./FieldError-ChRM9hBQ.js";import"./Text-CbFJ3jze.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
