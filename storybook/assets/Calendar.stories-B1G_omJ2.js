import{$ as c,a as m,r as l,j as d}from"./iframe-qA047as2.js";import{C as n}from"./Calendar-BIyQq1Yx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-I7OJyivn.js";import"./Button-CDa9hyQV.js";import"./utils-CnePkaRa.js";import"./clsx-B-dksMZM.js";import"./Hidden-74NDefsp.js";import"./useFocusRing-No8xSroW.js";import"./index-BDL1KNLx.js";import"./index-DVFaELLp.js";import"./useLabels-BED0MCXy.js";import"./useButton-ZFa7mm27.js";import"./RSPContexts-DtyC-LdE.js";import"./Text-DZAVuivT.js";import"./useDateFormatter-C4exDlB0.js";import"./useControlledState-BqDoX1oC.js";import"./useLocalizedStringFormatter-4TG4W5do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-jy8bY0cv.js";import"./useEvent-DpQSoI-M.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-3SukAPA1.js";import"./VisuallyHidden-BNz_8c2V.js";import"./clsx-Ciqy0D92.js";import"./Button-IkqPRuS8.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BEiZ3BMs.js";import"./createLucideIcon-Bdodb09A.js";import"./chevron-left-C4VSlPJ1.js";import"./chevron-right-CINIzU6L.js";import"./Heading-860Teim3.js";import"./FieldError-aeuP4CDb.js";import"./Text-CzZwSmIU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
