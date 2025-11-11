import{$ as p,a as m,r as l,j as d}from"./iframe-C8ZRuzT6.js";import{C as n}from"./Calendar-CXuMcJc7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B0sn-Ckb.js";import"./Button-DCD_n0HI.js";import"./utils-C84SkkdT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgSXhjQ3.js";import"./useFocusRing-CFhXuih-.js";import"./index-uCHJlnyo.js";import"./index-B6Y3uvN4.js";import"./useLabels-JokUTrF_.js";import"./useButton-cLFZH3Vu.js";import"./RSPContexts-V5ia4aqN.js";import"./Text-BXfBqZ1f.js";import"./useDateFormatter-CbRI20CF.js";import"./useControlledState-CET-geoU.js";import"./useLocalizedStringFormatter-a2xA8nMP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5WwTKaW.js";import"./useEvent-B0eRtjXK.js";import"./getScrollParent-fYAg6uM-.js";import"./scrollIntoView-C0RUUlHR.js";import"./useDescription-BNQ8ykdi.js";import"./VisuallyHidden-BvZrm0U-.js";import"./clsx-Ciqy0D92.js";import"./Button-Cn5XNJYk.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BgwGjT-s.js";import"./chevron-right-BJvnUPhi.js";import"./Heading-C0_h2u0m.js";import"./FieldError-B5DpnWry.js";import"./Text-Dg-GiAXO.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
