import{$ as c,a as m,r as l,j as d}from"./iframe-D3WYY-Ai.js";import{C as n}from"./Calendar-C5t1rSI4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CmDQ5YSG.js";import"./Button-tr2fIea8.js";import"./utils-o1ARpK5H.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKj3_QtK.js";import"./useFocusRing-BMUWt-Rd.js";import"./index-BB82YbIc.js";import"./index-CjRvgmYY.js";import"./useLabels-_oHB6RBX.js";import"./useButton-CjQiPJKb.js";import"./RSPContexts-eW0iJSmp.js";import"./Text-BhwLGGZ9.js";import"./useDateFormatter-BwyckKk9.js";import"./useControlledState-Bp5n3e-O.js";import"./useLocalizedStringFormatter-Dtt9NC--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFs1Rl-B.js";import"./useEvent--3HdY_tz.js";import"./getScrollParent-CKtVlEpI.js";import"./scrollIntoView-DlV6Y38B.js";import"./useDescription-B3ZOGkyf.js";import"./VisuallyHidden-kDFIOMHt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CqUi1zX0.js";import"./createLucideIcon-B7GA4VP9.js";import"./chevron-right-3GvX-ZIW.js";import"./Button-DNgVoL5M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-m_o1fVtk.js";import"./Heading-BI9iHQaF.js";import"./FieldError-C9wlfJJH.js";import"./Text-C1vqtxX1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
