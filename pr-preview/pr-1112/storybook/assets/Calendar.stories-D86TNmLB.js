import{$ as c,a as m,r as l,j as d}from"./iframe-Bj8DUbD9.js";import{C as n}from"./Calendar-CW3W5mdc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DlEA7Wbh.js";import"./Button-BF7jf_Ur.js";import"./utils-ZO4yOhXK.js";import"./clsx-B-dksMZM.js";import"./Hidden-D5KISXrR.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./RSPContexts-DDd4UCxF.js";import"./Text-sbFHWdQM.js";import"./useDateFormatter-CE6gvR42.js";import"./useControlledState-o6yOdn5X.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Be_dOkEG.js";import"./useEvent-CXLssXy0.js";import"./getScrollParent-DD_GG-02.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./useDescription-BprtaOQi.js";import"./VisuallyHidden-CHpwvWxj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BkGKnQnR.js";import"./createLucideIcon-D8pz04BM.js";import"./chevron-right-y0G-ew3S.js";import"./Button-Cmlv3L41.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./Heading-Dh5hcPFl.js";import"./FieldError-D0YXHKSR.js";import"./Text-BT7-HsIw.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
