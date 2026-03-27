import{$ as c,a as m,r as l,j as d}from"./iframe-BUTiSP7z.js";import{C as n}from"./Calendar-BDBYsan9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DIdL2_PA.js";import"./Button-Bo24jbF_.js";import"./utils-BgvO5RRu.js";import"./clsx-B-dksMZM.js";import"./Hidden-ByRZ-jrH.js";import"./useFocusRing-Ba-KD3wP.js";import"./index-xHN4e2Es.js";import"./index-DtSReIsm.js";import"./useLabel-DayWlGa1.js";import"./useLabels-BFR96MD7.js";import"./useButton-DroPnLuM.js";import"./RSPContexts-DLLJ83nY.js";import"./Text-D5N8Dzak.js";import"./useDateFormatter-CLmZlU4D.js";import"./useControlledState-BxwH6ylP.js";import"./useLocalizedStringFormatter-PGtNsfZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-snUxMld7.js";import"./useEvent-2q7qEvPm.js";import"./getScrollParent-UEEitPqy.js";import"./scrollIntoView-BjuxrAKf.js";import"./useDescription-D2qADDFs.js";import"./VisuallyHidden-xIEwbCvt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DPc4oSIX.js";import"./createLucideIcon-hh9ZE-Di.js";import"./chevron-right-B7MDJ2-U.js";import"./Button-Ktwig2Cy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D6S3a2W6.js";import"./Heading-DNFpWkEI.js";import"./FieldError-CYEkkCc9.js";import"./Text-LYM_b1_z.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
