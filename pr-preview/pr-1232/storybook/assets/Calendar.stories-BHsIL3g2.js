import{$ as c,a as m,r as l,j as d}from"./iframe-CFSsLpc3.js";import{C as n}from"./Calendar-DhQ9vg9f.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CgcK3igu.js";import"./Button-BA4ocZWH.js";import"./utils-CgvAx7Eh.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLuFLk7t.js";import"./useFocusRing-BscyqCba.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./RSPContexts-Dl7sCpzY.js";import"./Text-CxyFIK0P.js";import"./useDateFormatter-TMPsq2FI.js";import"./useControlledState-CbBMw6Jg.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BcB2IZgf.js";import"./useEvent-DS2KGNQU.js";import"./getScrollParent-meA_uFiD.js";import"./scrollIntoView-DIXoB_F8.js";import"./useDescription-DR9fGcHM.js";import"./VisuallyHidden-CJUN9Oa8.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CPnXM7NT.js";import"./createLucideIcon-DwZpSpKK.js";import"./chevron-right-B73iyMJW.js";import"./Button-BpZ-gEJa.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Heading-BC1iKRRv.js";import"./FieldError-D6ZDrv96.js";import"./Text-DJekINTm.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
