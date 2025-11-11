import{$ as p,a as m,r as l,j as d}from"./iframe-k-zAH7Ef.js";import{C as n}from"./Calendar-BtOiRHyb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQwvYk8H.js";import"./Button-BdULP_1i.js";import"./utils-BSpJY3Um.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHgR79MS.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./RSPContexts-DGsEwDeK.js";import"./Text-BGMRpBYZ.js";import"./useDateFormatter-Q-uxfb8C.js";import"./useControlledState-CWQoOU6w.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B8qQeMHp.js";import"./useEvent-BG9GMXpu.js";import"./getScrollParent-a6tJLPyA.js";import"./scrollIntoView-MFUOiOkG.js";import"./useDescription-ScrL-_TA.js";import"./VisuallyHidden-DbtIx9ZK.js";import"./clsx-Ciqy0D92.js";import"./Button-DmW_TZqr.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-b2tMwHkv.js";import"./chevron-right-b08DX7XE.js";import"./Heading-BgVylgI-.js";import"./FieldError-CNbb8asv.js";import"./Text-BOoeMNrs.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
