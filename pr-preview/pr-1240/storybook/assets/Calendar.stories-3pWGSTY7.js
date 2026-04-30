import{$ as c,a as m,r as l,j as d}from"./iframe-DpTmCcsu.js";import{C as n}from"./Calendar-B5rsoH6l.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dpg532LN.js";import"./Button-BsQKBFvZ.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./Hidden-pLTvcnD_.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./RSPContexts-CDes9nfa.js";import"./Text-C2ABOPKT.js";import"./useDateFormatter-jXg5Xwlh.js";import"./useControlledState-Du11SrDH.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DoqCHROH.js";import"./useEvent-aGapLNe8.js";import"./getScrollParent-BTKk9p6-.js";import"./scrollIntoView-D1143tc0.js";import"./useDescription-ZwNvLjiW.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cem4LJhu.js";import"./createLucideIcon-BVEhdOTx.js";import"./chevron-right-C1F24WA3.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Heading-D1Oj7BSx.js";import"./FieldError-DZQ02WXe.js";import"./Text-DZjjFYeH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
