import{$ as c,a as m,r as l,j as d}from"./iframe-Zc8QEBEs.js";import{C as n}from"./Calendar-C6Q2v0vu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBeougwS.js";import"./Button-CVF2QLQE.js";import"./utils-B5Ft6r77.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwlmQhVF.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./RSPContexts-D6ksqvWo.js";import"./Text-D3gJufSD.js";import"./useDateFormatter-UaoiFeh2.js";import"./useControlledState--JkDKSQL.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DDV3umF5.js";import"./useEvent-sXQWxw0f.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bmj6vDCw.js";import"./VisuallyHidden-DAd_ytwS.js";import"./clsx-Ciqy0D92.js";import"./Button-Dkxo3GyP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./createLucideIcon-BfbY4clK.js";import"./chevron-left-BW7UsIMq.js";import"./chevron-right-VX4MdaZT.js";import"./Heading-C0aUvMQS.js";import"./FieldError-RKqcL0cn.js";import"./Text-DJvoMdLY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
