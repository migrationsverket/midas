import{$ as p,a as m,r as l,j as d}from"./iframe-DADKt-kQ.js";import{C as n}from"./Calendar-CmHIN8lA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cc-kkgpa.js";import"./Button-CJT79hNC.js";import"./utils-CKJqdrmj.js";import"./clsx-B-dksMZM.js";import"./Hidden-kCpqRsBu.js";import"./useFocusRing-Bv8Jxajo.js";import"./index-C7Jitojr.js";import"./index-Bq3agvIg.js";import"./useLabels-BkZNSNp-.js";import"./useButton-OTdhny-d.js";import"./RSPContexts-CgoyvJfI.js";import"./Text-D8zsPiTt.js";import"./useDateFormatter-PHy5P1i-.js";import"./useControlledState-CgzivPoq.js";import"./useLocalizedStringFormatter-CP2_5yue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-b6I4wqTx.js";import"./useEvent-DdvKetHq.js";import"./getScrollParent-BXEPCtkX.js";import"./scrollIntoView-CgOaBmyz.js";import"./useDescription-B1vRvU4Y.js";import"./VisuallyHidden-CsnTJoII.js";import"./clsx-Ciqy0D92.js";import"./Button-DnuKH5Gw.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BwsyMi25.js";import"./createLucideIcon-C_Dtelqq.js";import"./chevron-right-Dbq8-hOR.js";import"./Heading-H3P6YjwC.js";import"./FieldError-D8LV-R92.js";import"./Text-hz03lBtp.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
