import{$ as c,a as m,r as l,j as d}from"./iframe-4jp4gloH.js";import{C as n}from"./Calendar-D_8_--Xq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CtuAwbgZ.js";import"./Button-BmPmOVkQ.js";import"./utils-VVEWI3IK.js";import"./clsx-B-dksMZM.js";import"./Hidden-uxp9aDmP.js";import"./useFocusRing-CHjnTN6p.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./RSPContexts-C_Tj-sgU.js";import"./Text-DKG8In0g.js";import"./useDateFormatter-DdO9nLeh.js";import"./useControlledState-C8OaseGF.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BRfG-lBP.js";import"./useEvent-BSjWwKyO.js";import"./getScrollParent-lyddzNLU.js";import"./scrollIntoView-LVymhG08.js";import"./useDescription-Ca_N61mq.js";import"./VisuallyHidden-CwExooWt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DXxxDzx1.js";import"./createLucideIcon-BGZ9Sagt.js";import"./chevron-right-5ewCbZpu.js";import"./Button-CeMvvwss.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Heading-CE_cjqfz.js";import"./FieldError-D-ucO46w.js";import"./Text-CaWuTb4e.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
