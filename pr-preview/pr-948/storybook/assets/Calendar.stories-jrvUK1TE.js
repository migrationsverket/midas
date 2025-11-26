import{$ as p,a as m,r as l,j as d}from"./iframe-Drq588aW.js";import{C as n}from"./Calendar-C5xoEeUv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CWEqY8r5.js";import"./Button-C7gy-2EJ.js";import"./utils-aeymvuYI.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dnbbd5N5.js";import"./useFocusRing-mHQN6z3x.js";import"./index-hBCxN88b.js";import"./index-NNPaNoGh.js";import"./useLabels-JiIilPDr.js";import"./useButton-C7taEski.js";import"./RSPContexts-Bw-iGnGu.js";import"./Text-CKbWo8TX.js";import"./useDateFormatter-By7S2MIM.js";import"./useControlledState-COayyxOg.js";import"./useLocalizedStringFormatter-CfbPsYEt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DC5XQpcJ.js";import"./useEvent-CC-XZYLs.js";import"./getScrollParent-D2tSCSSO.js";import"./scrollIntoView-Xka9BiDn.js";import"./useDescription-CP6I73UT.js";import"./VisuallyHidden-BkTTj5Jf.js";import"./clsx-Ciqy0D92.js";import"./Button-Bby9lJBH.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B0Gzr_5r.js";import"./createLucideIcon-BnM-Ijqi.js";import"./chevron-right-B2jPCX7u.js";import"./Heading-DD2--ACK.js";import"./FieldError-BSCwEXCJ.js";import"./Text-C6r5Lex8.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
