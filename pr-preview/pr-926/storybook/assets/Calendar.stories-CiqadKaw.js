import{$ as p,a as m,r as l,j as d}from"./iframe-1vIqjnby.js";import{C as n}from"./Calendar-B84Wb4kg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjKxtA9q.js";import"./Button-I0OIDbhB.js";import"./utils-DP4tvbox.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6xvz5Aa.js";import"./useFocusRing-qKukOunu.js";import"./index-fb0U5xET.js";import"./index-CQziH2IA.js";import"./useLabels-Cb18_xpb.js";import"./useButton-yhDvMx9o.js";import"./RSPContexts-a3xvsoTH.js";import"./Text-D5j6OND1.js";import"./useDateFormatter-CfLB3wO-.js";import"./useControlledState-Gd009-3T.js";import"./useLocalizedStringFormatter-CJVMb10g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bqx-dezR.js";import"./useEvent-CSNMnz9a.js";import"./getScrollParent-QIQly7dc.js";import"./scrollIntoView-jQrGDwuP.js";import"./useDescription-BqgyIHM3.js";import"./VisuallyHidden-BDeEE_jR.js";import"./clsx-Ciqy0D92.js";import"./Button-lao2U65D.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BEyZRkKF.js";import"./chevron-right-DKGOC5SM.js";import"./Heading-Bxf8NlZx.js";import"./FieldError-cJah9zTn.js";import"./Text-xTP-Xoo1.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
