import{$ as c,a as m,r as l,j as d}from"./iframe-BMuIqf2U.js";import{C as n}from"./Calendar-C4ztAutq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSube8ik.js";import"./Button-DOK0QqgZ.js";import"./utils-CzLgQND9.js";import"./clsx-B-dksMZM.js";import"./Hidden-D30GFtt0.js";import"./useFocusRing-DrTSxcZR.js";import"./index-DrkjSw_E.js";import"./index-BzHeAC17.js";import"./useLabels-DL2LM1pj.js";import"./useButton-BIdZHsA8.js";import"./RSPContexts-g3J5QWBf.js";import"./Text-CDpvKUAe.js";import"./useDateFormatter-DPdG94wc.js";import"./useControlledState-DRATP7Vg.js";import"./useLocalizedStringFormatter-hZHAja5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ErlhIkHw.js";import"./useEvent-Dau9qK9n.js";import"./getScrollParent-DjDKJ7cH.js";import"./scrollIntoView-CjK1TPSG.js";import"./useDescription-C7IYof9s.js";import"./VisuallyHidden-BPe22ZQU.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ch-UMrU4.js";import"./createLucideIcon-CEUfukBy.js";import"./chevron-right-DTwyvpKf.js";import"./Button-BsMPKC4Q.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-W3lFtewy.js";import"./Heading-BRWOlel1.js";import"./FieldError-BYsndT3-.js";import"./Text-Yadq2hZ1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
