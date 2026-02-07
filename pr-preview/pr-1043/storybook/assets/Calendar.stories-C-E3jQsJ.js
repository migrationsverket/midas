import{$ as c,a as m,r as l,j as d}from"./iframe-CuWNjTRb.js";import{C as n}from"./Calendar-DHZBo7eC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dt02zgHK.js";import"./Button-DcYqIknv.js";import"./utils-bTshPwuy.js";import"./clsx-B-dksMZM.js";import"./Hidden-CC5A1H5b.js";import"./useFocusRing-BOU0QdDc.js";import"./index-BVMh-c2E.js";import"./index-BG9E7EvN.js";import"./useLabels-Z2fhjGWT.js";import"./useButton-CheLbNvO.js";import"./RSPContexts-BKEbUSq3.js";import"./Text-YALf1zl3.js";import"./useDateFormatter-BoVWe2YN.js";import"./useControlledState-JaG_E2x3.js";import"./useLocalizedStringFormatter-DE24hlzI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DpHPQ8i-.js";import"./useEvent-MAJC2drM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BnU31H3h.js";import"./VisuallyHidden-BJty33Lz.js";import"./clsx-Ciqy0D92.js";import"./Button-xnDb1Lqn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDPSUyK3.js";import"./createLucideIcon-CyYJB5cI.js";import"./chevron-left-Dtv9P_5l.js";import"./chevron-right-D-k5qax8.js";import"./Heading-5XGAzLHj.js";import"./FieldError-DPMeHFzQ.js";import"./Text-nCheY5Fg.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
