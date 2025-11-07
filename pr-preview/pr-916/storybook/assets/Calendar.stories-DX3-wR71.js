import{$ as p,a as m,r as l,j as d}from"./iframe-6vocyBZR.js";import{C as n}from"./Calendar-7RFYwnJ9.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-COfjecW0.js";import"./Button-BhGf2H3u.js";import"./utils-BBfZu9kz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuJvOqEn.js";import"./useFocusRing-B50ygi4K.js";import"./index-B3IiVLzz.js";import"./index-BLXYeBoF.js";import"./useLabels-7KDepcIy.js";import"./useButton-CJoNFuGt.js";import"./RSPContexts-D4oWSe-H.js";import"./Text-D-Z22iAA.js";import"./useDateFormatter-czQBctZM.js";import"./useControlledState-DmeySdaI.js";import"./useLocalizedStringFormatter-Df5C4zQW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CUbpEmh7.js";import"./useEvent-ZYUzuaQ4.js";import"./getScrollParent-D9OqJMJq.js";import"./scrollIntoView-_NUEia3r.js";import"./useDescription-Co639SVw.js";import"./VisuallyHidden-7XC-BKhD.js";import"./clsx-Ciqy0D92.js";import"./Button-CpfHjZxO.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C6fwsjaL.js";import"./chevron-right-47OxegO8.js";import"./Heading-ula2A9Gq.js";import"./FieldError-B_UMAHWG.js";import"./Text-fxXJjlwh.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
