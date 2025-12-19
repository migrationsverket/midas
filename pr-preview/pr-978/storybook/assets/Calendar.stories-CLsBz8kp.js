import{$ as c,a as m,r as l,j as d}from"./iframe-C7QVanE1.js";import{C as n}from"./Calendar-BnvYw0UF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BY1GaQSt.js";import"./Button-B0ygehGU.js";import"./utils-DryWrSsO.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWveG1to.js";import"./useFocusRing-CUPRYPTR.js";import"./index-CZH-gIg2.js";import"./index-CQdr9i86.js";import"./useLabels-CDWq4CCD.js";import"./useButton-Bgb6cmzM.js";import"./RSPContexts-B6-3qImG.js";import"./Text-Caxmjr4k.js";import"./useDateFormatter-kvyw1PQA.js";import"./useControlledState-wg0wExfo.js";import"./useLocalizedStringFormatter-CpMZdteZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-HA6W154m.js";import"./useEvent-Bn3ja8Lv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bd9LwgFX.js";import"./VisuallyHidden-6jSDaJWd.js";import"./clsx-Ciqy0D92.js";import"./Button-CCRsXMgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHWurjhu.js";import"./createLucideIcon-Ci9lC38R.js";import"./chevron-left-CrTvrr_9.js";import"./chevron-right-DGl-ouVe.js";import"./Heading-DLpZtmIA.js";import"./FieldError-Bc8wiCVr.js";import"./Text-DDFZmojY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
