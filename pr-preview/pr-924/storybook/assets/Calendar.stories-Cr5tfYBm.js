import{$ as p,a as m,r as l,j as d}from"./iframe-CHZFuQnS.js";import{C as n}from"./Calendar-Cd_5XbYN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-xyUuALI9.js";import"./Button-UHVq7cxV.js";import"./utils-BMim5o3v.js";import"./clsx-B-dksMZM.js";import"./Hidden-cAwEj1a8.js";import"./useFocusRing-CavgNYvf.js";import"./index-w7Yupy6f.js";import"./index-CDEgt3K9.js";import"./useLabels-BBjpyqdS.js";import"./useButton-BIaKLlnn.js";import"./RSPContexts-FGdyfODE.js";import"./Text-Dd_mwADg.js";import"./useDateFormatter-CU4RunV3.js";import"./useControlledState-BUxHgcPu.js";import"./useLocalizedStringFormatter-ByyIuzas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-uNiCuwZ7.js";import"./useEvent-dHHY_xOM.js";import"./getScrollParent-CIQKldLY.js";import"./scrollIntoView-DfjOOoWp.js";import"./useDescription-Ciz68wQ_.js";import"./VisuallyHidden-CfdiIqbk.js";import"./clsx-Ciqy0D92.js";import"./Button-CKnin4O7.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-EluUf1Sj.js";import"./chevron-right-BzoViKEK.js";import"./Heading-CV0vaF0r.js";import"./FieldError-B-mi-Hc9.js";import"./Text-BMVuAeY2.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
