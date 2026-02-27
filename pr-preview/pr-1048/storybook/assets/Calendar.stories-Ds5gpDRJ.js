import{$ as c,a as m,r as l,j as d}from"./iframe-D7a0roTE.js";import{C as n}from"./Calendar-Bnnk3pj-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLsuVnS9.js";import"./Button-202_c7Iv.js";import"./utils-CCwC5od5.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dy39TreI.js";import"./useFocusRing-CFRP2Jek.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./RSPContexts-CZ_mWjdj.js";import"./Text-BeZ98S-S.js";import"./useDateFormatter-mbUC_NBd.js";import"./useControlledState-DDhJysn8.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BMCPESQK.js";import"./useEvent-BLyKonF-.js";import"./getScrollParent-DOj-Lfm1.js";import"./scrollIntoView-DNIYTqEF.js";import"./useDescription-3cPSrQCV.js";import"./VisuallyHidden-C3QcPrAB.js";import"./clsx-Ciqy0D92.js";import"./Button-BmkKd0hD.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";import"./createLucideIcon-CpMQKadj.js";import"./chevron-left-CXrkY_jh.js";import"./chevron-right-B2yEQdEg.js";import"./Heading-BeKmFSrO.js";import"./FieldError-CcwNjMdG.js";import"./Text-BQJnC-MG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
