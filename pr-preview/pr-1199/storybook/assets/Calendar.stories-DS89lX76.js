import{$ as c,a as m,r as l,j as d}from"./iframe-BbWt9Hzs.js";import{C as n}from"./Calendar-BpvmTDmo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dxc71LWw.js";import"./Button-EJIqjvoq.js";import"./utils-KZAH4xlx.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJHG9IZy.js";import"./useFocusRing-B9bvRRmX.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./RSPContexts-DKdTaTdn.js";import"./Text-DSe1JSn0.js";import"./useDateFormatter-DaOHWIJ9.js";import"./useControlledState-DkbXJDJp.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C-4xU-qa.js";import"./useEvent-ngzT0EBz.js";import"./getScrollParent-D7jC5O_o.js";import"./scrollIntoView-CPHUDPPP.js";import"./useDescription-B5vJv64Z.js";import"./VisuallyHidden-zJEwCiu7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CswpZWO4.js";import"./createLucideIcon-BJCyfpuO.js";import"./chevron-right-BxVZ8P-y.js";import"./Button-C0W8ghEp.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Heading-BkvoezUL.js";import"./FieldError-BzVhs6Ln.js";import"./Text-DLXHrpA7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
