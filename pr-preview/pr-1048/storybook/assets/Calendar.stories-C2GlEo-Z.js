import{$ as m,a as c,r as l,j as d}from"./iframe-ClhcDk6-.js";import{C as n}from"./Calendar-Cm_Vdn50.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BwbTqNI-.js";import"./Button-BSlJ97mj.js";import"./utils-DkVwfCPY.js";import"./useObjectRef-LpWD1ACK.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4bEnCsb.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./RSPContexts-BA8Udrsv.js";import"./Text-CCnFhlAG.js";import"./useDateFormatter-DsKmDmGm.js";import"./useControlledState-DRXmCCw_.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTU5idt4.js";import"./useEvent-C5dcsaza.js";import"./getScrollParent-FapgZLQg.js";import"./scrollIntoView-D07VY2Nc.js";import"./useDescription-By0r32b_.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./clsx-Ciqy0D92.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./createLucideIcon-DOkxF0Fr.js";import"./chevron-left-BUZCjnEP.js";import"./chevron-right-565ysewU.js";import"./Heading-DUgnXrAX.js";import"./FieldError-tXlATWOG.js";import"./Text-EzA_ilFd.js";const V={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>c(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,X as __namedExportsOrder,V as default};
