import{$ as m,a as c,r as l,j as d}from"./iframe-8Cp1Y9sE.js";import{C as n}from"./Calendar-Dv7eP1QE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBNs0yXr.js";import"./Button-CqMXkvRN.js";import"./utils-DlEPF17n.js";import"./useObjectRef-BvAFkytn.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnGBIuvq.js";import"./number-DfkVkf0F.js";import"./useFocusRing-CVuxSJk8.js";import"./useFocusable-B-HsSGrd.js";import"./index-CQNUcSLQ.js";import"./index-BHWdZgLR.js";import"./useLabels-CjRcy63q.js";import"./useButton-J5AmJIR7.js";import"./RSPContexts-jWKLjCHM.js";import"./Text-D3HiTtCB.js";import"./useDateFormatter-BdqJxWAW.js";import"./useControlledState-DUF8qyUE.js";import"./useLocalizedStringFormatter-D6BMfFml.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Y4rI-zfK.js";import"./useEvent-BWoUQZjL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BOEa2vWJ.js";import"./VisuallyHidden-CBA6IUNJ.js";import"./clsx-Ciqy0D92.js";import"./Button-CS2QwEY0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDGZG5jK.js";import"./createLucideIcon-BJQalJwk.js";import"./chevron-left-BsD0hz0h.js";import"./chevron-right-D2LLdKEN.js";import"./Heading-D7HlTSWz.js";import"./FieldError-eZOVGEUO.js";import"./Text-Dvlujitk.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
