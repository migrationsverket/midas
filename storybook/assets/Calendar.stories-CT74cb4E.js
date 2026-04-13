import{$ as c,a as m,r as l,j as d}from"./iframe-DHxMEyk6.js";import{C as n}from"./Calendar-Ck2muHex.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-EYKFhX50.js";import"./Button-BpC7kCwC.js";import"./utils-C_yGkqEQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CkZgcLGH.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./RSPContexts-xSY5mLjc.js";import"./Text-C0s7dJ5a.js";import"./useDateFormatter-FJCCstaT.js";import"./useControlledState-DToB7jqX.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D_qDzU80.js";import"./useEvent-D9bVVAaY.js";import"./getScrollParent-Cb_GBxXJ.js";import"./scrollIntoView-Cwf4WFKd.js";import"./useDescription-BbVhVBC-.js";import"./VisuallyHidden-oG0E9KZu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CHpyHM5p.js";import"./createLucideIcon-uDhXojJY.js";import"./chevron-right-CUBELQSa.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Heading-Clo58xYm.js";import"./FieldError-C2Sc9U8m.js";import"./Text-CSs2JSPr.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
