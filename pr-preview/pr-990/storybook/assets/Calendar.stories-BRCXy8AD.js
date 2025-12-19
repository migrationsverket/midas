import{$ as p,a as m,r as l,j as d}from"./iframe-BGGCyDgM.js";import{C as n}from"./Calendar-Y-G-oqAJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-a8cxdA_Y.js";import"./Button-Cx7yfezp.js";import"./utils-DO-F69_Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-C8IUZiWg.js";import"./useFocusRing-CgXHCqVS.js";import"./index-D897gEwO.js";import"./index-B5Wjey1h.js";import"./useLabels-BYquqqxS.js";import"./useButton-BLQQLHjW.js";import"./RSPContexts-DD_BGhEj.js";import"./Text-eYsAB99o.js";import"./useDateFormatter-BIVVlLT1.js";import"./useControlledState-B0GTzqoE.js";import"./useLocalizedStringFormatter-DTenb4Ru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B2eUsUgl.js";import"./useEvent-DqUhpkp2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DxzFv_6R.js";import"./VisuallyHidden-i3QblTNI.js";import"./clsx-Ciqy0D92.js";import"./Button-CbQXvBqq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEbUSZ1g.js";import"./createLucideIcon-DYtt1YAX.js";import"./chevron-right-DFi6m0tM.js";import"./Heading-C52-gJ0N.js";import"./FieldError-Dl2BDJut.js";import"./Text-f8Fpe_5q.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
