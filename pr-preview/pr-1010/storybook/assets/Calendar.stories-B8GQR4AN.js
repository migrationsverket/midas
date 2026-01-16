import{$ as c,a as m,r as l,j as d}from"./iframe-Be1aZvSB.js";import{C as n}from"./Calendar-BVTPxr60.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CuKk4KOZ.js";import"./Button-JlG5wiA2.js";import"./utils-Dr5lOQEm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BG3DEavw.js";import"./useFocusRing-4gVfCrlN.js";import"./index-DiNIKx-9.js";import"./index-3_mfRz-m.js";import"./useLabels-BWJsgRkM.js";import"./useButton-5FzE-eGH.js";import"./RSPContexts-BEvd3q6R.js";import"./Text-77WNyGJQ.js";import"./useDateFormatter-CC8SsQAs.js";import"./useControlledState-CJEhEPO4.js";import"./useLocalizedStringFormatter-DVu_V5sq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C56jdhm7.js";import"./useEvent-Bgy8ySsQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-qD4_R6It.js";import"./VisuallyHidden-DQWkGC77.js";import"./clsx-Ciqy0D92.js";import"./Button-KQ3agptm.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3flDKgk.js";import"./createLucideIcon-oLtop38V.js";import"./chevron-left-BG0BO7KD.js";import"./chevron-right-Bjq6Kh3r.js";import"./Heading-CRZEmuj5.js";import"./FieldError-CKZ818d7.js";import"./Text-8SUBmIhI.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
