import{$ as p,a as m,r as l,j as d}from"./iframe-D4pYWxLo.js";import{C as n}from"./Calendar-Bb3Dzgjs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-K3ZsP4D3.js";import"./Button-BBLXtQE-.js";import"./utils-CNWAI1YN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BmxxaD5V.js";import"./useFocusRing-Cd1zlkVw.js";import"./index-ffkNdVXt.js";import"./index-QMn_Li5K.js";import"./useLabels-D6wiLGoB.js";import"./useButton-DUM2jYvh.js";import"./RSPContexts-BJJYI1Rc.js";import"./Text-C4ycuvF6.js";import"./useDateFormatter-BjOS8sAm.js";import"./useControlledState-DRikiJpI.js";import"./useLocalizedStringFormatter-DeN0CJTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DzDfwPGw.js";import"./useEvent-BYGse6l2.js";import"./getScrollParent-D7VHFumo.js";import"./scrollIntoView-Df3KPf7G.js";import"./useDescription-QhEUd527.js";import"./VisuallyHidden-CkFGnntu.js";import"./clsx-Ciqy0D92.js";import"./Button-BwuPit9L.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-EKjaxrON.js";import"./chevron-right-DiPxFGkO.js";import"./Heading-Db99DRto.js";import"./FieldError-B2349xR_.js";import"./Text-3Lu4u5rC.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
