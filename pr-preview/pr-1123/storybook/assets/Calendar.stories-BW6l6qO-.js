import{$ as c,a as m,r as l,j as d}from"./iframe-BkVzc2jf.js";import{C as n}from"./Calendar-DAJSQ5d5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BTwCREOB.js";import"./Button-DC3ZjroM.js";import"./utils-BygJjxp_.js";import"./clsx-B-dksMZM.js";import"./Hidden-R6jv-Zbn.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./RSPContexts-LbRQIp3l.js";import"./Text-Cl9gTfqF.js";import"./useDateFormatter-CsQR5dx-.js";import"./useControlledState-LZdmvusm.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bow5QfA4.js";import"./useEvent-D9_iLH0i.js";import"./getScrollParent-CTmctxBz.js";import"./scrollIntoView-Yjo_y5ur.js";import"./useDescription-CYDZbRK4.js";import"./VisuallyHidden-BWjyWmb6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CzxarG9f.js";import"./createLucideIcon-BjNI9TSY.js";import"./chevron-right-B8IgdiFC.js";import"./Button-ZTyLTH5E.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./Heading-DO0prvhr.js";import"./FieldError-BwPk1h0q.js";import"./Text-B79zESTX.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
