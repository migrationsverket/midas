import{$ as c,a as m,r as l,j as d}from"./iframe-D-ypYuwn.js";import{C as n}from"./Calendar-C7Hzsl7-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B6j2di9M.js";import"./Button-89RGHRHn.js";import"./utils-DQGhytbb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dz6be0Sh.js";import"./useFocusRing-ClaQwJdN.js";import"./index-DHSfPRsN.js";import"./index-DBHvdizX.js";import"./useLabels-kssSLeVE.js";import"./useButton-DhjrBguy.js";import"./RSPContexts-CmOqvCB5.js";import"./Text-BuEv763R.js";import"./useDateFormatter-CzizJLe8.js";import"./useControlledState-C653rY7f.js";import"./useLocalizedStringFormatter-qVUCbyvG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BqiFR5Q4.js";import"./useEvent-D3gR2SWY.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BE4gCwvi.js";import"./VisuallyHidden-D4W03Dkt.js";import"./clsx-Ciqy0D92.js";import"./Button-U4O3N2IF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-rNpKh-Hw.js";import"./createLucideIcon-C4YzC_QF.js";import"./chevron-left-D0fZV5V_.js";import"./chevron-right-CJdpfSJi.js";import"./Heading-BkJ_tAnG.js";import"./FieldError-C0J98PPl.js";import"./Text-DJIv6PG1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
