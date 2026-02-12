import{$ as c,a as m,r as l,j as d}from"./iframe-GzN0VSzx.js";import{C as n}from"./Calendar-Bz92rY3p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3qUKKHq4.js";import"./Button-B9ouc3Vz.js";import"./utils-dcWRHMqA.js";import"./clsx-B-dksMZM.js";import"./Hidden-BiK8gQF-.js";import"./useFocusRing-BT84Sj0b.js";import"./index-BtUmmQ1y.js";import"./index-DkoMqfON.js";import"./useLabels-8wBAXN0N.js";import"./useButton-BJTX_GMM.js";import"./RSPContexts-DntI5H5m.js";import"./Text-BytI2fT-.js";import"./useDateFormatter-CdRH5F26.js";import"./useControlledState-CFkZ7Ywi.js";import"./useLocalizedStringFormatter-CkwJfZLX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BDqyLm7y.js";import"./useEvent-kmBIgIh4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DH1k0dXL.js";import"./VisuallyHidden-Bf3adftS.js";import"./clsx-Ciqy0D92.js";import"./Button-BcwNb2j2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9sMeAIfj.js";import"./createLucideIcon-KJI_USZY.js";import"./chevron-left-C4eOKpMn.js";import"./chevron-right-DawiU4mG.js";import"./Heading-qWubh4fZ.js";import"./FieldError-DXzy-Fs_.js";import"./Text-DW2oSw1u.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
