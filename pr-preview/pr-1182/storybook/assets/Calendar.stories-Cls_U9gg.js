import{$ as c,a as m,r as l,j as d}from"./iframe-BfMhQjGU.js";import{C as n}from"./Calendar-CV-pCZdd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-x-JZOaHv.js";import"./Button-9bk196xZ.js";import"./utils-DaDNkmjx.js";import"./clsx-B-dksMZM.js";import"./Hidden-DhDQuc5B.js";import"./useFocusRing-C5Yjq8eB.js";import"./index-CANV50_Z.js";import"./index-DcgLR03X.js";import"./useLabel-DV2YbXB7.js";import"./useLabels-DmE0eIr6.js";import"./useButton-CVkS8nd6.js";import"./RSPContexts-BaQPI9Wj.js";import"./Text-9jZvM0HP.js";import"./useDateFormatter-DeJ5KUxE.js";import"./useControlledState-DswV1VSh.js";import"./useLocalizedStringFormatter-qWRJ97i-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CzwHi36Q.js";import"./useEvent-C5eanDI0.js";import"./getScrollParent-D97Sq6rj.js";import"./scrollIntoView-ffGKw_mR.js";import"./useDescription-DLgHt4Bt.js";import"./VisuallyHidden-CrEXwPZJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BZFtfZ9e.js";import"./createLucideIcon-DSNzZSu6.js";import"./chevron-right-CcBGuq-N.js";import"./Button-blC6kfyz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-7a6_xXLI.js";import"./Heading-CBhEHIYh.js";import"./FieldError-xqjiIrlm.js";import"./Text--boW3P5m.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
