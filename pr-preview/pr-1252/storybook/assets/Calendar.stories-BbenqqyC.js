import{$ as c,a as m,r as l,j as d}from"./iframe-DmMjYjLV.js";import{C as n}from"./Calendar-BSqdlTdn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bvb6WPz-.js";import"./Button-BoGHaXxS.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./Hidden-C30O7ZZj.js";import"./useFocusRing-DNsXJifB.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./RSPContexts-CYlpwwtX.js";import"./Text-TBh7QsjQ.js";import"./useDateFormatter-DPA5OMfv.js";import"./useControlledState-jKmX6mW8.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8Fq709L1.js";import"./useEvent-be-eSwO4.js";import"./getScrollParent-iMMNoEOU.js";import"./scrollIntoView-BJKhh-O-.js";import"./useDescription-2aTt99IB.js";import"./VisuallyHidden-Bt6CiHI_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BBl3WScL.js";import"./createLucideIcon-mwlEDpcM.js";import"./chevron-right-CeIU5YI-.js";import"./Button-Pdwae4O6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Heading-CQ85-u0X.js";import"./FieldError-Dhwy9R14.js";import"./Text-D1BlasEz.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
