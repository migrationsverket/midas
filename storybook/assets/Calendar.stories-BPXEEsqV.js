import{$ as c,a as m,r as l,j as d}from"./iframe-DWEKRq51.js";import{C as n}from"./Calendar-CkDP4nq8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPizHnWL.js";import"./Button-Bw7IRosA.js";import"./utils-CvB-FF5L.js";import"./clsx-B-dksMZM.js";import"./Hidden-6-qbYCow.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./RSPContexts-Cwb07yZR.js";import"./Text-DNCNcmFD.js";import"./useDateFormatter-CgqxhijO.js";import"./useControlledState-BpWescyC.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect--AV7M5V_.js";import"./useEvent-CTaznQxk.js";import"./getScrollParent-C8jbhUL1.js";import"./scrollIntoView-CPfbYeEn.js";import"./useDescription-FiAMJAPm.js";import"./VisuallyHidden-D7nX5YNu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CzbcLUPT.js";import"./createLucideIcon-BuZoCqNM.js";import"./chevron-right-DvzPBV9C.js";import"./Button-CpAjWvzP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./Heading-zr1kb0sx.js";import"./FieldError-MXzqgYJW.js";import"./Text-BNtmLJ5Q.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
