import{$ as c,a as m,r as l,j as d}from"./iframe-BpREUp_n.js";import{C as n}from"./Calendar-BX2LhozT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BxHuJ2HC.js";import"./Button-B1ymHcEs.js";import"./utils-5mnyh4pq.js";import"./clsx-B-dksMZM.js";import"./Hidden-C8ihGYRf.js";import"./useFocusRing-Di2Wci7-.js";import"./index-CHND_S8B.js";import"./index-DHEjYkx-.js";import"./useLabel-Wrhj3pEV.js";import"./useLabels-Bs18rTxZ.js";import"./useButton-BeSKsTxR.js";import"./RSPContexts-sGTMeP-x.js";import"./Text-BIdbVrWu.js";import"./useDateFormatter-BeP1EsMV.js";import"./useControlledState-DKT2uJC_.js";import"./useLocalizedStringFormatter-DRmhaeY7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bftdioqq.js";import"./useEvent-CddQ6mLp.js";import"./getScrollParent-DtMjsZPo.js";import"./scrollIntoView-BUWi5Scx.js";import"./useDescription-CzljX0gb.js";import"./VisuallyHidden-BSeLhscq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dul1V78x.js";import"./createLucideIcon-Bp1NIHzV.js";import"./chevron-right-Dn_f9179.js";import"./Button-B5TSA_w8.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BRvvA8cH.js";import"./Heading-D5qh5wa2.js";import"./FieldError-CiitnuL9.js";import"./Text-C8nfs_6S.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
