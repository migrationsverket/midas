import{$ as c,a as m,r as l,j as d}from"./iframe-D1Yo_ASl.js";import{C as n}from"./Calendar-CzXvPSZX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BafN5B5n.js";import"./Button-M2F6_Qz4.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeKvJ1wg.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./RSPContexts-TtF35Naa.js";import"./Text-CC_-JfUc.js";import"./useDateFormatter-C9gilM6D.js";import"./useControlledState-DI2wiQtX.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-O-Y4uWUh.js";import"./useEvent-CR9RVJbO.js";import"./getScrollParent-CqYMlGok.js";import"./scrollIntoView-BpMLfVQa.js";import"./useDescription-DFWHaatp.js";import"./VisuallyHidden-BaAY3BDc.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BBsEH38Y.js";import"./createLucideIcon-B2W31-43.js";import"./chevron-right-P5FHJuUU.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Heading-D21J0EHb.js";import"./FieldError-BrTiJca0.js";import"./Text-Cm1JxqTj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
