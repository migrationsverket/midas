import{$ as c,a as m,r as l,j as d}from"./iframe-CPefQOMB.js";import{C as n}from"./Calendar-CX9IhBMY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CbWJmxmb.js";import"./Button-CZP9j9FA.js";import"./utils-DEaTr3Fo.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMfLv80K.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./RSPContexts-BAtoVYGO.js";import"./Text-DYVOn2Uj.js";import"./useDateFormatter-DxWOn2G4.js";import"./useControlledState-D3MUrnpH.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-uG-Bb7aW.js";import"./useEvent-DReQVrX4.js";import"./getScrollParent-Dax8D36d.js";import"./scrollIntoView-SfcehlMa.js";import"./useDescription-Cd_q-cvg.js";import"./VisuallyHidden-En7Y8aD0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D1qNF-Mp.js";import"./createLucideIcon-CMS1EKmC.js";import"./chevron-right-dAugytje.js";import"./Button-BiVXJ2cY.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";import"./Heading-BSJNcz6Y.js";import"./FieldError-HmUKiVb0.js";import"./Text-CxFNT2uR.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
