import{$ as p,a as m,r as l,j as d}from"./iframe-BAs73RPL.js";import{C as n}from"./Calendar-BJIAjglG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B0gzJ4wV.js";import"./Button-DOsNf8Ag.js";import"./utils-BNvagvwB.js";import"./clsx-B-dksMZM.js";import"./Hidden-ExRgjons.js";import"./useFocusRing-B5MTwkWu.js";import"./index-mTKHe5Za.js";import"./index-CPUct8TH.js";import"./useLabels-DIezZ8D1.js";import"./useButton-Dq9Jdi2X.js";import"./RSPContexts-DtBvA3Cm.js";import"./Text-DfkU3vzw.js";import"./useDateFormatter-CPmSdR4j.js";import"./useControlledState-NZanUP6y.js";import"./useLocalizedStringFormatter-zi0cj8Ji.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dc_KLBbA.js";import"./useEvent-DWzVrgBg.js";import"./getScrollParent-CJ1xMZJl.js";import"./scrollIntoView-BRZESjne.js";import"./useDescription-p_4Zvj2G.js";import"./VisuallyHidden-HHC4KR7u.js";import"./clsx-Ciqy0D92.js";import"./Button-DpzX3_Fu.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-lGSf489A.js";import"./createLucideIcon-D8g6b5V3.js";import"./chevron-right-DEukZ_5O.js";import"./Heading-B5FaUfwe.js";import"./FieldError-CvqgXdke.js";import"./Text-s8L5UkWk.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
