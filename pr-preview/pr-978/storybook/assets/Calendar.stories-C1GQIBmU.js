import{$ as c,a as m,r as l,j as d}from"./iframe-Cr8ZG8qc.js";import{C as n}from"./Calendar-YcZRH3kO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-osqDUbEL.js";import"./Button-DtiX6Cf7.js";import"./utils-1qB61-Q9.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4ZqPy51.js";import"./useFocusRing-Pn26Wr7i.js";import"./index-CK-mVwAb.js";import"./index-Cx2Cv-0i.js";import"./useLabels-JD4Ch7YH.js";import"./useButton-g037VBgg.js";import"./RSPContexts-CJfEBTxH.js";import"./Text-BATGuSGj.js";import"./useDateFormatter-B3G5U7jJ.js";import"./useControlledState-Bq5QlAOQ.js";import"./useLocalizedStringFormatter-ClP7AtYj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CCF59qlW.js";import"./useEvent-BmxhW0Eo.js";import"./getScrollParent-DCoSIGQk.js";import"./scrollIntoView-Dx_UjdcJ.js";import"./useDescription-BVnW2p89.js";import"./VisuallyHidden-BNibYwT3.js";import"./clsx-Ciqy0D92.js";import"./Button-BxRBYVZ9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DoVeJ82i.js";import"./createLucideIcon-9WJw1iTO.js";import"./chevron-left-CaE_iirb.js";import"./chevron-right-BD5CrUsB.js";import"./Heading-DOVZhLqw.js";import"./FieldError-0m6zvZi0.js";import"./Text-CKb2n81p.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
