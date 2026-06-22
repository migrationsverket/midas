import{$ as c,a as m,r as l,j as d}from"./iframe-Cb8Pppl7.js";import{C as n}from"./Calendar-Do0yYms3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BzZA8HKT.js";import"./Button-C8pMS1J_.js";import"./utils-Dj888C4V.js";import"./clsx-B-dksMZM.js";import"./Hidden-COGS7kep.js";import"./useFocusRing-hqoRcLtB.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./RSPContexts-DHg3Hsl6.js";import"./Text-D2Ko1ZUZ.js";import"./useDateFormatter-ZnAO9Yun.js";import"./useControlledState-ixH4fEDK.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bl4cNlYs.js";import"./useEvent-BCOghSZ0.js";import"./getScrollParent-Dcxt-3Ql.js";import"./scrollIntoView-Dz6AtUUb.js";import"./useDescription-Bk-WLmUt.js";import"./VisuallyHidden-DtKq5Gdo.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-XjUfXaDS.js";import"./createLucideIcon-D7UMDINh.js";import"./chevron-right-BlW_r8CO.js";import"./Button-D4LxrXr0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Heading-Ds7jCsCM.js";import"./FieldError-D0-fOVgu.js";import"./Text-C5__ZA60.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
