import{$ as c,a as m,r as l,j as d}from"./iframe-D4qwi5aS.js";import{C as n}from"./Calendar-1KMQa4KF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3jLttJl.js";import"./Button-Da-DtFCd.js";import"./utils-B-Nz338F.js";import"./clsx-B-dksMZM.js";import"./Hidden-CM9pZ1fW.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./RSPContexts-CXXJq7xx.js";import"./Text-0C5O0r7x.js";import"./useDateFormatter-DWaLBMMq.js";import"./useControlledState-BpYdNZzj.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ac2p7zP5.js";import"./useEvent-uU1Q1mcZ.js";import"./getScrollParent-Cwbjb50l.js";import"./scrollIntoView-Dwx5yIaq.js";import"./useDescription-1CMda98v.js";import"./VisuallyHidden-bcnkwpD1.js";import"./clsx-Ciqy0D92.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./createLucideIcon-hD68kNPm.js";import"./chevron-left-D6GWlvJJ.js";import"./chevron-right-BqYK3nR6.js";import"./Heading-8tKoHdkE.js";import"./FieldError-COTYRssi.js";import"./Text-C5mfap0J.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
