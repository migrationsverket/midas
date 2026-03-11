import{$ as c,a as m,r as l,j as d}from"./iframe-CvgTjsRI.js";import{C as n}from"./Calendar-DClBZsIm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CYxSQg7Y.js";import"./Button-5hgjL52o.js";import"./utils-DsGHCuDD.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bz8_ARKx.js";import"./useFocusRing-Bf69ssZP.js";import"./index-BUwV2pti.js";import"./index-CCCX_Q-4.js";import"./useLabels-B-EK2xcM.js";import"./useButton-DTqgbWNm.js";import"./RSPContexts-B-4MhJIC.js";import"./Text-Bxgne8zr.js";import"./useDateFormatter-CZzEHC9y.js";import"./useControlledState-DEiVg5eh.js";import"./useLocalizedStringFormatter-CrfJ-HgW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DWWc9gwe.js";import"./useEvent-ChWISaFS.js";import"./getScrollParent-3h6gjZ9W.js";import"./scrollIntoView-DKPA2TnM.js";import"./useDescription-QrPMwBKV.js";import"./VisuallyHidden-DnWZa0YB.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-fcE0c7hp.js";import"./createLucideIcon-Be0qHJux.js";import"./chevron-right-BXRfMv_L.js";import"./Button-CIHCm98a.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-COXV7AZN.js";import"./Heading-D5PrjMzm.js";import"./FieldError-BQ0145L6.js";import"./Text-CJZcBszR.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
