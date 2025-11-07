import{$ as p,a as m,r as l,j as d}from"./iframe-BjoitsA_.js";import{C as n}from"./Calendar-CFafgiqh.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DTo52bf5.js";import"./Button-dCjcK3xZ.js";import"./utils-CqffejwQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dlma28aT.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./RSPContexts-BM0YpPTx.js";import"./Text-D2_Dqxb_.js";import"./useDateFormatter-R0-p3w_6.js";import"./useControlledState-mjBa_ctK.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHegrLj_.js";import"./useEvent-DyYZuFIh.js";import"./getScrollParent-B0dWRzBe.js";import"./scrollIntoView-Bgf_9KZM.js";import"./useDescription-CZo8T5nr.js";import"./VisuallyHidden-NXDdaJHH.js";import"./clsx-Ciqy0D92.js";import"./Button-CcGX5Wmo.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CNrUrsyr.js";import"./chevron-right-LlxqxtM5.js";import"./Heading-Ch4W9UFX.js";import"./FieldError-CQa2IgQG.js";import"./Text-C1C2cp8Y.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
