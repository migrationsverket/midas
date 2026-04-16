import{$ as c,a as m,r as l,j as d}from"./iframe-Cwp_nH2i.js";import{C as n}from"./Calendar-DVHg7bcl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-HKMLjPfw.js";import"./Button-BYfq0wpH.js";import"./utils-D58tzseF.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUSQ_LLM.js";import"./useFocusRing-DNNGYKVr.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./RSPContexts-BgIiqfY1.js";import"./Text-h4_45G40.js";import"./useDateFormatter-CiYGNlCI.js";import"./useControlledState-DjKqHFBe.js";import"./useLocalizedStringFormatter-C-PIG7PB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-m_tK5YKk.js";import"./useEvent-BjIvz2Po.js";import"./getScrollParent-CS9TKH4q.js";import"./scrollIntoView-BKCjK7iV.js";import"./useDescription-CryxMFSD.js";import"./VisuallyHidden-c7FiOqp6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BxkrpckM.js";import"./createLucideIcon-CL7AaBb9.js";import"./chevron-right-CbLAZXz9.js";import"./Button-D-SHIeik.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./Heading-b3KA7tkq.js";import"./FieldError-DkJf33vr.js";import"./Text-ooZ4PKli.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
