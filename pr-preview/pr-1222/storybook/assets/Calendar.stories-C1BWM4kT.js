import{$ as c,a as m,r as l,j as d}from"./iframe-DgC-Ldrx.js";import{C as n}from"./Calendar-BkfdwQTb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-yp9V5Bhv.js";import"./Button-eOYMOt-9.js";import"./utils-BUpv-0tc.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6xJ_9IQ.js";import"./useFocusRing-dqGFuQw5.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./RSPContexts-CrNZT_wF.js";import"./Text-DBf5U8p7.js";import"./useDateFormatter-CfP_RaZ6.js";import"./useControlledState-9EeHrS1X.js";import"./useLocalizedStringFormatter-Cy9GHfDn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cs9zAJAO.js";import"./useEvent-CzHW2e8Z.js";import"./getScrollParent-DXMGajJM.js";import"./scrollIntoView-DEmmCe3n.js";import"./useDescription-DelY62ZZ.js";import"./VisuallyHidden-CY4Z8bfN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dkb6dq2e.js";import"./createLucideIcon-Dct_wYt8.js";import"./chevron-right-B8guIvuN.js";import"./Button-C6c-eprm.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./Heading-CTr8HC6y.js";import"./FieldError-DZZcZZwp.js";import"./Text-FIGzZLpV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
