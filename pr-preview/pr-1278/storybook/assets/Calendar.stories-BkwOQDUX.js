import{$ as c,a as m,r as l,j as d}from"./iframe-CN8uU3WK.js";import{C as n}from"./Calendar-COHC4FiW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader--T34xqhA.js";import"./Button-BnmvhNcQ.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./Hidden-i_4Qa2VQ.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./RSPContexts-FWWfLY0V.js";import"./Text-DntZGJ-I.js";import"./useDateFormatter-CCKptu_R.js";import"./useControlledState-n2go4XxZ.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqJQgMrO.js";import"./useEvent-B3wdZg5O.js";import"./getScrollParent-g_sxJttE.js";import"./scrollIntoView-dW3ZURKy.js";import"./useDescription-DVfq5zSO.js";import"./VisuallyHidden-D1gwq_r2.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DXsH1K7_.js";import"./createLucideIcon-D_RMlAle.js";import"./chevron-right-C4iIvsvb.js";import"./Button-BVfd33cu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Heading-uOARh3Em.js";import"./FieldError-CQyQ10Lj.js";import"./Text-DvVr5DU7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
