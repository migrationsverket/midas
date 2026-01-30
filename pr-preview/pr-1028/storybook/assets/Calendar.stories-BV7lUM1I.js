import{$ as c,a as m,r as l,j as d}from"./iframe-nOsxirQX.js";import{C as n}from"./Calendar-DNaIrOdn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CGrbJ8RQ.js";import"./Button-DcANhavY.js";import"./utils-Bx1o-H88.js";import"./clsx-B-dksMZM.js";import"./Hidden-BQXizKKD.js";import"./useFocusRing-D89DlAJn.js";import"./index-BBtn04JY.js";import"./index-4Tg7UEMT.js";import"./useLabels-quzXmLXQ.js";import"./useButton-Bh9NqEET.js";import"./RSPContexts-qetO-Bd7.js";import"./Text-B8fVM-qM.js";import"./useDateFormatter-BWf-XZ0K.js";import"./useControlledState-DDwIrHc5.js";import"./useLocalizedStringFormatter-CEAmhm35.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DrecfZNp.js";import"./useEvent-BSYUz00V.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-JIsLYad4.js";import"./VisuallyHidden-D_ts-6oX.js";import"./clsx-Ciqy0D92.js";import"./Button-C_6tr8VE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BrifjVpT.js";import"./createLucideIcon-BM5xacqz.js";import"./chevron-left-CbEb4X-j.js";import"./chevron-right-Dc1i4B3c.js";import"./Heading-9EKTJ505.js";import"./FieldError-BRIeksHU.js";import"./Text-66nZ78iJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
