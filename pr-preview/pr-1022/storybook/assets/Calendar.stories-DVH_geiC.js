import{$ as c,a as m,r as l,j as d}from"./iframe-3vXkeaXf.js";import{C as n}from"./Calendar-puePxj3O.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DQ_NgM25.js";import"./Button-Dhwcp2Tj.js";import"./utils-Ci2rW9QR.js";import"./clsx-B-dksMZM.js";import"./Hidden-If5Crsfr.js";import"./useFocusRing-DNafsx48.js";import"./index-CZo5RHNF.js";import"./index-DodIUsUi.js";import"./useLabels-D1__96MT.js";import"./useButton-CIQe5U3d.js";import"./RSPContexts-CALLQvPo.js";import"./Text-BHe6HkmH.js";import"./useDateFormatter-DG7Lhse8.js";import"./useControlledState-BqfUWkUs.js";import"./useLocalizedStringFormatter-Lx5W0ILu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C1OlrAvX.js";import"./useEvent-Dtk_oGRL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-SJAzHkl8.js";import"./VisuallyHidden-Dmqfs6c2.js";import"./clsx-Ciqy0D92.js";import"./Button-CqTfhLBS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bnn512eF.js";import"./createLucideIcon-Dr81SgBw.js";import"./chevron-left-8mJOWE-p.js";import"./chevron-right-4kR3enZh.js";import"./Heading-BdK0eQ3G.js";import"./FieldError-CUFcw2Bx.js";import"./Text-faRT9Ypk.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
