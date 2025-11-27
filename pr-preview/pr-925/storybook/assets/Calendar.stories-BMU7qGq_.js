import{$ as p,a as m,r as l,j as d}from"./iframe-8NxkOHC0.js";import{C as n}from"./Calendar-DN8ZxB1p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-p7RyJ0OC.js";import"./Button-CBX6q1X7.js";import"./utils-BjJTDc6K.js";import"./clsx-B-dksMZM.js";import"./Hidden-ARem1YbJ.js";import"./useFocusRing-Ai_dklgC.js";import"./index-Dp_nq2C7.js";import"./index-C0eAkoQ8.js";import"./useLabels-BwvuP5Nn.js";import"./useButton-gPG0D9SS.js";import"./RSPContexts-COvuTsKM.js";import"./Text-CAM644I6.js";import"./useDateFormatter-8C_ntKGT.js";import"./useControlledState-xUvVHfPd.js";import"./useLocalizedStringFormatter-Clupnulk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-MDyt2j0-.js";import"./useEvent-D0REUeSa.js";import"./getScrollParent-DeCDJb6-.js";import"./scrollIntoView-jhVEGj5Z.js";import"./useDescription-CVSDalp1.js";import"./VisuallyHidden-nH3VdIbm.js";import"./clsx-Ciqy0D92.js";import"./Button-be8rRcw-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SobQoFpC.js";import"./createLucideIcon-Zab4VPSU.js";import"./chevron-right-DCRHpYWf.js";import"./Heading-NJOheOkw.js";import"./FieldError-CzI3oRhH.js";import"./Text-CFZh4J2g.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
