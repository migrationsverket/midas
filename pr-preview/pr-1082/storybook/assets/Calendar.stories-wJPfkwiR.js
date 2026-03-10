import{$ as c,a as m,r as l,j as d}from"./iframe-ChqJc2cw.js";import{C as n}from"./Calendar-D7jnUJye.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-FXr5pV7h.js";import"./Button-BeubRGKE.js";import"./utils-C3PzQQRY.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXc9jxUl.js";import"./useFocusRing-Br7CSdIA.js";import"./index-XHTXcyLl.js";import"./index-BSxnvZZM.js";import"./useLabels-rs-x4V9J.js";import"./useButton-Cp-BrBn5.js";import"./RSPContexts-Csr63BXU.js";import"./Text-ByZunG-k.js";import"./useDateFormatter-OAqbWd9I.js";import"./useControlledState-CR2AzEon.js";import"./useLocalizedStringFormatter-u3-jiggt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-dtb58hou.js";import"./useEvent-CDez9Lha.js";import"./getScrollParent-CoX3TnbC.js";import"./scrollIntoView-DeODYBWe.js";import"./useDescription-rnynDtnq.js";import"./VisuallyHidden-BU1LBnPa.js";import"./clsx-Ciqy0D92.js";import"./Button-DLoG7seu.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-DWAuUJ7k.js";import"./createLucideIcon-CuCvvgqY.js";import"./chevron-left-CoR1ln2z.js";import"./chevron-right-C2dDrGwg.js";import"./Heading-0izTS8KO.js";import"./FieldError-neuSuNaT.js";import"./Text-cWcAPzwL.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
