import{$ as c,a as m,r as l,j as d}from"./iframe-CeCAp685.js";import{C as n}from"./Calendar-Chnet-S5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ditc5PA-.js";import"./Button-0wuCXx93.js";import"./utils-COZ-VSjk.js";import"./clsx-B-dksMZM.js";import"./Hidden-DL0LnJvP.js";import"./useFocusRing-Bh0QYcZA.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./RSPContexts-CyFxiidX.js";import"./Text-OHvhFpdo.js";import"./useDateFormatter-Dv2zgdeD.js";import"./useControlledState-Dps_NbAf.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bi04d4kL.js";import"./useEvent-teEO8Cf_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3frf935.js";import"./VisuallyHidden-C9bjb32j.js";import"./clsx-Ciqy0D92.js";import"./Button-DO76dX9X.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";import"./createLucideIcon-DSHxLsIU.js";import"./chevron-left-ioj5fr0f.js";import"./chevron-right-Bj-4597N.js";import"./Heading-B4mtSUFj.js";import"./FieldError-aZ4tQBIh.js";import"./Text-BD2V775c.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
