import{$ as c,a as m,r as l,j as d}from"./iframe-Bau-Vb-U.js";import{C as n}from"./Calendar-CnbMqgpP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-26taglsw.js";import"./Button-nyoR5AiN.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./Hidden-ygOXplTE.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./RSPContexts-Ci7lzjgK.js";import"./Text-CCFXQNDk.js";import"./useDateFormatter-OaihmjPh.js";import"./useControlledState-B-7lzpTq.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DIrzL4Rl.js";import"./useEvent-CVCmvDjB.js";import"./getScrollParent-CNAv_Fjp.js";import"./scrollIntoView-DtuGpqr3.js";import"./useDescription-kPv3UG3t.js";import"./VisuallyHidden-HpJjECW7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-AbAM0C6U.js";import"./createLucideIcon-Di4Tit0m.js";import"./chevron-right-DyHBXy-b.js";import"./Button-BCWlvYFn.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Heading-BIPTKynB.js";import"./FieldError-C4-I9rBv.js";import"./Text-CnUTPFtZ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
