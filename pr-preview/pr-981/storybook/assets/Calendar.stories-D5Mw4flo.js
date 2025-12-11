import{$ as p,a as m,r as l,j as d}from"./iframe-CmunamRf.js";import{C as n}from"./Calendar-BWXQ2mjA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-COBqsHMu.js";import"./Button-I_qPWlHX.js";import"./utils-Do45Qf3w.js";import"./clsx-B-dksMZM.js";import"./Hidden-UzlcYpta.js";import"./useFocusRing-DFmjP9RI.js";import"./index-BzS_2Nae.js";import"./index-CuMnXGnl.js";import"./useLabels-TxZzTxtJ.js";import"./useButton-DK3uhVHY.js";import"./RSPContexts-BHCYibY1.js";import"./Text-7Mv1aRO9.js";import"./useDateFormatter-lMgZjCBx.js";import"./useControlledState-CMrkhqrU.js";import"./useLocalizedStringFormatter-BdmLjVnV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CW8XNkU3.js";import"./useEvent-BFMxJZE1.js";import"./getScrollParent-CUywN_ok.js";import"./scrollIntoView-BgicmmuX.js";import"./useDescription-hVP8LGT1.js";import"./VisuallyHidden-Cp_LZnsq.js";import"./clsx-Ciqy0D92.js";import"./Button-BDNFHLWn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B-CkpdIL.js";import"./createLucideIcon--1kAEzMd.js";import"./chevron-right-o_JtX3hM.js";import"./Heading-DRcWHY0O.js";import"./FieldError-DG3EzHGA.js";import"./Text-DoOol8PB.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
