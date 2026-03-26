import{$ as c,a as m,r as l,j as d}from"./iframe-BsX4-fHl.js";import{C as n}from"./Calendar-cs5F_ev0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-V2u2nYNx.js";import"./Button-mui9UUMM.js";import"./utils-WmpgZI0L.js";import"./clsx-B-dksMZM.js";import"./Hidden-Du6MB-px.js";import"./useFocusRing-DHGOOITS.js";import"./index--eTuDDLm.js";import"./index-8LgWGc9O.js";import"./useLabel-C3_xLHTN.js";import"./useLabels-DE2ohQQR.js";import"./useButton-bzYxxfaT.js";import"./RSPContexts-BsBjgKsl.js";import"./Text-BO6cVHx4.js";import"./useDateFormatter-DpNS43-A.js";import"./useControlledState-1XtDDM6q.js";import"./useLocalizedStringFormatter-D_5fwse8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CQ1oM-is.js";import"./useEvent-CFNavKzw.js";import"./getScrollParent-DSKEhVJg.js";import"./scrollIntoView-DpHrXS9N.js";import"./useDescription-DyxUU18y.js";import"./VisuallyHidden-BUS8JXkv.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DTGD6uu3.js";import"./createLucideIcon-lE9BzsE-.js";import"./chevron-right-BBjxJ5rv.js";import"./Button-BTWfCVSc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-tfIgws8_.js";import"./Heading-pG8bapog.js";import"./FieldError-HDj_VpLo.js";import"./Text-AfY7AoQf.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
