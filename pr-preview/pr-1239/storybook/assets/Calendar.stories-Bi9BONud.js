import{$ as c,a as m,r as l,j as d}from"./iframe-DYtTLEOY.js";import{C as n}from"./Calendar-BtKXS0OV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-e2-wVBvW.js";import"./Button-DsqyYrvI.js";import"./utils-BeWuc0kB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDsbX8hq.js";import"./useFocusRing-_bdLe-pi.js";import"./index-CHX39vrh.js";import"./index-DvTVW4UW.js";import"./useLabel-BnXeWK3Y.js";import"./useLabels-CT9q7uAF.js";import"./useButton-Ci3u1E4N.js";import"./RSPContexts-DkdKWqA8.js";import"./Text-B_xqvba2.js";import"./useDateFormatter-DUsVznz5.js";import"./useControlledState-rzHF_sGy.js";import"./useLocalizedStringFormatter-Ccy2SGCc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D-9djtEr.js";import"./useEvent-B1ZGd9Sm.js";import"./getScrollParent-WmdaZx3q.js";import"./scrollIntoView-C6xwA0wp.js";import"./useDescription-Cyk80vV4.js";import"./VisuallyHidden-bhNQHOWS.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DGugCG0_.js";import"./createLucideIcon-CX9lPY5s.js";import"./chevron-right-qnphvDXH.js";import"./Button-NK277Tyq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CJKDlra2.js";import"./Heading-CYbTt_Pz.js";import"./FieldError-f6hy05Az.js";import"./Text-DW1CAqib.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
