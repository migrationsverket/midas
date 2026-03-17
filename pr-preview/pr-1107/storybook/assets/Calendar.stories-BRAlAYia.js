import{$ as c,a as m,r as l,j as d}from"./iframe-CPHjxRlP.js";import{C as n}from"./Calendar-SzM9frZg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D4RKfGN8.js";import"./Button-0oqu_HuR.js";import"./utils-B-Qbv9d3.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaLLinj_.js";import"./useFocusRing-DWjPv-Rc.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./RSPContexts-IuRmAr1v.js";import"./Text-BM8b8hjA.js";import"./useDateFormatter-3PUBYQ3F.js";import"./useControlledState-kjVA7Iho.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CvMRLD1v.js";import"./useEvent-B67iovzO.js";import"./getScrollParent-vFXpP8ab.js";import"./scrollIntoView-qZ3V1AoT.js";import"./useDescription-BrEL6S7F.js";import"./VisuallyHidden-DUGlWYSK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BpPPI-5l.js";import"./createLucideIcon-iYSxmCjy.js";import"./chevron-right-BmaYU9ab.js";import"./Button-BPjf-uHP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BXoUii7t.js";import"./Heading-mPYmRqLQ.js";import"./FieldError-DUoT8eh2.js";import"./Text-p3Ykg7gy.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
