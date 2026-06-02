import{$ as c,a as m,r as l,j as d}from"./iframe-BJBIw5Cq.js";import{C as n}from"./Calendar-BX-DDJl8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B66LmkrG.js";import"./Button-KImsPJcr.js";import"./utils-Do0BAiOq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNTBl7tD.js";import"./useFocusRing-6yeL08Aa.js";import"./index-BWG0al_j.js";import"./index-C6qgraqq.js";import"./useLabel-D1yIUKnX.js";import"./useLabels-CYs1MfMV.js";import"./useButton-DvDYy4Od.js";import"./RSPContexts-C-cLQ1LZ.js";import"./Text-CMOpEkqD.js";import"./useDateFormatter-Oqmk124h.js";import"./useControlledState-BjWINJro.js";import"./useLocalizedStringFormatter-Di4p2xx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cso8x3si.js";import"./useEvent-B8uiyVUy.js";import"./getScrollParent-52puNM91.js";import"./scrollIntoView-Y4Xyrix4.js";import"./useDescription-8I1puxrW.js";import"./VisuallyHidden-DIaZA2Ke.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BGnJZy3a.js";import"./createLucideIcon-c6giaxW9.js";import"./chevron-right-i6UZ-jN9.js";import"./Button-DIUVHLbR.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dv9eZvrq.js";import"./Heading-BgcK3ply.js";import"./FieldError-CrniQlrG.js";import"./Text-DqMXqkzU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
