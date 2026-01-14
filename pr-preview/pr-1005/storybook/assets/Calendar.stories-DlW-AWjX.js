import{$ as c,a as m,r as l,j as d}from"./iframe-MGdNAUMz.js";import{C as n}from"./Calendar-C8CE0cxO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-qwCDu2lU.js";import"./Button-BGSDIYD6.js";import"./utils-yAZ9U3h-.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaKSv-Rd.js";import"./useFocusRing-9yuQWUp-.js";import"./index-CFMDqy5s.js";import"./index-DxYbJLyO.js";import"./useLabels-CYaM2JW7.js";import"./useButton-CKkRVWTa.js";import"./RSPContexts-DhTziygn.js";import"./Text-DFJny9No.js";import"./useDateFormatter-BEzuJXsx.js";import"./useControlledState-piNu0BKM.js";import"./useLocalizedStringFormatter-CMEEk3KL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1QgVH_u.js";import"./useEvent-h_n_ZdPT.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D7Bwelde.js";import"./VisuallyHidden-BK3tSjRA.js";import"./clsx-Ciqy0D92.js";import"./Button-f3B-7Wnz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcU_ael6.js";import"./createLucideIcon-CrP5_4Rr.js";import"./chevron-left-CPbC-FU4.js";import"./chevron-right-mrU7BHZo.js";import"./Heading-D--hORfB.js";import"./FieldError-zekZnl7-.js";import"./Text-D8P4tHEb.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
