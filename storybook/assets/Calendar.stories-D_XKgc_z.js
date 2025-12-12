import{$ as p,a as m,r as l,j as d}from"./iframe-Cy9xQwF6.js";import{C as n}from"./Calendar-BLpIctJb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-1RcAU0oP.js";import"./Button-D4DaLWR4.js";import"./utils-CX91mN24.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMiuVEcg.js";import"./useFocusRing-eGyNtlnv.js";import"./index-wz2WhQ9W.js";import"./index-CLKliA_Q.js";import"./useLabels-Bn5QEtDZ.js";import"./useButton-LhbsvKtL.js";import"./RSPContexts-BygzARCD.js";import"./Text-EiK0GjXA.js";import"./useDateFormatter-BetCRZ-C.js";import"./useControlledState-CLnNsNKS.js";import"./useLocalizedStringFormatter-6fLhkzE_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-0mFvQOXA.js";import"./useEvent-DGA9jmm-.js";import"./getScrollParent-hBxNwP5K.js";import"./scrollIntoView-CPTgXU84.js";import"./useDescription-eJSpB747.js";import"./VisuallyHidden-DExMWTTn.js";import"./clsx-Ciqy0D92.js";import"./Button-BTN2abfL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BbLBIRys.js";import"./createLucideIcon-DOfRWyVf.js";import"./chevron-right-CFcU8O5S.js";import"./Heading-C7z8kAIo.js";import"./FieldError-DlJvAPsp.js";import"./Text-in_uCIcq.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
