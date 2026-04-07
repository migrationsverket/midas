import{$ as c,a as m,r as l,j as d}from"./iframe-dJ9N4Hwo.js";import{C as n}from"./Calendar-Dd_3hyyL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-eOsIWkW5.js";import"./Button-BbXYBFSI.js";import"./utils-D-XK7wRt.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOBdyTg3.js";import"./useFocusRing-DNc8UdyY.js";import"./index--Ro6Hv8b.js";import"./index-CtGu0Onf.js";import"./useLabel-Bu1777AN.js";import"./useLabels-CNniH7Tl.js";import"./useButton-3Dpu7dn4.js";import"./RSPContexts-QX7zRPGs.js";import"./Text-BxsbjcMl.js";import"./useDateFormatter-B0R0lqLN.js";import"./useControlledState-BVn3AEak.js";import"./useLocalizedStringFormatter-B71vqv89.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-0lZN7t9J.js";import"./useEvent-CyTGIsHa.js";import"./getScrollParent-C8aqS4T5.js";import"./scrollIntoView-jXOV1euP.js";import"./useDescription-B46QsQBZ.js";import"./VisuallyHidden-Dxq67aJu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-GdafMRdO.js";import"./createLucideIcon-B0IDBM20.js";import"./chevron-right-BBd5hghh.js";import"./Button-Cxxx7spL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Br0ol2So.js";import"./Heading-DiUYIrgI.js";import"./FieldError-WztJl-_N.js";import"./Text-CrKOi2mC.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
