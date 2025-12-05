import{$ as p,a as m,r as l,j as d}from"./iframe-DuaKi7xD.js";import{C as n}from"./Calendar-BKLLlQoK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B-KN_1EK.js";import"./Button-C2VTZsyg.js";import"./utils-BCB57b2F.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKSH1Rie.js";import"./useFocusRing-CQC8CYmg.js";import"./index-D03P8HqJ.js";import"./index-Ch7u2l1l.js";import"./useLabels-CpVDs9CP.js";import"./useButton-DBitaRdE.js";import"./RSPContexts-Dp-lO0G2.js";import"./Text-CQdB-g-f.js";import"./useDateFormatter-DL2KMxz7.js";import"./useControlledState-DAMN56Mb.js";import"./useLocalizedStringFormatter-j_Zj2lr5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-9yihMPqB.js";import"./useEvent-BT4STeC0.js";import"./getScrollParent-Bl2sq5hu.js";import"./scrollIntoView-CssqY3lX.js";import"./useDescription-h7oYQVdW.js";import"./VisuallyHidden-DOdw6P18.js";import"./clsx-Ciqy0D92.js";import"./Button-B9O2nQjc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH44G-u9.js";import"./createLucideIcon-BniL5whM.js";import"./chevron-right-Cp7tYynT.js";import"./Heading-uceAp6q4.js";import"./FieldError-H771sQdp.js";import"./Text-BSDD80o3.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
