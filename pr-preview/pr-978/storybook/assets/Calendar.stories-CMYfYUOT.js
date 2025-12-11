import{$ as c,a as m,r as l,j as d}from"./iframe-mw-3Wqs6.js";import{C as n}from"./Calendar-FN9oskZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CesyVwCs.js";import"./Button-Db-TTM-V.js";import"./utils-CYxbFJyZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYrMFcxf.js";import"./useFocusRing-89DUUa4N.js";import"./index-zd9D6jNJ.js";import"./index-DA11V2mi.js";import"./useLabels-DdJABAh2.js";import"./useButton-XGSOFvEQ.js";import"./RSPContexts-XN3T4dow.js";import"./Text-D7lmaY_E.js";import"./useDateFormatter-CF4EFdv5.js";import"./useControlledState--wR3WwaU.js";import"./useLocalizedStringFormatter-BCBlkbeT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-IOuEHxJu.js";import"./useEvent-CRXVShig.js";import"./getScrollParent-CGAWy5Jf.js";import"./scrollIntoView-CXkXakFA.js";import"./useDescription-Blh6neaZ.js";import"./VisuallyHidden-D6wLmm0f.js";import"./clsx-Ciqy0D92.js";import"./Button-Ca1dkGu6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNqwZTZL.js";import"./createLucideIcon-DugDWxFe.js";import"./chevron-left-BADWpzFr.js";import"./chevron-right-Bzju_q8j.js";import"./Heading-Bl6Y-w-i.js";import"./FieldError-9R24nCVk.js";import"./Text-DGTCcOxe.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
