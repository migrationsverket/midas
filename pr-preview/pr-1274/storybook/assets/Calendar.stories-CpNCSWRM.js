import{$ as c,a as m,r as l,j as d}from"./iframe-BrwpvQHc.js";import{C as n}from"./Calendar-MOuPGwFu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BNIX7Wo_.js";import"./Button-CyBHSIdo.js";import"./utils-BACMs3jS.js";import"./clsx-B-dksMZM.js";import"./Hidden-62uiVpgl.js";import"./useFocusRing-ay8XrwpJ.js";import"./index-e4zmhYiJ.js";import"./index-CfMCfkTD.js";import"./useLabel-1zqhq5YX.js";import"./useLabels-D7FAWWUV.js";import"./useButton-DKTae0i9.js";import"./RSPContexts-LKuPHdSI.js";import"./Text-Cp5vE00Z.js";import"./useDateFormatter-DFhsNBZ4.js";import"./useControlledState-BuArS6Zg.js";import"./useLocalizedStringFormatter-CkzWLLcE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ds1l6VL6.js";import"./useEvent-D8YMy7IN.js";import"./getScrollParent-CBxp-l9V.js";import"./scrollIntoView-CyZOtQhj.js";import"./useDescription-DfwBnCrb.js";import"./VisuallyHidden-DRJAfVxE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DwQLSzce.js";import"./createLucideIcon-DL41wzn8.js";import"./chevron-right-QIgqaJtF.js";import"./Button-BhMRkAV6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-V2VPiIBS.js";import"./Heading-B2xW-WDi.js";import"./FieldError-Bn-kD1g2.js";import"./Text-B8xII3uk.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
