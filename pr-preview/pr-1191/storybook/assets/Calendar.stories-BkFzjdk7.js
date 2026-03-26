import{$ as c,a as m,r as l,j as d}from"./iframe-CmYiK-n6.js";import{C as n}from"./Calendar-BMp3kLHJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C2Al6O4C.js";import"./Button-qoG5XtEP.js";import"./utils-DuGECbYJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYp0pP8Z.js";import"./useFocusRing-fb67MZCG.js";import"./index-uTF0zBZg.js";import"./index-3su9nmIU.js";import"./useLabel-DORwbiEm.js";import"./useLabels-CWIg4FvW.js";import"./useButton-DI4TpKGO.js";import"./RSPContexts-CLCgQCox.js";import"./Text-BjHkHRHl.js";import"./useDateFormatter-9hU81zjx.js";import"./useControlledState-CmhxWbu6.js";import"./useLocalizedStringFormatter-DtH6xDXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cvboz-A5.js";import"./useEvent-DiUqwjRb.js";import"./getScrollParent-CGgBb0lV.js";import"./scrollIntoView-BEc6bXLo.js";import"./useDescription-D-5y-MeU.js";import"./VisuallyHidden-3nqwjOvK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CnCurL8J.js";import"./createLucideIcon-tBOZLxvE.js";import"./chevron-right-CTZL2Fcg.js";import"./Button-CF9FU3kY.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bg3jxnyj.js";import"./Heading-5TAFJO2x.js";import"./FieldError-BH0tEXew.js";import"./Text-Do0OahUX.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
