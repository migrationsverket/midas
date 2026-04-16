import{$ as c,a as m,r as l,j as d}from"./iframe-Xm_9cv73.js";import{C as n}from"./Calendar-BrJCooxX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DypIR6Fy.js";import"./Button-DVfOBJT3.js";import"./utils-BrYTleyQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZlSwNP_.js";import"./useFocusRing-B1Kohi3p.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./RSPContexts-D8VaqtGQ.js";import"./Text-83WNws37.js";import"./useDateFormatter-CMMKcMTc.js";import"./useControlledState-B_fJsoKU.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZJhMBJ1t.js";import"./useEvent-IJcG7rNp.js";import"./getScrollParent-DW5MB0xc.js";import"./scrollIntoView-DLCl9E_L.js";import"./useDescription-jUlzP2-m.js";import"./VisuallyHidden-BGkpKKxN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-jxSFPJWq.js";import"./createLucideIcon-9sC3-GJ0.js";import"./chevron-right-D_rTXnaO.js";import"./Button-Da8bQidF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Heading-Bg7Vp_mI.js";import"./FieldError-DghDJU9N.js";import"./Text-C4UzyOu1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
