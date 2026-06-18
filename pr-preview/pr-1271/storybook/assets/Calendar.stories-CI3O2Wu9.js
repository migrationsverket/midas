import{$ as c,a as m,r as l,j as d}from"./iframe-CZzQp4L4.js";import{C as n}from"./Calendar-CSL-A897.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ij16rgcL.js";import"./Button-CMuMpLTA.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsPoJuN8.js";import"./useFocusRing-BmXcpeVt.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./RSPContexts-C0f-FQan.js";import"./Text-D4nq5ZrE.js";import"./useDateFormatter-CeXzMQXw.js";import"./useControlledState-Bzqk2M-v.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DAQ4myEp.js";import"./useEvent-BLtqzDzs.js";import"./getScrollParent-D5Oq2B6G.js";import"./scrollIntoView-C5X5vw03.js";import"./useDescription-CsoYkjOr.js";import"./VisuallyHidden-aeJx5n8b.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-_2Vh3YyU.js";import"./createLucideIcon-Cp1wTSwb.js";import"./chevron-right-N2KY_5VL.js";import"./Button-fUmHoMv6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DHizypL-.js";import"./Heading-C7OfNizA.js";import"./FieldError-B2NzjSdH.js";import"./Text-CgRiWgOz.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
