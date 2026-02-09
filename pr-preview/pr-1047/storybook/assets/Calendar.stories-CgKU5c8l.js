import{$ as c,a as m,r as l,j as d}from"./iframe-DVQ0lchi.js";import{C as n}from"./Calendar-Cg7M8ItT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-98bbK8N6.js";import"./Button-wRPSXeW1.js";import"./utils-D9gSMjNq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFa_YiSP.js";import"./useFocusRing-BK_0R4Cd.js";import"./index-Cj7CZlN3.js";import"./index-BwU4zFag.js";import"./useLabels-DHWU2EjP.js";import"./useButton-7QHFLhkI.js";import"./RSPContexts-qfClobBw.js";import"./Text-BT_jL1TS.js";import"./useDateFormatter-DeL5YGRF.js";import"./useControlledState-CVbkXYHz.js";import"./useLocalizedStringFormatter-BgI6hB3-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cq3QzAjP.js";import"./useEvent-B4aA5pHy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BIgViSQ9.js";import"./VisuallyHidden-D9m3MBoK.js";import"./clsx-Ciqy0D92.js";import"./Button-UCEzLs7l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DL9CCeFC.js";import"./createLucideIcon-C72qyWqC.js";import"./chevron-left-UESl2uGA.js";import"./chevron-right-DtZe0bXx.js";import"./Heading-F4cTSlGL.js";import"./FieldError-BZ5WZxgy.js";import"./Text-CG8-q4rG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
