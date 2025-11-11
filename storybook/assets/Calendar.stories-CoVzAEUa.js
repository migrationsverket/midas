import{$ as p,a as m,r as l,j as d}from"./iframe-DjEq5KJs.js";import{C as n}from"./Calendar-DTfXZd2S.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C42b-Khr.js";import"./Button-B8049aKJ.js";import"./utils-CCFqI4vB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DnGBJvOz.js";import"./useFocusRing-BC0wMAce.js";import"./index-DCW76Eph.js";import"./index-BjqDN30t.js";import"./useLabels-DmAHK44v.js";import"./useButton-hAhYDtFG.js";import"./RSPContexts-BkrQi2MA.js";import"./Text-C9cSyz4C.js";import"./useDateFormatter-De_LUocr.js";import"./useControlledState-DHOlhB6J.js";import"./useLocalizedStringFormatter-BAjOeHv7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PpFvHSZe.js";import"./useEvent-DG6NBjU6.js";import"./getScrollParent-B8SMXqH0.js";import"./scrollIntoView-CvJ6INea.js";import"./useDescription-BknCMZIc.js";import"./VisuallyHidden-F00Kn1rT.js";import"./clsx-Ciqy0D92.js";import"./Button-BV-3OGoZ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C_34UrfF.js";import"./chevron-right-BqnrT2XD.js";import"./Heading-B_wqikp6.js";import"./FieldError-Bb0J40Lw.js";import"./Text-D1_j7g2y.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
