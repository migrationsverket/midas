import{$ as c,a as m,r as l,j as d}from"./iframe-CdIQ5N7i.js";import{C as n}from"./Calendar-DAK4esKE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cn-67Ilo.js";import"./Button-UiktFLbJ.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./Hidden-BNc7AwrM.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./RSPContexts-CLmzGhES.js";import"./Text-s2Qhe30V.js";import"./useDateFormatter-CY84fW3j.js";import"./useControlledState-BRvuk5rm.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BbexS5oB.js";import"./useEvent-CJQiJoWr.js";import"./getScrollParent-B0hpSf3_.js";import"./scrollIntoView-DQzQ-CtO.js";import"./useDescription--y6wfX3r.js";import"./VisuallyHidden-BhdIXlKy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D86yWFbp.js";import"./createLucideIcon-D9zj-qmC.js";import"./chevron-right-5mgwQpOa.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Heading-CYqOGIzN.js";import"./FieldError-DJ-HR3RU.js";import"./Text-uW2g-Rij.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
