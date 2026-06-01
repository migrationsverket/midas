import{$ as c,a as m,r as l,j as d}from"./iframe-CwW8sN4S.js";import{C as n}from"./Calendar-Dtk3M2ao.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DbQ8SeBj.js";import"./Button-C3AuE87p.js";import"./utils-B_M889tP.js";import"./clsx-B-dksMZM.js";import"./Hidden-CVoubVAI.js";import"./useFocusRing-cgdKMhcs.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./RSPContexts-szw5AFHr.js";import"./Text-BE9Sihnv.js";import"./useDateFormatter-CeqTxF_q.js";import"./useControlledState-CC34MHAe.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLNpbhTQ.js";import"./useEvent-CeuSem5l.js";import"./getScrollParent-DKE2Book.js";import"./scrollIntoView-DJ_jtxbK.js";import"./useDescription-UAInHKf4.js";import"./VisuallyHidden-BudlR0yM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dberi691.js";import"./createLucideIcon-DzXM4i8f.js";import"./chevron-right-DGZ6MnTc.js";import"./Button-BNJwH1Cm.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Heading-Bb8pQtsc.js";import"./FieldError-BlJWYskW.js";import"./Text-C5uja355.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
