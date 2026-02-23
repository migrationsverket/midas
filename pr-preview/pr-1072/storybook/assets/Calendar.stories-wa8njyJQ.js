import{$ as c,a as m,r as l,j as d}from"./iframe-BbEdCWTo.js";import{C as n}from"./Calendar-mQc6g0Ic.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLFgCze4.js";import"./Button-D-EmDY8c.js";import"./utils-0gBzt-f2.js";import"./clsx-B-dksMZM.js";import"./Hidden-dhoH6OsW.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./RSPContexts-C3UWmBTv.js";import"./Text-UryQGSay.js";import"./useDateFormatter-B4NKQKRa.js";import"./useControlledState-DT2KBo_t.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BH4-Fego.js";import"./useEvent-BtmHdsI2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-yyfT0KSm.js";import"./VisuallyHidden-Ci4G53k_.js";import"./clsx-Ciqy0D92.js";import"./Button-FljdEIyw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./createLucideIcon-DVbOGhvF.js";import"./chevron-left-DNFGbakV.js";import"./chevron-right-BJz4oL58.js";import"./Heading-B0YRdNz0.js";import"./FieldError-ClDhUf0E.js";import"./Text-w6pc7bdl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
