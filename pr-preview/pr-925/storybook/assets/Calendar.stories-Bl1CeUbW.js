import{$ as p,a as m,r as l,j as d}from"./iframe-DYBbcOUc.js";import{C as n}from"./Calendar-xLkBOOKA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C5OR3SaN.js";import"./Button-Cad-DxUv.js";import"./utils-R4gvIU3G.js";import"./clsx-B-dksMZM.js";import"./Hidden-XaTnVVir.js";import"./useFocusRing-DyRUz5vb.js";import"./index-thGjz9u9.js";import"./index-D7z64vMT.js";import"./useLabels-Da2D9TrT.js";import"./useButton-COPW9UvJ.js";import"./RSPContexts-B2cERvFk.js";import"./Text-Tj7cHc4y.js";import"./useDateFormatter-CnBvpPUU.js";import"./useControlledState-mdKIrMMP.js";import"./useLocalizedStringFormatter-BWoXb-Lg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-p3JotUH7.js";import"./useEvent-uHHHA4m4.js";import"./getScrollParent-_9ehPPjd.js";import"./scrollIntoView-pqv3M8RJ.js";import"./useDescription-C8Vy8EGp.js";import"./VisuallyHidden-DNWWeoJ1.js";import"./clsx-Ciqy0D92.js";import"./Button-BOqn9nOO.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DhblIh0r.js";import"./chevron-right-Bhwc5pF9.js";import"./Heading-Bd5JRCBV.js";import"./FieldError-B2TJex7v.js";import"./Text-Bqq52gB3.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
