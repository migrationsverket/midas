import{$ as c,a as m,r as l,j as d}from"./iframe-CxuIO7a7.js";import{C as n}from"./Calendar-hoX77kTt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bu0d7sr0.js";import"./Button-DRAmhx2z.js";import"./utils-CXGq3B-b.js";import"./clsx-B-dksMZM.js";import"./Hidden-BA1jWOK0.js";import"./useFocusRing-B6J0mh3g.js";import"./index-DUo9Y50I.js";import"./index-gnxrYTyY.js";import"./useLabels-HWrLLSK0.js";import"./useButton-D-iZZiOo.js";import"./RSPContexts-Dzk6vf8s.js";import"./Text-DdhSqAlM.js";import"./useDateFormatter-DkAEuvMj.js";import"./useControlledState-CkPJQRbj.js";import"./useLocalizedStringFormatter-CU3oIUiy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Qa0vMa7P.js";import"./useEvent-BmZgTZWk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-vGGme-gD.js";import"./VisuallyHidden-aHkENNoL.js";import"./clsx-Ciqy0D92.js";import"./Button-BYXk57rI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0rrceAj.js";import"./createLucideIcon-CDa9bc5n.js";import"./chevron-left-CvvkBjez.js";import"./chevron-right-BG2485_w.js";import"./Heading-B-UXBj9Z.js";import"./FieldError-94aBjoZy.js";import"./Text-DcyHZz0V.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
