import{$ as c,a as m,r as l,j as d}from"./iframe-BXrSm-hy.js";import{C as n}from"./Calendar-D-Smzezl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-wNHA_9Rs.js";import"./Button-QWm8aeY3.js";import"./utils-m8hafyc1.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bt1SQac9.js";import"./useFocusRing-Dolnnvn8.js";import"./index-DH1xR7sx.js";import"./index-BEWugSXc.js";import"./useLabels-BpFbPl_Z.js";import"./useButton-lx5Wqlq6.js";import"./RSPContexts-BrZ6stA1.js";import"./Text-D-y5Nkc_.js";import"./useDateFormatter-DLoxbgbo.js";import"./useControlledState-D-2kZI1H.js";import"./useLocalizedStringFormatter-DxuMEbeM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2SJ5PwR.js";import"./useEvent-B4KqqYDZ.js";import"./getScrollParent-DJrEkJWW.js";import"./scrollIntoView-Be-7cfO7.js";import"./useDescription-BgOqUMKe.js";import"./VisuallyHidden-CdQ2OkWx.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CFhM7lgf.js";import"./createLucideIcon-DYDRqzsr.js";import"./chevron-right-B84PIAzS.js";import"./Button-DLjOZTyV.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dv29l914.js";import"./Heading-BGxn5ss1.js";import"./FieldError-CDqWfdJf.js";import"./Text-BpOUZ-T-.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
