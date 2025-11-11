import{$ as p,a as m,r as l,j as d}from"./iframe-Da_9xyu_.js";import{C as n}from"./Calendar-CQqWi2lX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ENlDfLNb.js";import"./Button-Dv74RsAx.js";import"./utils-ClY4JNQR.js";import"./clsx-B-dksMZM.js";import"./Hidden-DT7cFiAL.js";import"./useFocusRing-rtksAyVi.js";import"./index-MfarlIzn.js";import"./index-DCiPdHXY.js";import"./useLabels-D-XK_IKO.js";import"./useButton-DKgQBPu0.js";import"./RSPContexts-aKhEJDC9.js";import"./Text-Etr2qgQp.js";import"./useDateFormatter-C0hcI6Eg.js";import"./useControlledState-sFCHxnJW.js";import"./useLocalizedStringFormatter-BgiQH0tm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B3XGhIwt.js";import"./useEvent-BIZdtvwm.js";import"./getScrollParent-CWjPalW2.js";import"./scrollIntoView-qmn4W8AT.js";import"./useDescription-_3ZepyIS.js";import"./VisuallyHidden-BhEjSkfL.js";import"./clsx-Ciqy0D92.js";import"./Button-BEWcUzao.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CErKZ7dc.js";import"./chevron-right-CAgb8H1s.js";import"./Heading-DKIPWLCz.js";import"./FieldError-DZB4_8Mx.js";import"./Text-Bpadz2Uk.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
