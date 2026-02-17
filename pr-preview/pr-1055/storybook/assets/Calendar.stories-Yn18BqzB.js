import{$ as c,a as m,r as l,j as d}from"./iframe-BUqHy7GG.js";import{C as n}from"./Calendar-CtHv5Vtk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DAZmnu2K.js";import"./Button-CodW0JYq.js";import"./utils-DrdsiK-L.js";import"./clsx-B-dksMZM.js";import"./Hidden-N4_Hw_bF.js";import"./useFocusRing-CebfJ1br.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./RSPContexts-r592QdOJ.js";import"./Text-B9jmhAwE.js";import"./useDateFormatter-6ChvylXH.js";import"./useControlledState-BKp7Diu5.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cm8Dy_I6.js";import"./useEvent-ErruG-b9.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B9Fe93xB.js";import"./VisuallyHidden-DMnJ-77G.js";import"./clsx-Ciqy0D92.js";import"./Button-C0V6-7WF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8scW4RRu.js";import"./createLucideIcon-DBH6mYos.js";import"./chevron-left-caPFfh2u.js";import"./chevron-right-wktewqIb.js";import"./Heading-D6s9n0x1.js";import"./FieldError-CDxUPwIp.js";import"./Text-6n5u0fKg.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
