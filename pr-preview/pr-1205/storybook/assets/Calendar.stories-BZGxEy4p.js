import{$ as c,a as m,r as l,j as d}from"./iframe-BS-EqM9B.js";import{C as n}from"./Calendar-CwS-4gx6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ChRITKEm.js";import"./Button-Fd5Hg-6t.js";import"./utils-B0k4XHwf.js";import"./clsx-B-dksMZM.js";import"./Hidden-pMKT4yIR.js";import"./useFocusRing-f4Gv2bLP.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./RSPContexts-BvHJA1-S.js";import"./Text-WfzPelJM.js";import"./useDateFormatter-BZZvMe9e.js";import"./useControlledState-B-FXHrTP.js";import"./useLocalizedStringFormatter-stCrBMQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGxB-jCi.js";import"./useEvent-CtMwRKAA.js";import"./getScrollParent-C8WafxuX.js";import"./scrollIntoView-BkCdOWuT.js";import"./useDescription-zN_kGT0f.js";import"./VisuallyHidden-BPzz7Fut.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B_DlUZto.js";import"./createLucideIcon-tz6Ei2qt.js";import"./chevron-right-uC0lFNKw.js";import"./Button-C36Rbpm6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./Heading-qHMH1efK.js";import"./FieldError-1ihXnr04.js";import"./Text-BmYuY3ql.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
