import{$ as c,a as m,r as l,j as d}from"./iframe-DrmPUhtX.js";import{C as n}from"./Calendar-C6ReT9Jt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CR2Ca8VY.js";import"./Button-BRd7RKkm.js";import"./utils-Dua4TRiH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtcA-10V.js";import"./useFocusRing-BNHXCoxm.js";import"./index-PAOxTS2r.js";import"./index-D-dIolA3.js";import"./useLabels-BuRHQX82.js";import"./useButton-BeQ8yPDi.js";import"./RSPContexts-ZJmi3UUb.js";import"./Text-CxmjGSV2.js";import"./useDateFormatter-DxR183qI.js";import"./useControlledState-CPqfCSd5.js";import"./useLocalizedStringFormatter-5H_vyTJU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BkQbXkzY.js";import"./useEvent-CawZJgI-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CYDi8KlD.js";import"./VisuallyHidden-bA_PzrHg.js";import"./clsx-Ciqy0D92.js";import"./Button-B2oaCNDe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CK8ulSsr.js";import"./createLucideIcon-lnTltRl9.js";import"./chevron-left-DF_SVnPP.js";import"./chevron-right-jv9MqgU6.js";import"./Heading-D9rDmJb2.js";import"./FieldError-obpxZCHn.js";import"./Text-DkoI531E.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
