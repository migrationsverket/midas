import{$ as c,a as m,r as l,j as d}from"./iframe-CuFHe2Vf.js";import{C as n}from"./Calendar-DVKeVgJ9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D-y3yKHc.js";import"./Button-VKTXL-zI.js";import"./utils-VBjVty-c.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bu9Ft7CN.js";import"./useFocusRing-B1hdhdHY.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./RSPContexts-S1NEbTgr.js";import"./Text-BF1VogWM.js";import"./useDateFormatter-DE73Vmme.js";import"./useControlledState-JP9W3MVB.js";import"./useLocalizedStringFormatter-DOfPa_xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BiGUulod.js";import"./useEvent-D-TzDIei.js";import"./getScrollParent-BI7k-3ko.js";import"./scrollIntoView-C3vI_X5p.js";import"./useDescription-BeysD_em.js";import"./VisuallyHidden-CygALObj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-eIOplsQI.js";import"./createLucideIcon-C4YuFSR4.js";import"./chevron-right-1gFX51B9.js";import"./Button-CksL_-0o.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./Heading-fMwQ2lp0.js";import"./FieldError-BD8ZbGLc.js";import"./Text-C4mdW1tH.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
