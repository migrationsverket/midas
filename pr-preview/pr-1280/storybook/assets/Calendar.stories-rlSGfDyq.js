import{$ as c,a as m,r as l,j as d}from"./iframe-dvXwWV4I.js";import{C as n}from"./Calendar-6N2cwtT-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSn1FwAx.js";import"./Button-DtMCt8o7.js";import"./utils-CSQgyNi0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BiX0nsQm.js";import"./useFocusRing-CFfVe8sk.js";import"./index-BluzQUAG.js";import"./index-CbKl3GPI.js";import"./useLabel-DUS9osvw.js";import"./useLabels-CR4N-lVY.js";import"./useButton-DGlHeihW.js";import"./RSPContexts-CrUawT1P.js";import"./Text-CQFRG3Bv.js";import"./useDateFormatter-CxvsMVkc.js";import"./useControlledState-zKncmKHQ.js";import"./useLocalizedStringFormatter-BZ3gM8Ke.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-wgRow701.js";import"./useEvent-CmLc8va6.js";import"./getScrollParent-Bb4tqPd4.js";import"./scrollIntoView-DYF4SUsq.js";import"./useDescription-DSgANlen.js";import"./VisuallyHidden-DTt1NZf8.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C119aVwX.js";import"./createLucideIcon-Cuh90yXY.js";import"./chevron-right-BUFdCf23.js";import"./Button-DN_kkRXq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CE8NwZkm.js";import"./Heading-DLEaafvb.js";import"./FieldError-C76blMz5.js";import"./Text-CqtbULFE.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
