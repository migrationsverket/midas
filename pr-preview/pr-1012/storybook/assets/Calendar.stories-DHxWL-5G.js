import{$ as c,a as m,r as l,j as d}from"./iframe-qoW9tZaT.js";import{C as n}from"./Calendar-C3eFclNr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DjzuYFPi.js";import"./Button-B0Fu5HXr.js";import"./utils-CTxYHgfD.js";import"./clsx-B-dksMZM.js";import"./Hidden-BS4srMlH.js";import"./useFocusRing-B6LARHo7.js";import"./index-bWzt5b9S.js";import"./index-BiO5NgKw.js";import"./useLabels-B9eAX_KZ.js";import"./useButton-C2Ne_uvp.js";import"./RSPContexts-DxChSUOo.js";import"./Text-DwKAJAla.js";import"./useDateFormatter-D7it7C2C.js";import"./useControlledState-C0UVa0XM.js";import"./useLocalizedStringFormatter-D4YZU2AG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaVeE0I2.js";import"./useEvent-DDnu5cND.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5krC5hm9.js";import"./VisuallyHidden-BRq5SFSs.js";import"./clsx-Ciqy0D92.js";import"./Button-CPAvH5KE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZDYT37P.js";import"./createLucideIcon-BjNk3Fmr.js";import"./chevron-left-CwHu8WPe.js";import"./chevron-right-DTMLjy-l.js";import"./Heading-Ds5MlqHc.js";import"./FieldError-DE19xuEt.js";import"./Text-CYhV6FXp.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
