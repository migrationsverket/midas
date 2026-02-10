import{$ as c,a as m,r as l,j as d}from"./iframe-D6ADc9_c.js";import{C as n}from"./Calendar-BrQFlil0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DPuKEzzW.js";import"./Button-BD1tt09E.js";import"./utils-Co-WyaVB.js";import"./clsx-B-dksMZM.js";import"./Hidden-BAUwWGh2.js";import"./useFocusRing-QJf4MrA-.js";import"./index-D1aif8GU.js";import"./index-Ctq9vtSb.js";import"./useLabels-BSs_hlue.js";import"./useButton-RmGmQnEE.js";import"./RSPContexts-CeqDtQgt.js";import"./Text-Uw6K1FwN.js";import"./useDateFormatter-CTAkK3nr.js";import"./useControlledState-CEf-u91N.js";import"./useLocalizedStringFormatter-BzbrAoH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DjAKDv4V.js";import"./useEvent-CyxeHTbo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-3hQMCdT7.js";import"./VisuallyHidden-CBsbYA_W.js";import"./clsx-Ciqy0D92.js";import"./Button-CIEzI-V7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTSyD4LW.js";import"./createLucideIcon-D0OOsTjF.js";import"./chevron-left-B47JsTT9.js";import"./chevron-right-CbqTefFH.js";import"./Heading-aqQpVgYi.js";import"./FieldError-DfqU_xU4.js";import"./Text-Cpi5Nlnk.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
