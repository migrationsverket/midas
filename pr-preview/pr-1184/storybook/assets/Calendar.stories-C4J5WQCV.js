import{$ as c,a as m,r as l,j as d}from"./iframe-76Zbcpfm.js";import{C as n}from"./Calendar-DeqlOFny.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcvbaUiq.js";import"./Button-CGIWV9qi.js";import"./utils-DKhtQhER.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtdbjR1M.js";import"./useFocusRing--jUHa30l.js";import"./index-CYYDks4G.js";import"./index-Bikl_74K.js";import"./useLabel-Dyg0KZIl.js";import"./useLabels-DGXzYi66.js";import"./useButton-FpSsaIPg.js";import"./RSPContexts-CAiLW-Ic.js";import"./Text-BtsDHilU.js";import"./useDateFormatter-CMSuyf5L.js";import"./useControlledState-DdSN72zB.js";import"./useLocalizedStringFormatter-CaBWWaJn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-4Tdm6_2z.js";import"./useEvent-DXqjRKfs.js";import"./getScrollParent-CNZhp6tM.js";import"./scrollIntoView-B9jKnzlj.js";import"./useDescription-Cz09nlnz.js";import"./VisuallyHidden-r55FRtGJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ba0jcBZ2.js";import"./createLucideIcon-C-Fi2tn8.js";import"./chevron-right-Bd13D2Yl.js";import"./Button-DDxQAl6w.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CyEIBYX2.js";import"./Heading-CFPreU3P.js";import"./FieldError-B3CXz0a8.js";import"./Text-BvHKVa0m.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
