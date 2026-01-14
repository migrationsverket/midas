import{$ as c,a as m,r as l,j as d}from"./iframe-BFGJdV-R.js";import{C as n}from"./Calendar-B1FPm2wm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3JcQ5ip.js";import"./Button-a7m7Ei1w.js";import"./utils-kIk1YPQB.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0o1kVdW.js";import"./useFocusRing-DJbT0PkJ.js";import"./index-q0PAT9Q8.js";import"./index-Bgs2Im9U.js";import"./useLabels-ENg7mHVd.js";import"./useButton-DDbtau5_.js";import"./RSPContexts-CqmQDw7G.js";import"./Text-BTml81CB.js";import"./useDateFormatter-GcBPOAjp.js";import"./useControlledState-BkGWyaov.js";import"./useLocalizedStringFormatter-CssQMkou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-_PRKGtbF.js";import"./useEvent-DQ79yaUH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bg2UYj8o.js";import"./VisuallyHidden-C8v0qjRB.js";import"./clsx-Ciqy0D92.js";import"./Button-CC7hJvPh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_5YXSYz.js";import"./createLucideIcon-C3uE9ls3.js";import"./chevron-left-BPJfXjKD.js";import"./chevron-right-CgRKwFf8.js";import"./Heading-BO-wR8OH.js";import"./FieldError-CQJGsK4z.js";import"./Text-CkbWQQrW.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
