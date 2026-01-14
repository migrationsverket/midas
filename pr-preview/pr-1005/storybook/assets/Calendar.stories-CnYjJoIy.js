import{$ as c,a as m,r as l,j as d}from"./iframe-KzFLTGr0.js";import{C as n}from"./Calendar-D2Ltw3BQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ba2i9MVr.js";import"./Button-BBRIbgdT.js";import"./utils-CO2yYsr6.js";import"./clsx-B-dksMZM.js";import"./Hidden-DzrKcQON.js";import"./useFocusRing-C4wRgiR-.js";import"./index-hPDntuQZ.js";import"./index-BiyGu_5v.js";import"./useLabels-8Z9kmpB8.js";import"./useButton-BxP8bzWM.js";import"./RSPContexts-sIRx7DsI.js";import"./Text-Cmn4JyoG.js";import"./useDateFormatter-DdaBBfP4.js";import"./useControlledState-C-UjGiCO.js";import"./useLocalizedStringFormatter-cXa5F6yq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CKJgZURY.js";import"./useEvent-BFDZwV-z.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BVYDnjYQ.js";import"./VisuallyHidden-kcpL8sOO.js";import"./clsx-Ciqy0D92.js";import"./Button-BLxQJ6AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cvui8YbN.js";import"./createLucideIcon-QW7mSHEY.js";import"./chevron-left-BieWb01Y.js";import"./chevron-right-Dpg9ecb0.js";import"./Heading-NeDBoCJT.js";import"./FieldError-B1daGC65.js";import"./Text-BH1PFH25.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
