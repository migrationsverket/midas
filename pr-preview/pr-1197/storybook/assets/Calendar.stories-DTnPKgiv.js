import{$ as c,a as m,r as l,j as d}from"./iframe-XIh9uYhW.js";import{C as n}from"./Calendar-CO_lrPkZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bu4bl_C9.js";import"./Button-BsucxUz-.js";import"./utils-QqHpIW-4.js";import"./clsx-B-dksMZM.js";import"./Hidden-l3oUe_Z9.js";import"./useFocusRing-BdFa1UIk.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./RSPContexts-Bn8Ylugu.js";import"./Text-DrkaIHH8.js";import"./useDateFormatter-CggiQtGA.js";import"./useControlledState-CqcNfIKv.js";import"./useLocalizedStringFormatter-C8j3kjHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-MxP5rWbX.js";import"./useEvent-BJnJ7qkn.js";import"./getScrollParent-COGKGPLi.js";import"./scrollIntoView-CUZdJYQn.js";import"./useDescription-DhJgGo4l.js";import"./VisuallyHidden-C1E6EF0U.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CUz-ygM0.js";import"./createLucideIcon-C-gCmxMp.js";import"./chevron-right-DkcALsSf.js";import"./Button-D1gmeqQE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./Heading-s6qNOUAW.js";import"./FieldError-CImeX3LJ.js";import"./Text-FP4KMc3f.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
