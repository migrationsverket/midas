import{$ as c,a as m,r as l,j as d}from"./iframe-DwYJYgGb.js";import{C as n}from"./Calendar-CoBD15Ui.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DeZO79Ft.js";import"./Button-Ddo8eX0a.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwjkXMFO.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./RSPContexts-DE3QJKMh.js";import"./Text-B4syvpmZ.js";import"./useDateFormatter-A-9lIm7q.js";import"./useControlledState-CxwoTKvB.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BHkSbq6F.js";import"./useEvent-exXZI4Sz.js";import"./getScrollParent-Dee46RGf.js";import"./scrollIntoView-BsKOETet.js";import"./useDescription-DtI32Oaq.js";import"./VisuallyHidden-B0sEyNoY.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CSba6EbK.js";import"./createLucideIcon-CCgdfoT7.js";import"./chevron-right-CHmL8i0D.js";import"./Button-DpQdXJp1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Heading-Dhs8v48I.js";import"./FieldError-8dF8Tbve.js";import"./Text-CxhOo0fu.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
