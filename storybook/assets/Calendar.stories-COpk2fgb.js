import{$ as c,a as m,r as l,j as d}from"./iframe-BgNoMb1-.js";import{C as n}from"./Calendar-yx9QT-MA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CRR7V4wt.js";import"./Button-DuzmOBcr.js";import"./utils-Cf4EtztR.js";import"./clsx-B-dksMZM.js";import"./Hidden-Oz1FCPRp.js";import"./useFocusRing-CdEgrIPc.js";import"./index-C0ZyhkQq.js";import"./index-BH1r8cCI.js";import"./useLabel-BFLzfKfJ.js";import"./useLabels-D5sc6rkA.js";import"./useButton-BqxH6UIc.js";import"./RSPContexts-CioY2Bmm.js";import"./Text-DTrIh8Ah.js";import"./useDateFormatter-BV_aVt7g.js";import"./useControlledState-ITUua2kv.js";import"./useLocalizedStringFormatter-pefhPmo1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BNg4x7Vy.js";import"./useEvent-Cba8ocAv.js";import"./getScrollParent-B4yHCD0_.js";import"./scrollIntoView-ByOssAro.js";import"./useDescription-Cy6BYOpX.js";import"./VisuallyHidden-CAQ7uxZn.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Bz2IAhDP.js";import"./createLucideIcon-DvRkoRzG.js";import"./chevron-right-I_jexdiC.js";import"./Button-gs8bFcYH.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D0yQtf2N.js";import"./Heading-CLjp5uV-.js";import"./FieldError-HTMfHJDa.js";import"./Text-CfXADzCS.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
