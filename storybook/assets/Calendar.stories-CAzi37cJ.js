import{$ as p,a as m,r as l,j as d}from"./iframe-DZEIteCN.js";import{C as n}from"./Calendar-BVTzXeNv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-uUVBedOn.js";import"./Button-DNUZR8YI.js";import"./utils-eXp6hAHi.js";import"./clsx-B-dksMZM.js";import"./Hidden-GV6GWw5Y.js";import"./useFocusRing-TrwNJxcu.js";import"./index-DKBVfWmd.js";import"./index-hdIbQAxi.js";import"./useLabels-jjULFaK5.js";import"./useButton-BciHUgcd.js";import"./RSPContexts-BY213k3w.js";import"./Text-Cc24C9N6.js";import"./useDateFormatter-DhaFTHDA.js";import"./useControlledState-BuIMy712.js";import"./useLocalizedStringFormatter-D6LBwpE0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CT3Ihuka.js";import"./useEvent-UJPseaF2.js";import"./getScrollParent-Cr6boEsG.js";import"./scrollIntoView-CNZ7FSWt.js";import"./useDescription-sB8LMHwe.js";import"./VisuallyHidden-CPxzvlXi.js";import"./clsx-Ciqy0D92.js";import"./Button-CX_w9LKp.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-8k5sNgIw.js";import"./chevron-right-jZHkdpoU.js";import"./Heading-Cho1JDkX.js";import"./FieldError-ChK9olYH.js";import"./Text-DBxfC0s8.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
