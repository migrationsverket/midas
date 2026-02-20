import{$ as c,a as m,r as l,j as d}from"./iframe-C97-KldL.js";import{C as n}from"./Calendar-CR7CJcs0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3nRraR2.js";import"./Button-By32KbkP.js";import"./utils-CT49lX3Q.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cns8g0IT.js";import"./useFocusRing-BaDVQaIN.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./RSPContexts-CVaQzuT2.js";import"./Text-BWtrJhgb.js";import"./useDateFormatter-BiIl8MCn.js";import"./useControlledState-BASohq_6.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-COwk1XTI.js";import"./useEvent-CjzdKbLS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B32pZrdJ.js";import"./VisuallyHidden-cBRDBRce.js";import"./clsx-Ciqy0D92.js";import"./Button-TcfJGFPW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";import"./createLucideIcon-DyW2bSMY.js";import"./chevron-left-CWdzEOFM.js";import"./chevron-right-BQRpHtak.js";import"./Heading-CekMixw3.js";import"./FieldError-CzHY_m0E.js";import"./Text-kfKvhgrO.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
