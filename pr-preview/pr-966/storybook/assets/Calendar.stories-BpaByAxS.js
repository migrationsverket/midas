import{$ as p,a as m,r as l,j as d}from"./iframe-DfJuQE8m.js";import{C as n}from"./Calendar-YQg5vexv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cd_q1NPi.js";import"./Button-C1h3qiWM.js";import"./utils-DhOIe8g4.js";import"./clsx-B-dksMZM.js";import"./Hidden-L0FDO2bN.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./RSPContexts-Bl-t2YWe.js";import"./Text-BE6FOv1W.js";import"./useDateFormatter-DBWh9H55.js";import"./useControlledState-eRrBZcf1.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5Uylvci.js";import"./useEvent-sIyE_x4m.js";import"./getScrollParent-irao4iUV.js";import"./scrollIntoView-BOxlOCOK.js";import"./useDescription-Cvwf_bWB.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./clsx-Ciqy0D92.js";import"./Button-DUMkSbLt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";import"./createLucideIcon-Bek8kOw5.js";import"./chevron-right-PViKXHGv.js";import"./Heading-BJwMHQcl.js";import"./FieldError-C1ud7pvY.js";import"./Text-C0meLp2u.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
