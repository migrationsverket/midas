import{$ as c,a as m,r as l,j as d}from"./iframe-B5mKUI4c.js";import{C as n}from"./Calendar-BbggeWjD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CF62ne6w.js";import"./Button-BrTPVwzK.js";import"./utils-DeW7LaO1.js";import"./clsx-B-dksMZM.js";import"./Hidden-CSsTijhC.js";import"./useFocusRing-CgbRETJq.js";import"./index-BhZP_iQU.js";import"./index-4ahidsI-.js";import"./useLabels-B2xIaWSz.js";import"./useButton-BO8k0dou.js";import"./RSPContexts-hkEluX4Q.js";import"./Text-BYCbsMCs.js";import"./useDateFormatter-BdoJGk8W.js";import"./useControlledState-xvk7L9VL.js";import"./useLocalizedStringFormatter-9u2UdEi1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D3zzAlDo.js";import"./useEvent-Bfj_pgkR.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DtjJIqI8.js";import"./VisuallyHidden-Xt4BPEfK.js";import"./clsx-Ciqy0D92.js";import"./Button-DdQrsI7w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgKQ4iI2.js";import"./createLucideIcon-ByiINced.js";import"./chevron-left-Bt12xEPE.js";import"./chevron-right-DdHNXIXt.js";import"./Heading-BnvherGp.js";import"./FieldError-CWRNW1G1.js";import"./Text-B1l_WlEL.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
