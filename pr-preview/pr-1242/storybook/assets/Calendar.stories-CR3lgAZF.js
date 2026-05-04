import{$ as c,a as m,r as l,j as d}from"./iframe-CcoWXO6B.js";import{C as n}from"./Calendar-BP3xjEKS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-v8VZWUWu.js";import"./Button-CqtDw1Oq.js";import"./utils-CvmzGVmn.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvcA5WHf.js";import"./useFocusRing-G8rwOJ76.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./RSPContexts-2FrTYNtF.js";import"./Text-C1aI8N19.js";import"./useDateFormatter-DRKv6sVz.js";import"./useControlledState-6QHQ6cmR.js";import"./useLocalizedStringFormatter-BR6J7xDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DkvOqvkp.js";import"./useEvent-HAa0P1KD.js";import"./getScrollParent-CrWEQW42.js";import"./scrollIntoView-DAiNmZGo.js";import"./useDescription-YzAHNiST.js";import"./VisuallyHidden-D34CPKZD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CwbBPq7y.js";import"./createLucideIcon-CUodyQE8.js";import"./chevron-right-DjSnpy5A.js";import"./Button-tDMUeh37.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./Heading-CQkLHTFo.js";import"./FieldError-C7pmBmh_.js";import"./Text-_y8SHX-J.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
