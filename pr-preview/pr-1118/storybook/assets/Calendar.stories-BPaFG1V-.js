import{$ as c,a as m,r as l,j as d}from"./iframe-8UJkVthP.js";import{C as n}from"./Calendar-D-O0CnBW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oNBJDdnK.js";import"./Button-5Crp6oLI.js";import"./utils-BDWBmxXy.js";import"./clsx-B-dksMZM.js";import"./Hidden-D2CAjC8z.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./RSPContexts-qbHEhELM.js";import"./Text-CV-khTPA.js";import"./useDateFormatter-rUAbT-9l.js";import"./useControlledState-CQGiwWre.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CMoQagVN.js";import"./useEvent-CbYAf6vF.js";import"./getScrollParent-6Dr3zswo.js";import"./scrollIntoView-BW2PYDKv.js";import"./useDescription-BTR78MKM.js";import"./VisuallyHidden-vq1pC-28.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cn8MVlKy.js";import"./createLucideIcon-KCEZs7i4.js";import"./chevron-right-Dw6-aKKA.js";import"./Button-ByNh2qq9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";import"./Heading-BTDJmRUD.js";import"./FieldError-BeuaPtx6.js";import"./Text-FE_S5mZr.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
