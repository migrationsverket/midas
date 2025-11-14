import{$ as p,a as m,r as l,j as d}from"./iframe-DlRnEK4k.js";import{C as n}from"./Calendar-D2iMONan.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bm4r9FWi.js";import"./Button-BVP44qrj.js";import"./utils-D3WMCmhi.js";import"./clsx-B-dksMZM.js";import"./Hidden-Xdwaye0t.js";import"./useFocusRing-CtQv74MI.js";import"./index-jCSvyxP9.js";import"./index-DJo1NE8t.js";import"./useLabels-CqwaHALx.js";import"./useButton-BqQtdQbm.js";import"./RSPContexts-DpGYM7nP.js";import"./Text-DzhCPMX9.js";import"./useDateFormatter-B_JfkHN5.js";import"./useControlledState-RvjSpX79.js";import"./useLocalizedStringFormatter-DyH7cYn1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BXxm-XGh.js";import"./useEvent-BxrOLZT_.js";import"./getScrollParent-CN7yZ-C_.js";import"./scrollIntoView-CMHF9MTr.js";import"./useDescription-DJXZM-kB.js";import"./VisuallyHidden-ifyuuxDl.js";import"./clsx-Ciqy0D92.js";import"./Button-DGJbzUQa.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BrQGCJQG.js";import"./chevron-right-CVqV7451.js";import"./Heading-wCvU4ISl.js";import"./FieldError-ByTImbG0.js";import"./Text-pxXmd_kg.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
