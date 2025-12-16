import{$ as p,a as m,r as l,j as d}from"./iframe-DfEAdNVs.js";import{C as n}from"./Calendar-BYKjIB2M.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DOtFvkGn.js";import"./Button-BdvjUnuo.js";import"./utils--wYGBqGD.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEs-n291.js";import"./useFocusRing-Bzp-C8p6.js";import"./index-CtqVMxj3.js";import"./index-SEkB6HYi.js";import"./useLabels-Cu5mk1YJ.js";import"./useButton-DrZxE4--.js";import"./RSPContexts-DhsCvUzP.js";import"./Text-DuPzytE6.js";import"./useDateFormatter-KIgCHtoc.js";import"./useControlledState-BAEcE39B.js";import"./useLocalizedStringFormatter-8MmEPB2N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-6gkusaAu.js";import"./useEvent-MCyBQRS6.js";import"./getScrollParent-560_08lX.js";import"./scrollIntoView-DuSKKvBp.js";import"./useDescription-DBgTN9Qp.js";import"./VisuallyHidden-alWOUvdL.js";import"./clsx-Ciqy0D92.js";import"./Button-He3J7woG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCX7Zdi0.js";import"./createLucideIcon-Caura_NC.js";import"./chevron-right-DRdWgB3K.js";import"./Heading-R00i0ykR.js";import"./FieldError-CAId1xXE.js";import"./Text-DpvNcKrC.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
