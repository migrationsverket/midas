import{$ as c,a as m,r as l,j as d}from"./iframe-Bv5ml16c.js";import{C as n}from"./Calendar-CxXmqBxz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BO1npLN8.js";import"./Button-DLv8fZul.js";import"./utils-CrzZ4zVW.js";import"./clsx-B-dksMZM.js";import"./Hidden-w_KhT5lQ.js";import"./useFocusRing-Cq3qZjv_.js";import"./index-BOMnw_9i.js";import"./index-fzWvs2nE.js";import"./useLabels-CDeKv3MG.js";import"./useButton-BFdfWCYJ.js";import"./RSPContexts-WtmDll1S.js";import"./Text-B5E6ljJT.js";import"./useDateFormatter-QGvdbJeM.js";import"./useControlledState-D6OB0qGK.js";import"./useLocalizedStringFormatter-CtTQzSvs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D8wMPfEX.js";import"./useEvent-Bm-0c1SF.js";import"./getScrollParent-CUNZV9Gn.js";import"./scrollIntoView-BeG1fKYH.js";import"./useDescription-BqCWQXFE.js";import"./VisuallyHidden-CVPJh_a3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D5JAHZIm.js";import"./createLucideIcon-CDmvOUsI.js";import"./chevron-right-Dy8qCi62.js";import"./Button-CLHYluxH.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CsxePGHN.js";import"./Heading-B8xw2oF8.js";import"./FieldError-ikMxF9RT.js";import"./Text-AKHTrLSe.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
