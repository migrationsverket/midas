import{$ as c,a as m,r as l,j as d}from"./iframe-jXOFY8ly.js";import{C as n}from"./Calendar-fO5olCeY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQtU_MJM.js";import"./Button-_V1yAu90.js";import"./utils-DMRbnQmp.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1RMCDHa.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./RSPContexts-uCM8UasA.js";import"./Text-NASTJ5SQ.js";import"./useDateFormatter-CyvA4SsI.js";import"./useControlledState-B_hf4unm.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BTpp0IST.js";import"./useEvent-Dx7k8S5m.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DuiYQhpC.js";import"./VisuallyHidden-B9izHnXN.js";import"./clsx-Ciqy0D92.js";import"./Button-BJ-Glf4b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./createLucideIcon-CZVrkezG.js";import"./chevron-left-6OXfZ7sR.js";import"./chevron-right-COCRba-2.js";import"./Heading-CtLvrIy9.js";import"./FieldError-DpwWyisz.js";import"./Text-DBF8n_Yj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
