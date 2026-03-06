import{$ as c,a as m,r as l,j as d}from"./iframe-CXiR3iKp.js";import{C as n}from"./Calendar-DZwbrrW1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CEuwedL2.js";import"./Button-DQDqzjOI.js";import"./utils-Bp_8F4M1.js";import"./clsx-B-dksMZM.js";import"./Hidden-l5OStL3l.js";import"./useFocusRing-DoagLvTG.js";import"./index-BVvfbKRI.js";import"./index-DLJWMq1n.js";import"./useLabels-hiXhHu80.js";import"./useButton-DoaLh7Qx.js";import"./RSPContexts-BzUEWbO_.js";import"./Text-VVcfFgTz.js";import"./useDateFormatter-BuAf-MX_.js";import"./useControlledState-D8SfxPND.js";import"./useLocalizedStringFormatter-oYkQuV-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DEC8FpN1.js";import"./useEvent-CYUKjQ_Y.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CwhQFL3q.js";import"./VisuallyHidden-QuqGTMLw.js";import"./clsx-Ciqy0D92.js";import"./Button-6_2D52en.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0YZmeDYQ.js";import"./createLucideIcon-D8BZH6VC.js";import"./chevron-left-CJ2B3nkY.js";import"./chevron-right-Cu8UG5PT.js";import"./Heading-CV0Qf8hu.js";import"./FieldError-DhN8Qwjc.js";import"./Text-DQ2_N-F1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
