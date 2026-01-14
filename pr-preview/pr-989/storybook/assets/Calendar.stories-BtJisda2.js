import{$ as c,a as m,r as l,j as d}from"./iframe-pRNC08Mv.js";import{C as n}from"./Calendar-MEoKWE2x.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dq2Ci5Jp.js";import"./Button-CNTckaGC.js";import"./utils-DRYUmso-.js";import"./clsx-B-dksMZM.js";import"./Hidden-BKem9kXH.js";import"./useFocusRing-Bjmrddhc.js";import"./index-BlGFDQle.js";import"./index-D5Pm5N6C.js";import"./useLabels-BEx_Ux0v.js";import"./useButton-CNCxBdco.js";import"./RSPContexts-BMZfSrMw.js";import"./Text-BEH_DbAf.js";import"./useDateFormatter-CwV-IN4m.js";import"./useControlledState-BGR8S5qz.js";import"./useLocalizedStringFormatter-D4_cU62N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C2RtT9th.js";import"./useEvent-C7lBE6BD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CGxbLJcS.js";import"./VisuallyHidden-DQpyket6.js";import"./clsx-Ciqy0D92.js";import"./Button-G7WsQ-Sd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzWjGcyN.js";import"./createLucideIcon-ALsTbPK_.js";import"./chevron-left-BikEO_vU.js";import"./chevron-right-BJnUbuMm.js";import"./Heading-BUJgb2zv.js";import"./FieldError-RDINXYGh.js";import"./Text-Bm0bWJiD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
