import{$ as c,a as m,r as l,j as d}from"./iframe-c0NZLqxB.js";import{C as n}from"./Calendar-BMzpTcNo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B-LhCZvF.js";import"./Button-C5Y3_RdN.js";import"./utils-BKgH2Y_x.js";import"./clsx-B-dksMZM.js";import"./Hidden-W2Z4Qx3q.js";import"./useFocusRing-Cj5nDXBG.js";import"./index-BMKVxsa8.js";import"./index-CyIR4htQ.js";import"./useLabels-CZwsnZ3A.js";import"./useButton-Cfwxxq9B.js";import"./RSPContexts-RKVSLPs0.js";import"./Text-INM5RJTT.js";import"./useDateFormatter-BTRtE6sy.js";import"./useControlledState-BjKcVj6X.js";import"./useLocalizedStringFormatter-Dj8f67Lw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGO1fVJ4.js";import"./useEvent-DhmWtasD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Db-kOIhF.js";import"./VisuallyHidden-fZjjLnAV.js";import"./clsx-Ciqy0D92.js";import"./Button-DIihlZQ1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAkg84e.js";import"./createLucideIcon-D4UmvVly.js";import"./chevron-left-Vo24tJDA.js";import"./chevron-right-CReKQ944.js";import"./Heading-RVoXat7V.js";import"./FieldError-DmTPwkC8.js";import"./Text-CHKa0TSz.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
