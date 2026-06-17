import{$ as c,a as m,r as l,j as d}from"./iframe-Cf0gSBlV.js";import{C as n}from"./Calendar-FGNUqAaz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bh9LWfbG.js";import"./Button-lgeK8kME.js";import"./utils-D5wiuCjg.js";import"./clsx-B-dksMZM.js";import"./Hidden-BBPU8yn5.js";import"./useFocusRing-CU4h4oO2.js";import"./index-Cq4gtJu1.js";import"./index-BGK7RvPC.js";import"./useLabel-tj1Q-TRL.js";import"./useLabels-CtzpOF36.js";import"./useButton-BvfyWom1.js";import"./RSPContexts-hWKFxDS1.js";import"./Text-DVsPk7Go.js";import"./useDateFormatter-BPTZDA4V.js";import"./useControlledState-CCD2Jo-X.js";import"./useLocalizedStringFormatter-jI7Oi0kB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DTfBysFi.js";import"./useEvent-y-qPMRaI.js";import"./getScrollParent-DJJhTJvR.js";import"./scrollIntoView-C0W73uc3.js";import"./useDescription-M0SxojFs.js";import"./VisuallyHidden-Qxum1xZt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dio8F7LV.js";import"./createLucideIcon-CuxZToxj.js";import"./chevron-right-BY1uCzDW.js";import"./Button-t2ToDX_o.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BePTNged.js";import"./Heading-_Rw9Dbn-.js";import"./FieldError-qRtSRcyk.js";import"./Text-BVKObbzr.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
