import{$ as c,a as m,r as l,j as d}from"./iframe-DY-bI3Dg.js";import{C as n}from"./Calendar-DjfpMDaI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DI662isr.js";import"./Button-BtfH31ZB.js";import"./utils-BUdZKq-e.js";import"./clsx-B-dksMZM.js";import"./Hidden-CIKdpVxl.js";import"./useFocusRing-CoHcHCSJ.js";import"./index-BbO7iBgM.js";import"./index-BlJnpVmq.js";import"./useLabels-BM327Hkh.js";import"./useButton-BbpHsEWl.js";import"./RSPContexts-kc53uUDM.js";import"./Text-BkObjjcV.js";import"./useDateFormatter-CtYf-UbQ.js";import"./useControlledState-DqXLKbh_.js";import"./useLocalizedStringFormatter-C3XMQvqw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D_XpAwsc.js";import"./useEvent-yA0ydpfu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-MJqaxJYE.js";import"./VisuallyHidden-Bco5rUHP.js";import"./clsx-Ciqy0D92.js";import"./Button-D_pZMGSb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C40Mbmtc.js";import"./createLucideIcon-WJDXuKIa.js";import"./chevron-left-whkbX3yh.js";import"./chevron-right-B8UH8J0c.js";import"./Heading-eS0c-HBo.js";import"./FieldError-q3KGq0Kn.js";import"./Text-Ds5qe3f-.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
