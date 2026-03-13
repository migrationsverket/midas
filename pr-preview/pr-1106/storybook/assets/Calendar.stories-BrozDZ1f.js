import{$ as c,a as m,r as l,j as d}from"./iframe-DNJYs6qz.js";import{C as n}from"./Calendar-BLTp9YU9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KiqXND5s.js";import"./Button-CZyV5Mpk.js";import"./utils-aX0iHzRl.js";import"./clsx-B-dksMZM.js";import"./Hidden-CpGOqaLl.js";import"./useFocusRing-CX_Euf5u.js";import"./index-DAO1nJ__.js";import"./index--Rga-YK_.js";import"./useLabels-3Hv0LYEO.js";import"./useButton-W-teLibw.js";import"./RSPContexts-BQ-Rh700.js";import"./Text-DnOEsXYA.js";import"./useDateFormatter-JD3dHYqC.js";import"./useControlledState-CtAp0QIN.js";import"./useLocalizedStringFormatter-CFHnDqzL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-7gkf_X-9.js";import"./useEvent-Z2WvN-8m.js";import"./getScrollParent-B8wVHIEy.js";import"./scrollIntoView-D1v9x2ju.js";import"./useDescription-Dmw9BzGw.js";import"./VisuallyHidden-BjCBN869.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-lfVvXAxq.js";import"./createLucideIcon-BSLbnE3k.js";import"./chevron-right-WnvXhSup.js";import"./Button-DOGWCVYm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CUnRcS0k.js";import"./Heading-BRtwQXho.js";import"./FieldError-BrrWeg-t.js";import"./Text-DlzD_a6_.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
