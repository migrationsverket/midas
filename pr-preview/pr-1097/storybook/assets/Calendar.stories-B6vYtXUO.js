import{$ as c,a as m,r as l,j as d}from"./iframe-BxhzVfg2.js";import{C as n}from"./Calendar-OHZQN3nf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CSPMmd6U.js";import"./Button-BWZAZeiF.js";import"./utils-DZ6ahdJp.js";import"./clsx-B-dksMZM.js";import"./Hidden-DbfZ_4s1.js";import"./useFocusRing-bIPgWBhX.js";import"./index-BdD9_fMh.js";import"./index-BQnXjsO_.js";import"./useLabels-D-t3MvLa.js";import"./useButton-BdPz5CFW.js";import"./RSPContexts-6uyhJgkS.js";import"./Text-DJy4h6GN.js";import"./useDateFormatter-BhYLlfKq.js";import"./useControlledState-CD2bBDu6.js";import"./useLocalizedStringFormatter-DBjxKF2m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DsFAwvYG.js";import"./useEvent-Db77X8Ds.js";import"./getScrollParent-RVUz05Tj.js";import"./scrollIntoView-BP0QIdto.js";import"./useDescription-BuazjX7t.js";import"./VisuallyHidden-CI9pT65P.js";import"./clsx-Ciqy0D92.js";import"./Button-DVCkWjV4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C--O9Jox.js";import"./createLucideIcon-B9VWei3c.js";import"./chevron-left-DPm1onOz.js";import"./chevron-right-DZLn6yXz.js";import"./Heading-DicC2kkf.js";import"./FieldError-0WAd1Y6E.js";import"./Text-0UCV12dD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
