import{$ as c,a as m,r as l,j as d}from"./iframe-BmAdb1PA.js";import{C as n}from"./Calendar-Bnw3Z0OO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CCjc1NoW.js";import"./Button-MRSjvKjG.js";import"./utils-CCClzR0P.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3pD7GY2.js";import"./useFocusRing-DjzcYn69.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./RSPContexts-C9Yi9HqJ.js";import"./Text-CWRsvaQ5.js";import"./useDateFormatter-D9jrVxAv.js";import"./useControlledState-Dv2Kshwg.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DCc_7wSp.js";import"./useEvent-CnZp3rBE.js";import"./getScrollParent-7DjJo_eW.js";import"./scrollIntoView-BvBTMwmY.js";import"./useDescription-Dk0a0Fsb.js";import"./VisuallyHidden-DDq5yWsw.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CICi5DVx.js";import"./createLucideIcon-CbxvyYW-.js";import"./chevron-right-BKmNoILl.js";import"./Button-Cxe1PoSr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Heading-863fHQRC.js";import"./FieldError-BFmjoeTz.js";import"./Text-GqXtxiSt.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
