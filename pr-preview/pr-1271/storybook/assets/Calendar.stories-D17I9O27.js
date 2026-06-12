import{$ as c,a as m,r as l,j as d}from"./iframe-CZr0KooT.js";import{C as n}from"./Calendar-Bwo-6Gbo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyUmRx_N.js";import"./Button-BW2eFo1r.js";import"./utils-C5atDzqm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSnmYJrK.js";import"./useFocusRing-B8L-HrJZ.js";import"./index-By5QsIbW.js";import"./index-BLMOfdQA.js";import"./useLabel-BC4w3s3i.js";import"./useLabels-DBo1sJWI.js";import"./useButton-DL-yMXOz.js";import"./RSPContexts-BdxpiS-s.js";import"./Text-DasSw5Lo.js";import"./useDateFormatter-Clhzh1jq.js";import"./useControlledState-BYpa5spl.js";import"./useLocalizedStringFormatter-BJKNLBfJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CUALXv-B.js";import"./useEvent-D8s-tVaX.js";import"./getScrollParent-zZf70wh8.js";import"./scrollIntoView-CIALb2MR.js";import"./useDescription-Q_xHtQSY.js";import"./VisuallyHidden-f7pY2arW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-49UZn3eq.js";import"./createLucideIcon-DctSE2KV.js";import"./chevron-right-B_qwSVNK.js";import"./Button-Cg4eDy57.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BF6CSovG.js";import"./Heading-D0aM9vsP.js";import"./FieldError-CZucTPlY.js";import"./Text-BIiEvqpP.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
