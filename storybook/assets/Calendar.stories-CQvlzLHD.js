import{$ as c,a as m,r as l,j as d}from"./iframe-MBbdolFR.js";import{C as n}from"./Calendar-CkRg1tKV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DfB5eZt1.js";import"./Button-BeUFbs-K.js";import"./utils-Dg7ruvLQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqEHZ0Ur.js";import"./useFocusRing-Cblmo_dI.js";import"./index-DPSmS7Ww.js";import"./index-Cat6omEG.js";import"./useLabels-8moplH_Y.js";import"./useButton-Cdg81aej.js";import"./RSPContexts-DCBOH9RH.js";import"./Text-BAnCasif.js";import"./useDateFormatter-CTBUFZMi.js";import"./useControlledState-DA1YFynG.js";import"./useLocalizedStringFormatter-BVS7UHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-h0dAy_9y.js";import"./useEvent-C6xw0YBs.js";import"./getScrollParent-BDKRolOu.js";import"./scrollIntoView-D3VE82Y3.js";import"./useDescription-1itsOOAn.js";import"./VisuallyHidden-DTLx9iH1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dp00h5Se.js";import"./createLucideIcon-DbXfeuCy.js";import"./chevron-right-CFOfxN5v.js";import"./Button-hlqL-z4t.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0WmapNTJ.js";import"./Heading-DNbI0Dcb.js";import"./FieldError-WKF4owWT.js";import"./Text-CKOZXfI5.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
