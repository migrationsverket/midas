import{$ as p,a as m,r as l,j as d}from"./iframe-9863yx6x.js";import{C as n}from"./Calendar--w-us5g9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KDxfVaCe.js";import"./Button-teT3EZQp.js";import"./utils-BhQ3vlj8.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu3qX2yN.js";import"./useFocusRing-Ce48MUY0.js";import"./index-DLd0rQU9.js";import"./index-hIuVGS0q.js";import"./useLabels-CYasyUGC.js";import"./useButton-CsKKQAqC.js";import"./RSPContexts-BzM22-AV.js";import"./Text-DtjOYwSN.js";import"./useDateFormatter-BvmtJnd-.js";import"./useControlledState-Dbpms77R.js";import"./useLocalizedStringFormatter-B_pYp1kt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C4tRZBZ8.js";import"./useEvent-D-937SH4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CYKtSczo.js";import"./VisuallyHidden-wlBhk09R.js";import"./clsx-Ciqy0D92.js";import"./Button-CX3flpTi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKcIukCd.js";import"./createLucideIcon-DoFpQJ8A.js";import"./chevron-right-jprUyN3I.js";import"./Heading-DHbz02dp.js";import"./FieldError-BVSywb3B.js";import"./Text-xbHrSl7O.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
