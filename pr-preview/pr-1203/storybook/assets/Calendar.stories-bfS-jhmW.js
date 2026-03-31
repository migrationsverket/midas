import{$ as c,a as m,r as l,j as d}from"./iframe-BAIFV8Yb.js";import{C as n}from"./Calendar-jTsinE_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BEnR9MOx.js";import"./Button-F9PaMeiW.js";import"./utils-C4qL7h-Q.js";import"./clsx-B-dksMZM.js";import"./Hidden-I3OO9ryl.js";import"./useFocusRing-btLeUPqX.js";import"./index-mpJUQRSx.js";import"./index-Baj0KArx.js";import"./useLabel-BgyZguEJ.js";import"./useLabels-CWgWqrCK.js";import"./useButton-CcTZ9cV8.js";import"./RSPContexts-0G2A7Cpm.js";import"./Text-CmPtR76W.js";import"./useDateFormatter-CMjnLZfJ.js";import"./useControlledState-CleADvs5.js";import"./useLocalizedStringFormatter-B_HxKguN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dbv7MDp_.js";import"./useEvent-VqD0bu_T.js";import"./getScrollParent-Dq1fMLPX.js";import"./scrollIntoView-ChGKlCh8.js";import"./useDescription-OhYwP_vB.js";import"./VisuallyHidden-FRjMpRtC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BZYkppdh.js";import"./createLucideIcon-CRLMORiX.js";import"./chevron-right-DVQZe0Yn.js";import"./Button-CqpMDFXh.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-geOfM1X1.js";import"./Heading-BKllsz58.js";import"./FieldError-Y1vkCgJL.js";import"./Text-ygME-eTj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
