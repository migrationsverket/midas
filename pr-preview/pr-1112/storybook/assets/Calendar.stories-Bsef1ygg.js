import{$ as c,a as m,r as l,j as d}from"./iframe-C9WX87J6.js";import{C as n}from"./Calendar-xkFnVN_v.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CFelns2b.js";import"./Button-Bu5uxYhh.js";import"./utils-WPpV5jWl.js";import"./clsx-B-dksMZM.js";import"./Hidden-CEJtjfct.js";import"./useFocusRing-CAXYS_HG.js";import"./index-CHnbLAYQ.js";import"./index-La7aNuBH.js";import"./useLabels-DgR_9Kxw.js";import"./useButton-CpsvKUvy.js";import"./RSPContexts-DpKSKp3G.js";import"./Text-BCCgd_b8.js";import"./useDateFormatter-CE7c9iV8.js";import"./useControlledState-fvtCyn4a.js";import"./useLocalizedStringFormatter-D1_2bmqB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DXTPgOIy.js";import"./useEvent-CwKYR3g8.js";import"./getScrollParent-CXN1jHN8.js";import"./scrollIntoView-BvPcFHyF.js";import"./useDescription-DSJqKme2.js";import"./VisuallyHidden-C27kR6LN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Bt-wmjAP.js";import"./createLucideIcon-LB-mxs_a.js";import"./chevron-right-qjBBUF6s.js";import"./Button-CB3oN7z-.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-zypQ79BF.js";import"./Heading-DgSSmx57.js";import"./FieldError-BMuqq62L.js";import"./Text-BtCJyYmU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
