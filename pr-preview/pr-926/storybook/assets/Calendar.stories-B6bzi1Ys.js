import{$ as p,a as m,r as l,j as d}from"./iframe-DsvQYhcC.js";import{C as n}from"./Calendar-jLd18nMj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-RKC5htP2.js";import"./Button-Btfg7XlR.js";import"./utils-ywWYrjb7.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3O_gp6m.js";import"./useFocusRing-DKFJXZq3.js";import"./index-p-5mA69d.js";import"./index-lWE3LdPA.js";import"./useLabels-DkA2Lq0I.js";import"./useButton-DqkMJO2v.js";import"./RSPContexts-WMzRS-8a.js";import"./Text-CP8B1hu_.js";import"./useDateFormatter-CSdxHFUj.js";import"./useControlledState-Wd1IkDYb.js";import"./useLocalizedStringFormatter-CzBDZOTF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-0Fx5HaKt.js";import"./useEvent-J3uC9IEt.js";import"./getScrollParent-CxiqfrM9.js";import"./scrollIntoView-Be8AA3u2.js";import"./useDescription-DjLBrBt_.js";import"./VisuallyHidden-DAnD-YJl.js";import"./clsx-Ciqy0D92.js";import"./Button-DiEGm4BJ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BGno6_ea.js";import"./chevron-right-CTNWb0cA.js";import"./Heading-C59R7gqX.js";import"./FieldError-DLaiVMtb.js";import"./Text-459A5tOX.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
