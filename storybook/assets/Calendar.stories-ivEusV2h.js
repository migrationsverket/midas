import{$ as c,a as m,r as l,j as d}from"./iframe-B6v7SNgB.js";import{C as n}from"./Calendar-DdC3dvJX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D40snMMs.js";import"./Button-R8L0fisR.js";import"./utils-DvQnzAUx.js";import"./clsx-B-dksMZM.js";import"./Hidden-DVRxRWYq.js";import"./useFocusRing-BmrkPpfG.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./RSPContexts-xsTqzyol.js";import"./Text-BIYy6_GG.js";import"./useDateFormatter-CJ-RNQOJ.js";import"./useControlledState-BWAzPrBc.js";import"./useLocalizedStringFormatter-DoD5PX0W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BerLl7Lc.js";import"./useEvent-DDlHCXaB.js";import"./getScrollParent-TDrNm2Qd.js";import"./scrollIntoView-4Kj4GFr4.js";import"./useDescription-CGrNZaxo.js";import"./VisuallyHidden-s-TUYsoQ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DSitzCty.js";import"./createLucideIcon-DJSw6RDm.js";import"./chevron-right-BeAvHyh_.js";import"./Button-DFw2NzPi.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./Heading-GqHKyTua.js";import"./FieldError-lkabuhB0.js";import"./Text-IRrkNmmn.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
