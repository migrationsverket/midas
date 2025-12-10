import{$ as p,a as m,r as l,j as d}from"./iframe-Dynq-WfW.js";import{C as n}from"./Calendar-C-mS8IZX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BIIIMylW.js";import"./Button-CHr1GBYB.js";import"./utils-C5f3leNv.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_nMsfp6.js";import"./useFocusRing-BAuEJFrN.js";import"./index-YRe8YCfP.js";import"./index-S1WfcoeI.js";import"./useLabels-C0xISSqM.js";import"./useButton-CO5VodBT.js";import"./RSPContexts-DYQoab7T.js";import"./Text-Cnz-vVuh.js";import"./useDateFormatter-qfFr1ZwC.js";import"./useControlledState-B4c64_YE.js";import"./useLocalizedStringFormatter-iG9Zi8vK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BQ63ssbg.js";import"./useEvent-BUD_aeZx.js";import"./getScrollParent-BP74HWTE.js";import"./scrollIntoView-DH3xZtz3.js";import"./useDescription-D_aj6rqo.js";import"./VisuallyHidden-DTGQFyag.js";import"./clsx-Ciqy0D92.js";import"./Button-CGVjpGMW.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-JxJiRHf8.js";import"./createLucideIcon-DfdNSkLt.js";import"./chevron-right-B5aIDn2J.js";import"./Heading-D7RDPSXt.js";import"./FieldError-DMaQ57CQ.js";import"./Text-CyHTqQNs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
