import{$ as c,a as m,r as l,j as d}from"./iframe-Bwfgw8pk.js";import{C as n}from"./Calendar-Dc2SWwCw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C9JcCruc.js";import"./Button-BsV8k1dg.js";import"./utils-BYZTfypc.js";import"./clsx-B-dksMZM.js";import"./Hidden-C55orz_R.js";import"./useFocusRing-cRFXK4sJ.js";import"./index-D1I53Bzg.js";import"./index-VSa-88v0.js";import"./useLabels-BW9zsbr2.js";import"./useButton-CETvSTMc.js";import"./RSPContexts-DoSu8nwv.js";import"./Text-CHrquvV0.js";import"./useDateFormatter-CUFh7plD.js";import"./useControlledState-iPtiFsr4.js";import"./useLocalizedStringFormatter-CQ1hUGUd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7MJYdS-.js";import"./useEvent-DV0ae6Un.js";import"./getScrollParent-BLupYbMm.js";import"./scrollIntoView-DORWTWY7.js";import"./useDescription-DGPUAMqe.js";import"./VisuallyHidden-B9CGtyyD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-XrxlUIzC.js";import"./createLucideIcon-BSOfHJOH.js";import"./chevron-right-BJIgCCJo.js";import"./Button-Cc79re0B.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Du3bV9_E.js";import"./Heading-CvI5Q4DY.js";import"./FieldError-rZWlknNl.js";import"./Text-COMr0RdB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
