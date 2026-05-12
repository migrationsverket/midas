import{$ as c,a as m,r as l,j as d}from"./iframe-QXqfLk9Z.js";import{C as n}from"./Calendar-DHxzKsbh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C1w3m9ZM.js";import"./Button-66KmAdCV.js";import"./utils-Dggx2A6b.js";import"./clsx-B-dksMZM.js";import"./Hidden-BI9BX3f7.js";import"./useFocusRing-BiM2zrLV.js";import"./index-C07zKFPd.js";import"./index-C1BcpjW_.js";import"./useLabel-BM1McJfg.js";import"./useLabels-Chfv84nV.js";import"./useButton-CGi5uJBG.js";import"./RSPContexts-DJB4f0eu.js";import"./Text-By_cFIOS.js";import"./useDateFormatter-BKHAtjW2.js";import"./useControlledState-Bn462BK_.js";import"./useLocalizedStringFormatter-BHMdmhnJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CvzPZ2Oi.js";import"./useEvent-BHqgde0v.js";import"./getScrollParent-MFR6QYRG.js";import"./scrollIntoView-CjMfEqzR.js";import"./useDescription-DGDiHLtH.js";import"./VisuallyHidden-CPFiO8Sa.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-YyBMb9dI.js";import"./createLucideIcon-DWZDC5UL.js";import"./chevron-right-RMAmHnJe.js";import"./Button-D4lkIHuh.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CnCt5dkn.js";import"./Heading-Dt6lwUoq.js";import"./FieldError-CFf5Jtc5.js";import"./Text-CFRxdyIy.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
