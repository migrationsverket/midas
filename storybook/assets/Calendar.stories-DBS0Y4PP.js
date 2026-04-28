import{$ as c,a as m,r as l,j as d}from"./iframe-Dl4LNfFt.js";import{C as n}from"./Calendar-DJWRb1r5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CrE5XavY.js";import"./Button-1ORHN5ed.js";import"./utils-zoe11Nhs.js";import"./clsx-B-dksMZM.js";import"./Hidden-qMhe2ll1.js";import"./useFocusRing-DBInQ3ih.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./RSPContexts-4lSoz9P-.js";import"./Text-P-m_usmt.js";import"./useDateFormatter-CMnI9B1Y.js";import"./useControlledState-CyH9azIX.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BtbLsE_r.js";import"./useEvent-BlUZThVq.js";import"./getScrollParent-CRvNPk_3.js";import"./scrollIntoView-B7KTALk8.js";import"./useDescription-ccYB2Tbm.js";import"./VisuallyHidden-CI441pyr.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-TjvUQQcA.js";import"./createLucideIcon-1sQySh6M.js";import"./chevron-right-DPTUgxPu.js";import"./Button-CE6ptzle.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Heading-DMV6k00x.js";import"./FieldError-D8UkVWbY.js";import"./Text-htVbAu9h.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
