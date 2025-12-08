import{$ as p,a as m,r as l,j as d}from"./iframe-BNcdEUXj.js";import{C as n}from"./Calendar-BZkiyokO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-EDoJ5jP3.js";import"./Button-CaKLSY2s.js";import"./utils-Bxcv5MPT.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0zthcPy.js";import"./useFocusRing-C6YM28qN.js";import"./index-TMTY01Ep.js";import"./index-DSdXJGSi.js";import"./useLabels-Cq9B0I-L.js";import"./useButton-DEu1-L8J.js";import"./RSPContexts-Bi-J2mqx.js";import"./Text-B53mvpty.js";import"./useDateFormatter-BZ44fpXy.js";import"./useControlledState-DGlddZrL.js";import"./useLocalizedStringFormatter-QBa3_aSW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BRDRseMJ.js";import"./useEvent-SGz4Axl2.js";import"./getScrollParent-BR4s5BG-.js";import"./scrollIntoView-BYkZm8rI.js";import"./useDescription-BasjIu_5.js";import"./VisuallyHidden-C4uEYBAI.js";import"./clsx-Ciqy0D92.js";import"./Button-BL-fsXV7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfXz0OFm.js";import"./createLucideIcon-E9DumC9p.js";import"./chevron-right-Bf7JvjV8.js";import"./Heading-CVL2vkZG.js";import"./FieldError-BtZ0TnQj.js";import"./Text-DR0_UwJ4.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
