import{$ as c,a as m,r as l,j as d}from"./iframe-C1MoIoFQ.js";import{C as n}from"./Calendar-Ct-WtynU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-RrdlYRQH.js";import"./Button-Bt2VcdxR.js";import"./utils-Dd9KjGc9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CQA8_prX.js";import"./useFocusRing-BDQMY-6N.js";import"./index-C81WqCTC.js";import"./index-CwePtk0Z.js";import"./useLabel-BXOmRBqN.js";import"./useLabels-ONT18L0d.js";import"./useButton-kMH8ZZTp.js";import"./RSPContexts-rTZVWH0H.js";import"./Text-BxVOdM76.js";import"./useDateFormatter-tfZEHhxA.js";import"./useControlledState-BDHCwT0f.js";import"./useLocalizedStringFormatter-DtXEU9jw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BYXZa2He.js";import"./useEvent-9VQOaFMz.js";import"./getScrollParent-MGDKI0Li.js";import"./scrollIntoView-CV3jjMt7.js";import"./useDescription-CWsbdymE.js";import"./VisuallyHidden-CrG6ZMtm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CPujnXKJ.js";import"./createLucideIcon-CpvMiuWS.js";import"./chevron-right-7NDFqurr.js";import"./Button-Bh1vA6XB.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DN-WkxQL.js";import"./Heading-B4Dxk79k.js";import"./FieldError-xLLnQN0i.js";import"./Text-BZ5m3zwb.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
