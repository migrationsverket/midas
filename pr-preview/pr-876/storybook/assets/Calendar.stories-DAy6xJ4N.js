import{$ as c,a as m,r as l,j as d}from"./iframe-CARYWlMr.js";import{C as n}from"./Calendar-puD_eHEx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cy1fZNl_.js";import"./Button-Czff7WUO.js";import"./utils-CpzDmsYi.js";import"./clsx-B-dksMZM.js";import"./Hidden-eR-QFzh5.js";import"./useFocusRing-eR43gCGN.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./RSPContexts-DmmT8ORw.js";import"./Text-CYKeiFr8.js";import"./useDateFormatter-Duulhw3Q.js";import"./useControlledState-PiJ1bWKV.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C0xfKOay.js";import"./useEvent-CdMdGV8r.js";import"./getScrollParent-B2bQFjre.js";import"./scrollIntoView-BlJ4PC4n.js";import"./useDescription-1em3p3rE.js";import"./VisuallyHidden-BdHdXLzS.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CUJpxHNG.js";import"./createLucideIcon-DMrxxS3N.js";import"./chevron-right-CDnPq5Is.js";import"./Button-CJO8gD-9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Heading-CdaYlD6X.js";import"./FieldError-D96zTf6J.js";import"./Text-C6YZuIwj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
