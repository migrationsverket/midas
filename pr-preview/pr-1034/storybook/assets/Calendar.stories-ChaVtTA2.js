import{$ as c,a as m,r as l,j as d}from"./iframe-DWeimgIa.js";import{C as n}from"./Calendar-CeUSdGC2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DgT5KfvC.js";import"./Button-BvEh5rbk.js";import"./utils-DxMtLVOR.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKOEiJ1S.js";import"./useFocusRing-DKnPpF37.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./RSPContexts-CNnbePcK.js";import"./Text-DbBhNbbj.js";import"./useDateFormatter-E4ulOyQB.js";import"./useControlledState-HboVp0gd.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1PhQsZ3.js";import"./useEvent-C4MlArKl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bh7NSV4H.js";import"./VisuallyHidden-DRBz7uUV.js";import"./clsx-Ciqy0D92.js";import"./Button-77YGZ7IT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTWeQANG.js";import"./createLucideIcon-BHfYKO9v.js";import"./chevron-left-dKPeGUKx.js";import"./chevron-right-BixdYjyR.js";import"./Heading-DnNXfcg_.js";import"./FieldError-D4QojQoq.js";import"./Text-CfprFU7e.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
