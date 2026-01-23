import{$ as c,a as m,r as l,j as d}from"./iframe-C1OFF234.js";import{C as n}from"./Calendar-eDvSBnxg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CHDvYMwc.js";import"./Button-tVK2UY63.js";import"./utils-x5dDW9rF.js";import"./clsx-B-dksMZM.js";import"./Hidden-BozQ0zHL.js";import"./useFocusRing-JwpRizWK.js";import"./index-D4URSzcq.js";import"./index-eVP2pS4l.js";import"./useLabels-Cjzy89EL.js";import"./useButton-Dq-U0g3P.js";import"./RSPContexts-BR-G7MnE.js";import"./Text-BAGfifAI.js";import"./useDateFormatter-Ci6pc7pP.js";import"./useControlledState-D7t5NlDI.js";import"./useLocalizedStringFormatter-Bzedv_wh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CYi0l6sh.js";import"./useEvent-BTaNZmDL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D1uoBPC6.js";import"./VisuallyHidden-BoMhy8hX.js";import"./clsx-Ciqy0D92.js";import"./Button-DnTBefjE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVNI7-AU.js";import"./createLucideIcon-CLCZDCft.js";import"./chevron-left-B9MKfMB6.js";import"./chevron-right-DDLYwYar.js";import"./Heading-SD5cG3Zu.js";import"./FieldError-BmlSVkKV.js";import"./Text-DdQgr9hb.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
