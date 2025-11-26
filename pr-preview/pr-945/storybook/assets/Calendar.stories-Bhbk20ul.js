import{$ as p,a as m,r as l,j as d}from"./iframe-IjzrHHNv.js";import{C as n}from"./Calendar-Curm2ADZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DJUSK6jD.js";import"./Button-C3uIaOSh.js";import"./utils-CODsTHLU.js";import"./clsx-B-dksMZM.js";import"./Hidden-3HVx6IyU.js";import"./useFocusRing-BZeMGEJ-.js";import"./index-D4Wmkx7i.js";import"./index-Bx7zkVbj.js";import"./useLabels-BF_CgXn-.js";import"./useButton-BpNajOCa.js";import"./RSPContexts-Cog8PMMM.js";import"./Text-Du-4Iq6e.js";import"./useDateFormatter-CKvAc0Gq.js";import"./useControlledState-CNtbpmwP.js";import"./useLocalizedStringFormatter-CXKVQPJR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_pp7Oh5.js";import"./useEvent-Bi0O_rqd.js";import"./getScrollParent-BV9iHv67.js";import"./scrollIntoView-CpCWy20X.js";import"./useDescription-C4YZ4ECy.js";import"./VisuallyHidden-QGHASBvs.js";import"./clsx-Ciqy0D92.js";import"./Button-sMqW8jOV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Zy7JvKDD.js";import"./createLucideIcon-ILFWgvoA.js";import"./chevron-right-DLox3mkQ.js";import"./Heading-D-GWoLjA.js";import"./FieldError-cOUBxcF_.js";import"./Text-CYvKHqQ5.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
