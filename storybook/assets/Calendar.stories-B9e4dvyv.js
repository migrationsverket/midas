import{$ as c,a as m,r as l,j as d}from"./iframe-gvsmTfDv.js";import{C as n}from"./Calendar-PqNx6iWY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyA51xt9.js";import"./Button-DfV_2-Zn.js";import"./utils-BKVt9q3t.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYsAXt4K.js";import"./useFocusRing-Bw2Eo1es.js";import"./index-zZ-VMYSr.js";import"./index-Dl6j7ESc.js";import"./useLabel-CAO0uGJ4.js";import"./useLabels-DHOPg_u-.js";import"./useButton-EAKdzl-u.js";import"./RSPContexts-1qykiObf.js";import"./Text-D_-E26JC.js";import"./useDateFormatter-LKIxLeTH.js";import"./useControlledState-CccMhTKY.js";import"./useLocalizedStringFormatter-CvPo1xmV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BZ4j48og.js";import"./useEvent-Czf9E218.js";import"./getScrollParent-DP26HErR.js";import"./scrollIntoView-Efz8I6x4.js";import"./useDescription-CfmSReeE.js";import"./VisuallyHidden-M9fmIsYk.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CqRkAgrE.js";import"./createLucideIcon-DCceu8CA.js";import"./chevron-right-DgpnRnnu.js";import"./Button-B27aviMr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BwDUVQYw.js";import"./Heading-DQQdczVQ.js";import"./FieldError-Dt4wOzlE.js";import"./Text-B8IC8KHg.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
