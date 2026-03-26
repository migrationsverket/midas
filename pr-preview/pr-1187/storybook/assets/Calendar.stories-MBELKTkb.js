import{$ as c,a as m,r as l,j as d}from"./iframe-B04rcWcX.js";import{C as n}from"./Calendar-DqJ5ZQXu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CEU_NMBc.js";import"./Button-BsMpdhm5.js";import"./utils-5SWrrdiI.js";import"./clsx-B-dksMZM.js";import"./Hidden-CsiOlUYT.js";import"./useFocusRing-DOTrmHAk.js";import"./index-DR4XYI1U.js";import"./index-Co-GRlRp.js";import"./useLabel-CuMqu2Vz.js";import"./useLabels-gSO7jKxM.js";import"./useButton-CqaBofGl.js";import"./RSPContexts-vJw7lJG0.js";import"./Text-b-jINt27.js";import"./useDateFormatter-CT_6e4sK.js";import"./useControlledState-C9VnzheA.js";import"./useLocalizedStringFormatter-D6BZiHkU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bd5Lh2iP.js";import"./useEvent-0NoNGJv_.js";import"./getScrollParent-JaIoxddM.js";import"./scrollIntoView-BAmPtIRu.js";import"./useDescription-CIjr0h8X.js";import"./VisuallyHidden-wR3lvsEV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Co9gABcd.js";import"./createLucideIcon-VXkpW6uL.js";import"./chevron-right-BmH_i7T_.js";import"./Button-9yaBleaj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C68HHjER.js";import"./Heading-Eb1FE2dJ.js";import"./FieldError-sVMV4FJK.js";import"./Text-CLa1xROh.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
