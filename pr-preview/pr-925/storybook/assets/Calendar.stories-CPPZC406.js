import{$ as p,a as m,r as l,j as d}from"./iframe-C4nZhlHp.js";import{C as n}from"./Calendar-B1efkdAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dvd_Wg4B.js";import"./Button-BoerEFmi.js";import"./utils-BThtOLN3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGAgWOv2.js";import"./useFocusRing-CUt9jPRY.js";import"./index-CdzEK6sL.js";import"./index-Bcy_e8uM.js";import"./useLabels-DFzN42D5.js";import"./useButton-DpHHTz7A.js";import"./RSPContexts-WH4nMcxQ.js";import"./Text-BtqzfC97.js";import"./useDateFormatter-DiBoHNK1.js";import"./useControlledState-CJQYAY_g.js";import"./useLocalizedStringFormatter-6ucjq8Cp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-hCD_cZ1i.js";import"./useEvent-BdTEiYUL.js";import"./getScrollParent-CtN2yNgt.js";import"./scrollIntoView-DvFBFjjW.js";import"./useDescription-C8Gi_2UD.js";import"./VisuallyHidden-BNOgBQKx.js";import"./clsx-Ciqy0D92.js";import"./Button-Dfl_9rMf.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-Cca3XJOR.js";import"./chevron-right-BS3_4KMW.js";import"./Heading-yb9MM0bb.js";import"./FieldError-BIrWKztk.js";import"./Text-Bl0ISbQ7.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
