import{$ as c,a as m,r as l,j as d}from"./iframe-Bu5WN3Ef.js";import{C as n}from"./Calendar-CUvp1uqi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CkGaRiHw.js";import"./Button-CHgLdR4q.js";import"./utils-BiJWA_3V.js";import"./clsx-B-dksMZM.js";import"./Hidden-D12ThQaa.js";import"./useFocusRing-MCCMWjEG.js";import"./index-DaK77TxT.js";import"./index-pKua8EdO.js";import"./useLabels-B6cgoF5h.js";import"./useButton-CWrQWViA.js";import"./RSPContexts-DaEwdkBS.js";import"./Text-D6NDkbQ-.js";import"./useDateFormatter-D2xnbOEf.js";import"./useControlledState-1KPKbDQX.js";import"./useLocalizedStringFormatter-XgHPCMNy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BiGm_wuD.js";import"./useEvent-xlEcSicO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DwXInZjk.js";import"./VisuallyHidden-B0tGfuXD.js";import"./clsx-Ciqy0D92.js";import"./Button-CsD82h12.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DyFvLZVg.js";import"./createLucideIcon-CT9OvTIw.js";import"./chevron-left-DDG0-cvx.js";import"./chevron-right-BGVwmY4s.js";import"./Heading-CP5wYQUY.js";import"./FieldError-DLBMclUE.js";import"./Text-CSy2wCTo.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
