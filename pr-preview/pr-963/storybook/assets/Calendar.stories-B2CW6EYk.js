import{$ as p,a as m,r as l,j as d}from"./iframe-BludVCPL.js";import{C as n}from"./Calendar-B_KgO6ST.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CBxXk_QO.js";import"./Button-CjGnslnG.js";import"./utils-BoYzwdTq.js";import"./clsx-B-dksMZM.js";import"./Hidden-DiUQMeVN.js";import"./useFocusRing-Bo_hMFPQ.js";import"./index-nZf0-c-4.js";import"./index-CLlIRgpI.js";import"./useLabels-CO3fVOFf.js";import"./useButton-B0B4GjtL.js";import"./RSPContexts-iVsZHsvb.js";import"./Text-DjPdOjsD.js";import"./useDateFormatter-CqJMazHg.js";import"./useControlledState-CuHjUcW0.js";import"./useLocalizedStringFormatter-B4WIXBM0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BCuxP9ga.js";import"./useEvent-C0paImUG.js";import"./getScrollParent-DUD7FXJ3.js";import"./scrollIntoView-Dnq7ttBi.js";import"./useDescription-Ci4JSH0r.js";import"./VisuallyHidden-vUa_tkI4.js";import"./clsx-Ciqy0D92.js";import"./Button-BMfaash4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXNZT2cC.js";import"./createLucideIcon-DcDehA1r.js";import"./chevron-right-B21BUPun.js";import"./Heading-rKRtmMTC.js";import"./FieldError-Crs15S47.js";import"./Text-4OIt-jaA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
