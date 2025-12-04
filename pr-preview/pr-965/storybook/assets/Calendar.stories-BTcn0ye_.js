import{$ as p,a as m,r as l,j as d}from"./iframe-BiGwQC7B.js";import{C as n}from"./Calendar-mRDAh0ho.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C5cZGdWM.js";import"./Button-wh89retW.js";import"./utils-C30Tz2FV.js";import"./clsx-B-dksMZM.js";import"./Hidden-FKjmD1jf.js";import"./useFocusRing-Yc3HhkHH.js";import"./index-tDrwXmSr.js";import"./index-CukiPHwP.js";import"./useLabels-B8OQIyOs.js";import"./useButton-DM0HTRcL.js";import"./RSPContexts-D_ivU-ZX.js";import"./Text-CGAgsi4Y.js";import"./useDateFormatter-CX36Q-ty.js";import"./useControlledState-BsPOPDnb.js";import"./useLocalizedStringFormatter-DWUwKKLO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BjQla9Jt.js";import"./useEvent-BGxB7qrz.js";import"./getScrollParent-BCvUZjbw.js";import"./scrollIntoView-DztyhQpp.js";import"./useDescription-D2kvnLh0.js";import"./VisuallyHidden-BsPxQLTF.js";import"./clsx-Ciqy0D92.js";import"./Button-CIRUUK5p.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dfxgqjph.js";import"./createLucideIcon-DBZ-Oss7.js";import"./chevron-right-CADp23lh.js";import"./Heading-BrwkFCbz.js";import"./FieldError-BdtM7o8g.js";import"./Text-aG3lDf3K.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
