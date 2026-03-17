import{$ as c,a as m,r as l,j as d}from"./iframe-T-9iVXG3.js";import{C as n}from"./Calendar-vWkDAmJP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CcWxD9ST.js";import"./Button-C-dW1ric.js";import"./utils-B3genDNz.js";import"./clsx-B-dksMZM.js";import"./Hidden-gSpfVWl-.js";import"./useFocusRing-BDfuXA1K.js";import"./index-B-KcomW3.js";import"./index-DLcbmtBd.js";import"./useLabels-CRqI88gG.js";import"./useButton-D49MhIWL.js";import"./RSPContexts-BPLMbvFf.js";import"./Text-B_uJS0BB.js";import"./useDateFormatter-QkMFOKF1.js";import"./useControlledState-BoI1WaNw.js";import"./useLocalizedStringFormatter-xdS-2W0d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZYmQNNv.js";import"./useEvent-D56kyFzf.js";import"./getScrollParent-CRP0whSm.js";import"./scrollIntoView-iro7z2eq.js";import"./useDescription-DqYEfudQ.js";import"./VisuallyHidden-CO4c4_3Y.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CiBre0V5.js";import"./createLucideIcon-qLu_u4fs.js";import"./chevron-right-CGB6stj3.js";import"./Button-LHNpYI0v.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-WowMA0AY.js";import"./Heading-ChYvpQts.js";import"./FieldError-B3mWOyJN.js";import"./Text-DqB5EYwf.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
