import{$ as c,a as m,r as l,j as d}from"./iframe-Ds-nK5jC.js";import{C as n}from"./Calendar-DoXtqSX7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcKykvOh.js";import"./Button-dHl8uENq.js";import"./utils-BWcc9EPK.js";import"./clsx-B-dksMZM.js";import"./Hidden-4dstmqQY.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./RSPContexts-CMueCVj4.js";import"./Text-D4nZVrIm.js";import"./useDateFormatter-si_tLgMa.js";import"./useControlledState-B9M6c-Zi.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dtst6q7J.js";import"./useEvent-BAAt4FlS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CfEhRarO.js";import"./VisuallyHidden-BeRc1dUa.js";import"./clsx-Ciqy0D92.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./createLucideIcon-xY7bNo4d.js";import"./chevron-left-iOIxlnN9.js";import"./chevron-right-CumnFIYn.js";import"./Heading-BpINEwCz.js";import"./FieldError-CDeKUF86.js";import"./Text-cOJkqGeS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
