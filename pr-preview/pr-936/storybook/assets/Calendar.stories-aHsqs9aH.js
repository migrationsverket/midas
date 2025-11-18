import{$ as p,a as m,r as l,j as d}from"./iframe-DgxKfNbk.js";import{C as n}from"./Calendar-B-7uKzQc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-A3I7TlRj.js";import"./Button-sp0K8pyj.js";import"./utils-BGROS65s.js";import"./clsx-B-dksMZM.js";import"./Hidden-CS-gbQoN.js";import"./useFocusRing-DnzQSyQo.js";import"./index-DUg-lwjY.js";import"./index-CQL2Unmc.js";import"./useLabels-DJqk111_.js";import"./useButton-CRwqM10K.js";import"./RSPContexts-q1M_Avd7.js";import"./Text-DSs1Iflc.js";import"./useDateFormatter-BD-vUrt6.js";import"./useControlledState-BTur9OCD.js";import"./useLocalizedStringFormatter-nOCS1ZGV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bl-CqiXx.js";import"./useEvent-BwDP64Ht.js";import"./getScrollParent--B9d3E0m.js";import"./scrollIntoView-Bwrqcvii.js";import"./useDescription-mFuPStZN.js";import"./VisuallyHidden-BCoLhgxB.js";import"./clsx-Ciqy0D92.js";import"./Button-aJbpSB1Q.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-gMUN6yHh.js";import"./chevron-right-CoUjohgJ.js";import"./Heading-BI04CBQB.js";import"./FieldError-D6hRhKtv.js";import"./Text-snGWGL4K.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
