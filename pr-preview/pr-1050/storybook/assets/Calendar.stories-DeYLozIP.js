import{$ as c,a as m,r as l,j as d}from"./iframe-uFwHQTNd.js";import{C as n}from"./Calendar-B5w8vYXh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DXGX6jgV.js";import"./Button-DCnsWAw_.js";import"./utils-Cet0gmdV.js";import"./clsx-B-dksMZM.js";import"./Hidden-DBwebcBs.js";import"./useFocusRing-DWJqR67C.js";import"./index-Cx3Wd4xN.js";import"./index-BfuYg2Hk.js";import"./useLabels-CkeV1IcK.js";import"./useButton-DGskpFYY.js";import"./RSPContexts-C2ImaV6y.js";import"./Text-DdRPQvtu.js";import"./useDateFormatter-BCj99Q-3.js";import"./useControlledState-BAmouKKq.js";import"./useLocalizedStringFormatter-CkgKWy3S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DdaYlkO5.js";import"./useEvent-CsuJfCqG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BQIjqc-M.js";import"./VisuallyHidden-D1ozFAVq.js";import"./clsx-Ciqy0D92.js";import"./Button-LM3ov4QZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzDR0k3O.js";import"./createLucideIcon-Bh2gVQle.js";import"./chevron-left-C9xje9Qw.js";import"./chevron-right-Dg_tg0PV.js";import"./Heading-DYe25ALU.js";import"./FieldError-Dm-69Wx0.js";import"./Text-BPL1bQ16.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
