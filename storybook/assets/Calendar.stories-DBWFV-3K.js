import{$ as c,a as m,r as l,j as d}from"./iframe-D6LQdl6O.js";import{C as n}from"./Calendar-Xl8uLJ-q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BR7IqWSV.js";import"./Button-9qwLQrmH.js";import"./utils-CZfNivSw.js";import"./clsx-B-dksMZM.js";import"./Hidden-yz3dW65o.js";import"./useFocusRing-BDbVtPGE.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./RSPContexts-wImFRte6.js";import"./Text-CwW63OZO.js";import"./useDateFormatter-KoCzu0Wv.js";import"./useControlledState-FXE_mKkD.js";import"./useLocalizedStringFormatter-iIj43R9v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dq4UlUH9.js";import"./useEvent-CZkNrFIT.js";import"./getScrollParent-c0trNJuS.js";import"./scrollIntoView-DobeBV9b.js";import"./useDescription-Dsci8nVE.js";import"./VisuallyHidden-Cd1-ui_g.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CnYItUyh.js";import"./createLucideIcon-kgcsXuQA.js";import"./chevron-right-bLXMTi42.js";import"./Button-BVWIHAUA.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./Heading-hpYxgTmD.js";import"./FieldError-D0W-ZueW.js";import"./Text-RYp74C2J.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
