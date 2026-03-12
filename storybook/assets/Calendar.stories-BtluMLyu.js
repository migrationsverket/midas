import{$ as c,a as m,r as l,j as d}from"./iframe-hjgHldhA.js";import{C as n}from"./Calendar-DIWykWMQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3PeqUGG.js";import"./Button-DdHA5O9n.js";import"./utils-B2oy_Akv.js";import"./clsx-B-dksMZM.js";import"./Hidden-CkBT3eQL.js";import"./useFocusRing-DGqM0imy.js";import"./index-wWqPkfY9.js";import"./index-CZGdFrnq.js";import"./useLabels-BUpPlZ0t.js";import"./useButton-3e8Qen6j.js";import"./RSPContexts-BCs-XGXW.js";import"./Text-C-W1MFmh.js";import"./useDateFormatter-DOy96z1J.js";import"./useControlledState-p8oWdHew.js";import"./useLocalizedStringFormatter-QPyrmh33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8S09KqOP.js";import"./useEvent-mNSED06z.js";import"./getScrollParent-BME3aSxN.js";import"./scrollIntoView-BEdUUvdG.js";import"./useDescription-g6-DJmWb.js";import"./VisuallyHidden-pF8Dh8C_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CnNpQFfE.js";import"./createLucideIcon-DxWbUO7j.js";import"./chevron-right-WgC_YjNn.js";import"./Button-D4ayGKxz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-qYAAoSTQ.js";import"./Heading-DuV-GoVL.js";import"./FieldError-DyNIXA91.js";import"./Text-BGjvDqqs.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
