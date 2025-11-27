import{$ as p,a as m,r as l,j as d}from"./iframe-Db2uI-3P.js";import{C as n}from"./Calendar-DsCA8dhh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Wr-Fvn0P.js";import"./Button-DMQEpNPi.js";import"./utils-jUY8qSDP.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjwTIE0a.js";import"./useFocusRing-CebZnfE_.js";import"./index-CVj3Bmq5.js";import"./index-Bysub-x3.js";import"./useLabels-DN0FLkUT.js";import"./useButton-D_S8tzc1.js";import"./RSPContexts-BhzCrXR4.js";import"./Text-D0PoOoWm.js";import"./useDateFormatter-BfuxhZOX.js";import"./useControlledState-CZZXp4YV.js";import"./useLocalizedStringFormatter-3OqgJ0pn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect--KxuFyvg.js";import"./useEvent-B69IVvH-.js";import"./getScrollParent-rHNg365m.js";import"./scrollIntoView-DwOgRU02.js";import"./useDescription-Cnit1L6t.js";import"./VisuallyHidden-BhcBefFA.js";import"./clsx-Ciqy0D92.js";import"./Button-Cc1zKl5-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CXXYPB7Q.js";import"./createLucideIcon-BFgY7rx4.js";import"./chevron-right-J21fDKZa.js";import"./Heading-CcM4BiAo.js";import"./FieldError-4TO5MPa-.js";import"./Text-EcRg05iA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
