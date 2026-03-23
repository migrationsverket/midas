import{$ as c,a as m,r as l,j as d}from"./iframe-RTTcOKWo.js";import{C as n}from"./Calendar-ByKHSjA4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DFuuxup4.js";import"./Button-By1VqlsU.js";import"./utils-D1hKCylV.js";import"./clsx-B-dksMZM.js";import"./Hidden-8U697ZOC.js";import"./useFocusRing-BPdF-1cC.js";import"./index-DLoD3cgP.js";import"./index-DFgDWFo1.js";import"./useLabels-CVDdXQg_.js";import"./useButton-BYzzGwzi.js";import"./RSPContexts-CSsrJs75.js";import"./Text-C6b-YPN0.js";import"./useDateFormatter-B6kdgtwd.js";import"./useControlledState-BfNYqLEH.js";import"./useLocalizedStringFormatter-Dp6tEqIr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-urvwRqZL.js";import"./useEvent-BaOlqYrM.js";import"./getScrollParent-CH4E63H1.js";import"./scrollIntoView-D_w-QXDr.js";import"./useDescription-0Cssm7i0.js";import"./VisuallyHidden-Dmb8KXLU.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D2KnnFEp.js";import"./createLucideIcon-D2PeHOHn.js";import"./chevron-right-FeZVSX-3.js";import"./Button-EZmHrLhm.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cqxl6r8R.js";import"./Heading-TYrACDki.js";import"./FieldError-CpMxr9c5.js";import"./Text-DuBji0m4.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
