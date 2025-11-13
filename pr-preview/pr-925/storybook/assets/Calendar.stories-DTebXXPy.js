import{$ as p,a as m,r as l,j as d}from"./iframe-Bj-I_53F.js";import{C as n}from"./Calendar-CwJ1qFOT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-y5LdhWNO.js";import"./Button-CYD4aiPQ.js";import"./utils-AYBXNHWH.js";import"./clsx-B-dksMZM.js";import"./Hidden-C4NKfEwd.js";import"./useFocusRing-3Uqdh2tR.js";import"./index-Cr9mSzEt.js";import"./index-DRLQ3B3R.js";import"./useLabels-R0WNnhTM.js";import"./useButton--bsyIudm.js";import"./RSPContexts-CldvHFix.js";import"./Text-DOZw3K2Z.js";import"./useDateFormatter-TWCzzTfx.js";import"./useControlledState-C7UYN2s_.js";import"./useLocalizedStringFormatter-DCLhEoY8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7wTPJMt.js";import"./useEvent-C0iCA9HD.js";import"./getScrollParent-DGhJvWNi.js";import"./scrollIntoView-CR2ITi7r.js";import"./useDescription-D15WWjzT.js";import"./VisuallyHidden-BHWpIZFA.js";import"./clsx-Ciqy0D92.js";import"./Button-DjY0cfru.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DCE2q9z-.js";import"./chevron-right-BQXHJe6m.js";import"./Heading-8W4drCzH.js";import"./FieldError-QaZ2d8uP.js";import"./Text-BW7nmiG_.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
