import{$ as c,a as m,r as l,j as d}from"./iframe-DRiJSY7M.js";import{C as n}from"./Calendar-CfniweSk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CLNApA2y.js";import"./Button-BUgilED8.js";import"./utils-BJDSFOW5.js";import"./clsx-B-dksMZM.js";import"./Hidden-qasJP2Cu.js";import"./useFocusRing-B6J0ruRj.js";import"./index-9zNSRqxn.js";import"./index-BQ1pxiFP.js";import"./useLabels-mUQxQX-2.js";import"./useButton-0YT_Gb4U.js";import"./RSPContexts-BcxExNnK.js";import"./Text-X4vUYIPT.js";import"./useDateFormatter-DH-Qs7U3.js";import"./useControlledState-BP1yiS2k.js";import"./useLocalizedStringFormatter-BbfEnz-t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DLhyns2e.js";import"./useEvent-5R_vpykM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bok8djC6.js";import"./VisuallyHidden-K6FaPgYL.js";import"./clsx-Ciqy0D92.js";import"./Button-G02mwiay.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CxYPA09E.js";import"./createLucideIcon-Dzsyexy7.js";import"./chevron-left-DUpO3U-A.js";import"./chevron-right-D8mu9fCO.js";import"./Heading-BO-m2inF.js";import"./FieldError-BjsiVnPf.js";import"./Text-B3YlrlLH.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
