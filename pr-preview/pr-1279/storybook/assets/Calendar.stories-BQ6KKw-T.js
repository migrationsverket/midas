import{$ as c,a as m,r as l,j as d}from"./iframe-BdqauXPx.js";import{C as n}from"./Calendar-stdjpHYP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BGwdsc_b.js";import"./Button-BdENfSlN.js";import"./utils-TjQiWSfv.js";import"./clsx-B-dksMZM.js";import"./Hidden-D68chLs-.js";import"./useFocusRing-Djhyctp1.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./RSPContexts-DWJwZTPK.js";import"./Text-BL07whN_.js";import"./useDateFormatter-BTBkRuEX.js";import"./useControlledState-BqbfbBFv.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bsb1Gk4E.js";import"./useEvent-DExcb2G1.js";import"./getScrollParent-H79fyDJz.js";import"./scrollIntoView-jrzWWzlM.js";import"./useDescription-t_eySs42.js";import"./VisuallyHidden-d4YRXwAI.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CPJyarLu.js";import"./createLucideIcon-BaaLPnxs.js";import"./chevron-right-xZMaDTYc.js";import"./Button-lQ7FTiYx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Heading-KnoXvYNa.js";import"./FieldError-DGaJEWvC.js";import"./Text-Cb3R__HW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
