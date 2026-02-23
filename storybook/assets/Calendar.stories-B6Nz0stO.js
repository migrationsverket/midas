import{$ as c,a as m,r as l,j as d}from"./iframe-yxLRWdXt.js";import{C as n}from"./Calendar-DK7sH_Qj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CdBYVyLo.js";import"./Button-DaOEEwin.js";import"./utils-RUxwEKRT.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvV1DSEo.js";import"./useFocusRing-CMPG7W5-.js";import"./index-Me9fHHrS.js";import"./index-DoQ_J8kd.js";import"./useLabels-DUi63ROe.js";import"./useButton-wbPnMjSj.js";import"./RSPContexts-DOW2uIFv.js";import"./Text-HPHn4yG2.js";import"./useDateFormatter-CWMEBHta.js";import"./useControlledState-DAjRfDGl.js";import"./useLocalizedStringFormatter-BxQYxci3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B53FwWc3.js";import"./useEvent-pDZ8-eJ4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BBPfKYuj.js";import"./VisuallyHidden-C3h4Jc2h.js";import"./clsx-Ciqy0D92.js";import"./Button-CDWvCVpB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CPEv82p3.js";import"./createLucideIcon-D4BAvLWW.js";import"./chevron-left-Tb4dtBef.js";import"./chevron-right-CHEs0L-J.js";import"./Heading-9QqUoZP5.js";import"./FieldError-BnWIpF2n.js";import"./Text-CX657Sqj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
