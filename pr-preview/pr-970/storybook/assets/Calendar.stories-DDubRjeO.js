import{$ as p,a as m,r as l,j as d}from"./iframe-Bja4lqPg.js";import{C as n}from"./Calendar-wDJbtzYe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DHWjEk8N.js";import"./Button-BuHlPB14.js";import"./utils-CfGU2F4C.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoHDrhun.js";import"./useFocusRing-nt4HuyWe.js";import"./index-ClGRDelY.js";import"./index-Cha5Qbb4.js";import"./useLabels-CH_BwytF.js";import"./useButton-BzfR_wja.js";import"./RSPContexts-B0c07tpm.js";import"./Text-DmatnyXE.js";import"./useDateFormatter-HUdSml4I.js";import"./useControlledState-BAOyWDV2.js";import"./useLocalizedStringFormatter-cCcv7JR5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CiUKCq46.js";import"./useEvent-o5EzRx1a.js";import"./getScrollParent-DOGvcR6n.js";import"./scrollIntoView-jVw5IWHo.js";import"./useDescription-B8wRK8nF.js";import"./VisuallyHidden-CY-bY3f_.js";import"./clsx-Ciqy0D92.js";import"./Button-DjNVoY-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFnTdSDM.js";import"./createLucideIcon-BrJy0_rm.js";import"./chevron-right-SrgXar72.js";import"./Heading-BZgtWiZ4.js";import"./FieldError--F33PEfY.js";import"./Text-DrvB4AMM.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
