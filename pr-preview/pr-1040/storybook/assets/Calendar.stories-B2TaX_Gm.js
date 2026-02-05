import{$ as c,a as m,r as l,j as d}from"./iframe-CKGACLCX.js";import{C as n}from"./Calendar-5j0R_9Hj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-jeD-Mbn_.js";import"./Button-54xKiT29.js";import"./utils-C1cYwrRL.js";import"./clsx-B-dksMZM.js";import"./Hidden-DNSOrP-i.js";import"./useFocusRing-BuOXP8Hw.js";import"./index-DoQf3qpc.js";import"./index-oFvCdSIv.js";import"./useLabels-DIZFogYA.js";import"./useButton-BILFtFpB.js";import"./RSPContexts-B9y_dSfG.js";import"./Text-BArB5QvF.js";import"./useDateFormatter-BMlqik3s.js";import"./useControlledState-DDl3VCJO.js";import"./useLocalizedStringFormatter-BI6jibPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DCJ4yyri.js";import"./useEvent-dreapgiA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DWckP2Ca.js";import"./VisuallyHidden-BHIvprIA.js";import"./clsx-Ciqy0D92.js";import"./Button-8AXkha9Y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQvS5eyN.js";import"./createLucideIcon-RPOR-KCQ.js";import"./chevron-left-B1u-XwO7.js";import"./chevron-right-C1KaH-PG.js";import"./Heading-BGD7UjEp.js";import"./FieldError-DI7Xo_Io.js";import"./Text-BXvNDZo-.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
