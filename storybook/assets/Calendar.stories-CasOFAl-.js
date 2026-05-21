import{$ as c,a as m,r as l,j as d}from"./iframe-BXzs3x0C.js";import{C as n}from"./Calendar-DGZ67y3a.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-U8aol_kS.js";import"./Button-_6aq1n6B.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./Hidden-HpZioBNJ.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./RSPContexts-CQe6j-NN.js";import"./Text-a0ukmHPT.js";import"./useDateFormatter-DUo4iPEU.js";import"./useControlledState-DXnq9ftx.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CyCKLu2a.js";import"./useEvent-Bna1V34X.js";import"./getScrollParent-CeZ4u_Xo.js";import"./scrollIntoView-DmyPyYUI.js";import"./useDescription-BDCx7FV_.js";import"./VisuallyHidden-C6-1r25j.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-NK4v416d.js";import"./createLucideIcon-DAXq1X88.js";import"./chevron-right-DBweU87W.js";import"./Button-Bvp28ihJ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Heading-CccHM0rx.js";import"./FieldError-ZWe9d950.js";import"./Text-DYh5wK03.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
