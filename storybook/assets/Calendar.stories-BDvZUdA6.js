import{$ as c,a as m,r as l,j as d}from"./iframe-Cod1JNFG.js";import{C as n}from"./Calendar-Dl9HD4fe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-kDeR9hHz.js";import"./Button-DShIviGh.js";import"./utils-RnFRVAvs.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSAoUHUZ.js";import"./useFocusRing-BTBrbXYF.js";import"./index-B6aKl88f.js";import"./index-CYSTLAu0.js";import"./useLabel-BYcG1Feb.js";import"./useLabels-Bj-Yy0gt.js";import"./useButton-CewAlskq.js";import"./RSPContexts-CGf9i1Cx.js";import"./Text-Dho6KfK4.js";import"./useDateFormatter-CmiXnWrz.js";import"./useControlledState-7bsBW9ME.js";import"./useLocalizedStringFormatter-BGVJ3s-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DF74fta7.js";import"./useEvent-BoihJK-v.js";import"./getScrollParent-4D2uxju0.js";import"./scrollIntoView-BPV88qUk.js";import"./useDescription-BW-G7pZE.js";import"./VisuallyHidden-B_oZwuHi.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BisS9QXS.js";import"./createLucideIcon-iT6Y2Uaa.js";import"./chevron-right-C4uXdP_n.js";import"./Button-Bv7kxC8o.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BASSYTlJ.js";import"./Heading-CGn3WAQ2.js";import"./FieldError-y5my5p3j.js";import"./Text-DYp5dFw4.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
