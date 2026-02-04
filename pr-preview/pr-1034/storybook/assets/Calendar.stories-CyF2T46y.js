import{$ as c,a as m,r as l,j as d}from"./iframe-CtlzUTic.js";import{C as n}from"./Calendar-CZdGq38b.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjvreIP_.js";import"./Button-DH5UoxLr.js";import"./utils-Be0LSfA6.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGVzl5uY.js";import"./useFocusRing-DJMLYrjC.js";import"./index-E52zMlCa.js";import"./index-5SHCtBg6.js";import"./useLabels-BgCIJPu_.js";import"./useButton-DSvEAlkb.js";import"./RSPContexts-CQZGhvKo.js";import"./Text-BW699DP7.js";import"./useDateFormatter-DFBWmMON.js";import"./useControlledState-CfbZjGvX.js";import"./useLocalizedStringFormatter-C0z3Bv7k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CkPJ9kZ3.js";import"./useEvent-7Vlz65b-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DnlIBvPV.js";import"./VisuallyHidden-CQrctRJU.js";import"./clsx-Ciqy0D92.js";import"./Button-Ki9bkVZp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-eyJdwfwF.js";import"./createLucideIcon-DLRJv2UH.js";import"./chevron-left-BGx_Wnwo.js";import"./chevron-right-wZ4BdPWt.js";import"./Heading-wObVOJxK.js";import"./FieldError-B85O3F2_.js";import"./Text-DzgVGaDU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
