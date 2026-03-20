import{$ as c,a as m,r as l,j as d}from"./iframe-C5o5Abe9.js";import{C as n}from"./Calendar-BC5xID43.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BonnNEGA.js";import"./Button-D0wm-Bzx.js";import"./utils-CI0V6-bZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBrM32Fq.js";import"./useFocusRing-DUJ025qE.js";import"./index-O7wF_jHq.js";import"./index-gJJpgxtN.js";import"./useLabels-Bc_QKjnL.js";import"./useButton-DaL-nw23.js";import"./RSPContexts-gnW2D4kn.js";import"./Text-CZIcrdc8.js";import"./useDateFormatter-Cv6SHKGa.js";import"./useControlledState-Bsc6Xcu0.js";import"./useLocalizedStringFormatter-D-x6F0Q7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CrITspll.js";import"./useEvent-B6I2mMYo.js";import"./getScrollParent-B7dvtfm5.js";import"./scrollIntoView-C2llSjE_.js";import"./useDescription-BdlhheNd.js";import"./VisuallyHidden-B90J4eav.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-PgA-vXjv.js";import"./createLucideIcon-Dogmr7E8.js";import"./chevron-right-DQEKFyXl.js";import"./Button-B2ihGD6k.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DRt_xGrO.js";import"./Heading-7leloXgK.js";import"./FieldError-Bi-8FqnY.js";import"./Text-C8hlp_Vi.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
