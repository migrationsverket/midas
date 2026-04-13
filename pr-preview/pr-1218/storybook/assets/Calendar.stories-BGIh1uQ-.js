import{$ as c,a as m,r as l,j as d}from"./iframe-ByTr7nlQ.js";import{C as n}from"./Calendar-BlnLMw33.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-6Q1y08dD.js";import"./Button-BSq_-Fzo.js";import"./utils-BtbeVzab.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuUimY0Q.js";import"./useFocusRing-BjdQLYQY.js";import"./index-tkq_ZtSc.js";import"./index-BqV0DkUs.js";import"./useLabel-Dw4tdRRI.js";import"./useLabels-BssvX8bv.js";import"./useButton-CMclMGMy.js";import"./RSPContexts-6m7Yijnj.js";import"./Text-B83XfqSN.js";import"./useDateFormatter-BDCUUJ-a.js";import"./useControlledState-B7X5e3Qm.js";import"./useLocalizedStringFormatter-ByBwQZl0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B484aGL4.js";import"./useEvent-DM7MuSEq.js";import"./getScrollParent-C2971BjC.js";import"./scrollIntoView-1sk2wFtb.js";import"./useDescription-DLDUSAjo.js";import"./VisuallyHidden-jMWhN52g.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-8jos5gTE.js";import"./createLucideIcon-hQqGcF6U.js";import"./chevron-right-DqFRobeg.js";import"./Button-CH4Ce674.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B9QStVrX.js";import"./Heading-BOOm_FoR.js";import"./FieldError-B_MaF9By.js";import"./Text-dWwsRFEm.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
