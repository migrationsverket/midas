import{$ as c,a as m,r as l,j as d}from"./iframe-RkEpx7ni.js";import{C as n}from"./Calendar-BujP0jX4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CLjcaafC.js";import"./Button-g4l6mPYD.js";import"./utils-B679VK9X.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZ7CBwUl.js";import"./useFocusRing-BlNPnF8L.js";import"./index-goo2gDrg.js";import"./index-DxX5hx9t.js";import"./useLabels-xGg1dRYQ.js";import"./useButton-KyyZ2_fP.js";import"./RSPContexts-C64Y1eJJ.js";import"./Text-BGMtfqCs.js";import"./useDateFormatter-vChj5Sfx.js";import"./useControlledState-CwCz7UAe.js";import"./useLocalizedStringFormatter-DI3yj5Q3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-pWKCvgEg.js";import"./useEvent-B7oskemw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription--nrXx0r0.js";import"./VisuallyHidden-Bkb3QPlD.js";import"./clsx-Ciqy0D92.js";import"./Button-DYQbXjbn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPcGQfa-.js";import"./createLucideIcon-cwFcj7Hk.js";import"./chevron-left-vSsoMwfQ.js";import"./chevron-right-CUzRfPYx.js";import"./Heading-vpfIDZEf.js";import"./FieldError-BBX_Ykc_.js";import"./Text-C1lDc3gF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
