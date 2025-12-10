import{$ as p,a as m,r as l,j as d}from"./iframe-BHqTUq8s.js";import{C as n}from"./Calendar-FgCfK4BP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BeEc7JMc.js";import"./Button-CE94D4y2.js";import"./utils-Bj3EyYaW.js";import"./clsx-B-dksMZM.js";import"./Hidden-N1ucyMbU.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./RSPContexts-Ttp8fkt6.js";import"./Text-l0B9lw7d.js";import"./useDateFormatter-Do7mpLoU.js";import"./useControlledState-VO85oOjD.js";import"./useLocalizedStringFormatter-Bp2mibmh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bU03uSJ6.js";import"./useEvent-C1jiU2Qc.js";import"./getScrollParent-uOpIaMSZ.js";import"./scrollIntoView-D02Gxwgm.js";import"./useDescription-SMoFRkYN.js";import"./VisuallyHidden-BluHmF1Q.js";import"./clsx-Ciqy0D92.js";import"./Button-B5hBY_tv.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-Djq8wsFX.js";import"./createLucideIcon-ClnAiwMi.js";import"./chevron-right-DC-aRKjz.js";import"./Heading-Bk9UwyhT.js";import"./FieldError-DRRjbRt6.js";import"./Text-BNa5DR9o.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
