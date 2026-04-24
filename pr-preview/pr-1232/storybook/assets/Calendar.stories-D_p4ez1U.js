import{$ as c,a as m,r as l,j as d}from"./iframe-Bsq2Gecy.js";import{C as n}from"./Calendar-plKVjiFW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-XvxhcIIX.js";import"./Button-Dgb6FvaO.js";import"./utils-BEAPqOk0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUmnbfmf.js";import"./useFocusRing-Duh6XNKg.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./RSPContexts-B54NxITZ.js";import"./Text-BbliZ5q4.js";import"./useDateFormatter-DDVWCvkF.js";import"./useControlledState-BhYy7T42.js";import"./useLocalizedStringFormatter-CvMlUMFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLZXSrnY.js";import"./useEvent-B8d2Ooe_.js";import"./getScrollParent--THwKu2l.js";import"./scrollIntoView-BBGrgUMp.js";import"./useDescription-BzFZmdMU.js";import"./VisuallyHidden-Dj8T0Unv.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CaQ-FWaP.js";import"./createLucideIcon-CYPfeOBH.js";import"./chevron-right-qekNxen8.js";import"./Button-2sJltsSG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./Heading-Cig3SoG6.js";import"./FieldError-C-dVYh2X.js";import"./Text-CN4UKteu.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
