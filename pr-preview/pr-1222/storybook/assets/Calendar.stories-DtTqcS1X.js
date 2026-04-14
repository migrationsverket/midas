import{$ as c,a as m,r as l,j as d}from"./iframe-CU1z8ZWO.js";import{C as n}from"./Calendar-DZxzSE-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-hj69LwyC.js";import"./Button-BdGWlDvU.js";import"./utils-DVqGwfeZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-N7huL-Y5.js";import"./useFocusRing-Bwwpl-Rq.js";import"./index-I_kl0fWJ.js";import"./index-C-Y4ipn9.js";import"./useLabel-D4QSJjhu.js";import"./useLabels-DWo5evaA.js";import"./useButton-BI7SC1MX.js";import"./RSPContexts-CauR0OIy.js";import"./Text-YKX6wkOC.js";import"./useDateFormatter-MAtu2Ak2.js";import"./useControlledState-CUj5ZMiu.js";import"./useLocalizedStringFormatter-CFmlUqTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dr_k7Gbg.js";import"./useEvent-Bq6uqUQY.js";import"./getScrollParent-xYS8wAXV.js";import"./scrollIntoView-BgxrN33L.js";import"./useDescription-CR7aQf8r.js";import"./VisuallyHidden-BrIjXOit.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D_GkKr0Y.js";import"./createLucideIcon-CaHhpyoi.js";import"./chevron-right-DFqZIORu.js";import"./Button-DkJeYqVL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dvrj7zKe.js";import"./Heading-BR9AhlKG.js";import"./FieldError-I8SPxjsf.js";import"./Text-ChUFIC2p.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
