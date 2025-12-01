import{$ as p,a as m,r as l,j as d}from"./iframe-rItT_jfY.js";import{C as n}from"./Calendar-BhGM4qPH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-NOw3V4l_.js";import"./Button-B5QUqElW.js";import"./utils-CPF4-yP8.js";import"./clsx-B-dksMZM.js";import"./Hidden-n1HYXibJ.js";import"./useFocusRing-DGFc7HbQ.js";import"./index-BnPbWBMv.js";import"./index-D8DgLnGQ.js";import"./useLabels-BtpKNtTB.js";import"./useButton-BqLzl4IJ.js";import"./RSPContexts-DzXYmQki.js";import"./Text-DDMiWQFi.js";import"./useDateFormatter-DGQFrvh8.js";import"./useControlledState-Bzf4gGGh.js";import"./useLocalizedStringFormatter-CTRxJDJV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-t7qqhOel.js";import"./useEvent-Dh1rWvm4.js";import"./getScrollParent-BSPxFyqb.js";import"./scrollIntoView-f5b4LpVi.js";import"./useDescription-CcHx15SB.js";import"./VisuallyHidden-BJd1ReHn.js";import"./clsx-Ciqy0D92.js";import"./Button-DrR1Xrnd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-MQKdyit4.js";import"./createLucideIcon-B9nFww81.js";import"./chevron-right-D-q6jC5v.js";import"./Heading-B-doG5oq.js";import"./FieldError-Cvsb7is6.js";import"./Text-FNlrqDfC.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
