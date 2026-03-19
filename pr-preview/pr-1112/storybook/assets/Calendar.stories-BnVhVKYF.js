import{$ as c,a as m,r as l,j as d}from"./iframe-DS0O0j7b.js";import{C as n}from"./Calendar-BTuSJCLu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ybnFaH2s.js";import"./Button-Dmgtf1bQ.js";import"./utils-C_Y1VJyB.js";import"./clsx-B-dksMZM.js";import"./Hidden-kaUfFbEZ.js";import"./useFocusRing-C0d3_IpO.js";import"./index-D3Tr-KQh.js";import"./index-oPvKfDWU.js";import"./useLabels-CDMzy8g3.js";import"./useButton-8RAVO9uW.js";import"./RSPContexts-xBE5IiKT.js";import"./Text-24RRIPeu.js";import"./useDateFormatter-DTg1GiKd.js";import"./useControlledState-YiR0L17D.js";import"./useLocalizedStringFormatter-DgIs-M2f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bx1r3pao.js";import"./useEvent-D-WGugyX.js";import"./getScrollParent-DZsWhqqY.js";import"./scrollIntoView-BMpUAOeO.js";import"./useDescription-BRpvpR9v.js";import"./VisuallyHidden-bAykpqel.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CnWsFiar.js";import"./createLucideIcon-BttQnoLZ.js";import"./chevron-right-DV54gLSD.js";import"./Button-DB7_h4Ph.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C9AMm5n0.js";import"./Heading-BEVhbzAA.js";import"./FieldError-obiFspMo.js";import"./Text-img0UXBQ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
