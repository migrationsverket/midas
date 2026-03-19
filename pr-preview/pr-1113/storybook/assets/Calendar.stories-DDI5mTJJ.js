import{$ as c,a as m,r as l,j as d}from"./iframe-DmYAiZdS.js";import{C as n}from"./Calendar-BWgd38_H.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CJurteVz.js";import"./Button-B_13vb86.js";import"./utils-Ce8T3nBz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSqyIKF7.js";import"./useFocusRing-uVSx56YJ.js";import"./index-Clg0oazY.js";import"./index-BekCUKef.js";import"./useLabels-o8QMpPqb.js";import"./useButton-DhL-fajU.js";import"./RSPContexts-6HyyfxyX.js";import"./Text-Cpi_AAzk.js";import"./useDateFormatter-CiK0s3d2.js";import"./useControlledState-C0DEKgGJ.js";import"./useLocalizedStringFormatter-BxKtkIxd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BZ7Dl93C.js";import"./useEvent-BzBaGFQj.js";import"./getScrollParent-Bu3T6bJu.js";import"./scrollIntoView-7nJ5XGAi.js";import"./useDescription-Bg_KyiAu.js";import"./VisuallyHidden-HoFr5-6u.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D3FXy20k.js";import"./createLucideIcon-Cd1S2Ifo.js";import"./chevron-right-BS424jZC.js";import"./Button-CF56JNsj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BrrMXkxk.js";import"./Heading-7gcbadRA.js";import"./FieldError-UD24mey6.js";import"./Text-DrUi_0Jd.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
