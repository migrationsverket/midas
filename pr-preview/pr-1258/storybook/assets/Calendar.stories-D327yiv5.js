import{$ as c,a as m,r as l,j as d}from"./iframe-DsPZ3k2a.js";import{C as n}from"./Calendar-DA0IFLbo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VhBgbKo4.js";import"./Button-1ibsdlM-.js";import"./utils-DVRplGTm.js";import"./clsx-B-dksMZM.js";import"./Hidden-vFz_M5_3.js";import"./useFocusRing-Cuzdmb74.js";import"./index-CaIK6bHz.js";import"./index-SpvYX93F.js";import"./useLabel-CBpqBZPr.js";import"./useLabels-BLAf1Pjr.js";import"./useButton-td_Mid3P.js";import"./RSPContexts-CozbcOE6.js";import"./Text-Dz2dRBNa.js";import"./useDateFormatter-CIm4hPTH.js";import"./useControlledState-Ynphlhkh.js";import"./useLocalizedStringFormatter-BhAe1Cmu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Co93Z-6I.js";import"./useEvent-c1TSVycZ.js";import"./getScrollParent-SsQAyo_d.js";import"./scrollIntoView-Co_8oPFw.js";import"./useDescription-D1CIVKnU.js";import"./VisuallyHidden-BoP7uW4X.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D5dUCg5A.js";import"./createLucideIcon-DFP7Vl1t.js";import"./chevron-right-kfcHH0NI.js";import"./Button-uXogGJvd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B_4X81TH.js";import"./Heading-BS-WW6S5.js";import"./FieldError-B7hNQFWR.js";import"./Text-DD5LVeyW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
