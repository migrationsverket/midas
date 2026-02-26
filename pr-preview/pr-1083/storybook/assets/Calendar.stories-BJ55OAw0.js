import{$ as c,a as m,r as l,j as d}from"./iframe-ByuAakOV.js";import{C as n}from"./Calendar-Bekkpiis.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BgyDjcsZ.js";import"./Button-DvbXCpzv.js";import"./utils-DCDz8-p-.js";import"./clsx-B-dksMZM.js";import"./Hidden-C7SU6pSU.js";import"./useFocusRing-DeCr3XEL.js";import"./index-BFgkI4lh.js";import"./index-BxJqq9XP.js";import"./useLabels-T0jO5CxA.js";import"./useButton-B3mMDgAO.js";import"./RSPContexts-1jdWfN7k.js";import"./Text-5L-Loq_n.js";import"./useDateFormatter-DCLPOTY-.js";import"./useControlledState-DR_wIXu3.js";import"./useLocalizedStringFormatter-BdQ9RizH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-9JqKYBfg.js";import"./useEvent-Bw7OTlan.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRnY-b0G.js";import"./VisuallyHidden-DZTJ2PK7.js";import"./clsx-Ciqy0D92.js";import"./Button-BMoNBLUG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BIIuRCVh.js";import"./createLucideIcon-D1D3L2Mc.js";import"./chevron-left-1GuE1yS3.js";import"./chevron-right-DENuookx.js";import"./Heading-BfBN2Tsx.js";import"./FieldError-DONXBIHr.js";import"./Text-DGHuFiVK.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
