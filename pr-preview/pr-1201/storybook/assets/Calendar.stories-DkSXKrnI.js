import{$ as c,a as m,r as l,j as d}from"./iframe-BcVWnjiq.js";import{C as n}from"./Calendar-DLRm1fLY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B2AZOxT3.js";import"./Button-X_O9ad-3.js";import"./utils-BHfrMThS.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1e2ot4t.js";import"./useFocusRing-Cr43T2xz.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./RSPContexts-DwUzfd_N.js";import"./Text-Cf3_Dpr9.js";import"./useDateFormatter-CjqtCmZg.js";import"./useControlledState-BeIEKiqF.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DEIDvvml.js";import"./useEvent-CtZW5Qvu.js";import"./getScrollParent-dSYNY5k0.js";import"./scrollIntoView-CeKJisls.js";import"./useDescription-cF75q-Hq.js";import"./VisuallyHidden-DQYzeIJf.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B1KAAq5p.js";import"./createLucideIcon-DKRKL4qZ.js";import"./chevron-right-aDzMJOGC.js";import"./Button-aD9_wGcx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Heading-DzN1JGdH.js";import"./FieldError-RgIIuEHk.js";import"./Text-aEiNTvlh.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
