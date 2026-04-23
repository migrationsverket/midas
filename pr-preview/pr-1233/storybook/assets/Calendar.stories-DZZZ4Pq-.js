import{$ as c,a as m,r as l,j as d}from"./iframe-CuHS7f-D.js";import{C as n}from"./Calendar-BNmcUuCL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DnZGjaee.js";import"./Button-BHwczPOP.js";import"./utils-BFq6s5qx.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQfRALgS.js";import"./useFocusRing-c3yj8psb.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./RSPContexts-CmGu2gwM.js";import"./Text-wtPwzvaL.js";import"./useDateFormatter-dy1VScoB.js";import"./useControlledState-Kxt6bXWr.js";import"./useLocalizedStringFormatter-MxafZpyg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DgHfrstL.js";import"./useEvent-BpJPF1H-.js";import"./getScrollParent-C0O747nR.js";import"./scrollIntoView-CFWK3f8m.js";import"./useDescription-UP5fy7je.js";import"./VisuallyHidden-sy5lx_M_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D5wd4BEl.js";import"./createLucideIcon-WRij3kcs.js";import"./chevron-right-C16y9N10.js";import"./Button-CT4-7PnM.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./Heading-3jJmNByH.js";import"./FieldError-DWjsvXUz.js";import"./Text-Suqt0mTK.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
