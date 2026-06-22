import{$ as c,a as m,r as l,j as d}from"./iframe-Dzhbyx-V.js";import{C as n}from"./Calendar-DSnXunof.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3cchCdWc.js";import"./Button-CBTAD5ia.js";import"./utils-CB1YxmUd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFP4Nw8t.js";import"./useFocusRing-DJW4L7nP.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./RSPContexts-BZBUf3ht.js";import"./Text-B9yiudZO.js";import"./useDateFormatter-DTkRF1k0.js";import"./useControlledState-BsGPn7dI.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C5ZCmitF.js";import"./useEvent-CM_jpF7d.js";import"./getScrollParent-BKCTdMaY.js";import"./scrollIntoView-CGVh69Nr.js";import"./useDescription-CQR6r60R.js";import"./VisuallyHidden-BTnUWvIm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D9E3VtPk.js";import"./createLucideIcon-Daz74Vgk.js";import"./chevron-right-Ds6qXJTV.js";import"./Button-DVuadbrT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CZwJWfDJ.js";import"./Heading-llBbS4q-.js";import"./FieldError-BKbX9qzJ.js";import"./Text--lu7STeo.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
