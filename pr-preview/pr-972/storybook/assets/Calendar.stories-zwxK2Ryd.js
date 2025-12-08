import{$ as p,a as m,r as l,j as d}from"./iframe-h7DJPtOw.js";import{C as n}from"./Calendar-BaXJGeB6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-e5b0TcqT.js";import"./Button-Bz7LmfPv.js";import"./utils-B7-Bl9CW.js";import"./clsx-B-dksMZM.js";import"./Hidden-PJsUPrnx.js";import"./useFocusRing-C0B_q-wz.js";import"./index-gfjDpAp0.js";import"./index-B7hCCELA.js";import"./useLabels-CUHQrXEe.js";import"./useButton-D0LQ7Q37.js";import"./RSPContexts-CHFDj9zC.js";import"./Text-zGp9it5Y.js";import"./useDateFormatter-Cmk-Npvn.js";import"./useControlledState-CHLpwHvy.js";import"./useLocalizedStringFormatter-BcxKr6tQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsjQv1tz.js";import"./useEvent-F0VW7Ro7.js";import"./getScrollParent-DwNXqpWq.js";import"./scrollIntoView-CTHtuwhy.js";import"./useDescription-CjXQS0Cs.js";import"./VisuallyHidden-CWdOAX5N.js";import"./clsx-Ciqy0D92.js";import"./Button-CJ449eRf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUL5z0zQ.js";import"./createLucideIcon-CfnHEixt.js";import"./chevron-right-DDIZou_0.js";import"./Heading-3fa6_PGE.js";import"./FieldError-DSs28XHB.js";import"./Text-pnui6lio.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
