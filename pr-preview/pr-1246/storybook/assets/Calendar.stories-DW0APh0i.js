import{$ as c,a as m,r as l,j as d}from"./iframe-hven07mH.js";import{C as n}from"./Calendar-CLwrS2QY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CukjebZv.js";import"./Button-b_-88Jdv.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./Hidden-bl0dyrpb.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./RSPContexts-BL3sWo_M.js";import"./Text-BAoIm1rg.js";import"./useDateFormatter-BOotxmki.js";import"./useControlledState-_nq-pl6I.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-cUyQzqp4.js";import"./useEvent-BzIwcgMz.js";import"./getScrollParent-vliVuo3m.js";import"./scrollIntoView--hYGjISc.js";import"./useDescription-DSRfQAcu.js";import"./VisuallyHidden-B42_LAgy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-qxS5ow0y.js";import"./createLucideIcon-rLeAgfXY.js";import"./chevron-right-CzDcUcAp.js";import"./Button-CsNSTQ8W.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Heading-DK-Y_why.js";import"./FieldError-CGNeiPVK.js";import"./Text-BkfOg5_y.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
