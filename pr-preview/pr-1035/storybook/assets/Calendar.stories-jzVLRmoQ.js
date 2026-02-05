import{$ as c,a as m,r as l,j as d}from"./iframe-BWc43a1O.js";import{C as n}from"./Calendar-CkpXqZOn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B7-nJSxs.js";import"./Button-D8sshy66.js";import"./utils-39kWX_LE.js";import"./clsx-B-dksMZM.js";import"./Hidden-CJZ0JVr6.js";import"./useFocusRing-C4VyUsZg.js";import"./index-CLPYF8fa.js";import"./index-CGp4UFbQ.js";import"./useLabels-Cx5jYDxX.js";import"./useButton-DMB5d1hu.js";import"./RSPContexts-C4lt73rl.js";import"./Text-DAytGxCt.js";import"./useDateFormatter-BWBFPxiQ.js";import"./useControlledState-2cnZjxyB.js";import"./useLocalizedStringFormatter-RWz-MW4O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dy_hGyei.js";import"./useEvent-BStJuAN2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTPWIusX.js";import"./VisuallyHidden-BkExIDrJ.js";import"./clsx-Ciqy0D92.js";import"./Button-Dko06iif.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BwtwStJt.js";import"./createLucideIcon-CFy2YlCm.js";import"./chevron-left-BHCPJ84A.js";import"./chevron-right-CL7tlGg2.js";import"./Heading-CBDXh2kn.js";import"./FieldError-B8r7qfMZ.js";import"./Text-BcD4jl1C.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
