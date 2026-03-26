import{$ as c,a as m,r as l,j as d}from"./iframe-GWyqpu_M.js";import{C as n}from"./Calendar-BvHy20Yw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C6oEsXH4.js";import"./Button-DaVw9Yu8.js";import"./utils-Dt2I5FC1.js";import"./clsx-B-dksMZM.js";import"./Hidden-i5KMI_eW.js";import"./useFocusRing-BEBkue70.js";import"./index-D2WS1qCH.js";import"./index-CwQDUu6A.js";import"./useLabel-DHRJ-v17.js";import"./useLabels-BvrpK5k3.js";import"./useButton-BCnnqreW.js";import"./RSPContexts-BgONfnva.js";import"./Text-BzWdciNH.js";import"./useDateFormatter-DQw0vMoq.js";import"./useControlledState-Cjxvjhkl.js";import"./useLocalizedStringFormatter-BQ4PapsB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-icqL0YMh.js";import"./useEvent-BwgGsclp.js";import"./getScrollParent-YkPIfx5c.js";import"./scrollIntoView-DV8eY3AZ.js";import"./useDescription-DOshPb0-.js";import"./VisuallyHidden-d58nTTlD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Bi7yjsax.js";import"./createLucideIcon-BoYLuSqv.js";import"./chevron-right-B_YoJx1T.js";import"./Button-CSLm8s2k.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CybCfRF3.js";import"./Heading-DeUIK1O6.js";import"./FieldError-BY8gNanm.js";import"./Text-P__SInd9.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
