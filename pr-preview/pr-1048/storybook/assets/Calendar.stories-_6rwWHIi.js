import{$ as c,a as m,r as l,j as d}from"./iframe-2x8aApk-.js";import{C as n}from"./Calendar-P4RR2IAe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMSjeCuQ.js";import"./Button-BEnUWui9.js";import"./utils-DVWHc22k.js";import"./clsx-B-dksMZM.js";import"./Hidden-T6GEIuO8.js";import"./useFocusRing-D1LuvRFA.js";import"./index-BnRZASBM.js";import"./index-EU_EHTku.js";import"./useLabels-DUzYQyy8.js";import"./useButton-N1FUyUpJ.js";import"./RSPContexts-DzOvT6u7.js";import"./Text-GWj5McON.js";import"./useDateFormatter-DYTm6S3n.js";import"./useControlledState-CaZtGL-H.js";import"./useLocalizedStringFormatter-B7eTh4qi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BCnLLfFa.js";import"./useEvent-BZht9i95.js";import"./getScrollParent-C1eon5Rc.js";import"./scrollIntoView-B1ez5sy3.js";import"./useDescription-CX4-cmgs.js";import"./VisuallyHidden-B5MaFoQn.js";import"./clsx-Ciqy0D92.js";import"./Button-BZEsodJe.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-EKnKibO9.js";import"./createLucideIcon-D_YgEBTV.js";import"./chevron-left-vrSUi4tT.js";import"./chevron-right-COQuyFRW.js";import"./Heading-DeTn1u7-.js";import"./FieldError-CN7fikOS.js";import"./Text-CjH8oWQJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
