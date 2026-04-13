import{$ as c,a as m,r as l,j as d}from"./iframe-DDrwZSUr.js";import{C as n}from"./Calendar-B4GnePM6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DqGcayty.js";import"./Button-BBtH1XqU.js";import"./utils-fZpJvyFO.js";import"./clsx-B-dksMZM.js";import"./Hidden-BbxqZPAf.js";import"./useFocusRing-Co7KnI-2.js";import"./index-BDdESxF6.js";import"./index-2ekyzgHz.js";import"./useLabel-B-iHNEQ-.js";import"./useLabels-C-XwBesu.js";import"./useButton-DTzMuBwj.js";import"./RSPContexts-DBeOTN7L.js";import"./Text-C8zREkr5.js";import"./useDateFormatter-YsbPgDiX.js";import"./useControlledState-CoaU-25M.js";import"./useLocalizedStringFormatter--0SdXCip.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C6rNjT7k.js";import"./useEvent-v--lpn9l.js";import"./getScrollParent-DB8NtD2D.js";import"./scrollIntoView-Dk5DfXO6.js";import"./useDescription-Bqe-Zf64.js";import"./VisuallyHidden-Dfp2PUpV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-kPJ4Ni2s.js";import"./createLucideIcon-YccigzIq.js";import"./chevron-right-BS3lgQgK.js";import"./Button-B7DQCmWQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CaCMCUjI.js";import"./Heading-D6s1WcTy.js";import"./FieldError-Dwx20Li1.js";import"./Text-CsbHuTMa.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
