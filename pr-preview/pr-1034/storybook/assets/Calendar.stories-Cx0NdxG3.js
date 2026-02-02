import{$ as c,a as m,r as l,j as d}from"./iframe-BQxOfzlW.js";import{C as n}from"./Calendar-DGiL6KkV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CiOTuEK5.js";import"./Button-B8qi-92i.js";import"./utils-BXBr2vrV.js";import"./clsx-B-dksMZM.js";import"./Hidden-VLZyivb1.js";import"./useFocusRing-DQFHtdEB.js";import"./index-DYsqMbTI.js";import"./index-D95GD9Yp.js";import"./useLabels-zI525H0W.js";import"./useButton-C-Vp9A3A.js";import"./RSPContexts-CmlY3_rm.js";import"./Text-BZHSWyDa.js";import"./useDateFormatter-BsHWsWQZ.js";import"./useControlledState-DfXJmpIS.js";import"./useLocalizedStringFormatter-CK8fZOyp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CJqCrF9H.js";import"./useEvent-BAia882S.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-n_gbERc3.js";import"./VisuallyHidden-Sl6NNMXK.js";import"./clsx-Ciqy0D92.js";import"./Button-BPwMgPSD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_higiKm.js";import"./createLucideIcon-5RmQ-8qX.js";import"./chevron-left-AwRFpySn.js";import"./chevron-right-TrtTQP1J.js";import"./Heading-Cjc1je68.js";import"./FieldError-dlUiDVEq.js";import"./Text-XBZd4_As.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
