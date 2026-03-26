import{$ as c,a as m,r as l,j as d}from"./iframe-CcR8w04L.js";import{C as n}from"./Calendar-B9ivFw5T.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DVDqhjxU.js";import"./Button-DiPSkE8a.js";import"./utils-af0tYTw3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DwthtQe9.js";import"./useFocusRing-D1A2CEDA.js";import"./index-DRTGbyk6.js";import"./index-cXkWMWCH.js";import"./useLabel-D1-RwtiE.js";import"./useLabels-B6AFz8zN.js";import"./useButton-BOkIyd3s.js";import"./RSPContexts-D6Nmnt3c.js";import"./Text-aSsPMv-x.js";import"./useDateFormatter-CBczpHfo.js";import"./useControlledState-CEdHUrMX.js";import"./useLocalizedStringFormatter-CgjdUKuv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Be1droyQ.js";import"./useEvent-CEJe_3LM.js";import"./getScrollParent-C12n-Bvt.js";import"./scrollIntoView-B7qNvkQR.js";import"./useDescription-Cu4rveQh.js";import"./VisuallyHidden-BpOhFVs3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C1ObjhcV.js";import"./createLucideIcon-Bth_BE09.js";import"./chevron-right-L8Uy-gMp.js";import"./Button-BiOwK_dU.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DATZ4L6m.js";import"./Heading-o1owZdV3.js";import"./FieldError-htExcrgg.js";import"./Text-BOLbzqGN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
