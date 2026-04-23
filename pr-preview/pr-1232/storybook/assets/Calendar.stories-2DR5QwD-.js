import{$ as c,a as m,r as l,j as d}from"./iframe-CUW_txz6.js";import{C as n}from"./Calendar-CAjZZBbL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C-IDopVP.js";import"./Button-DJT34vsz.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6dZGZNF.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./RSPContexts-DYx0iF5j.js";import"./Text-Bi2kB5GC.js";import"./useDateFormatter-CI_m4Nh6.js";import"./useControlledState-BuDrosJG.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFPmFjx-.js";import"./useEvent-CHrrjSKK.js";import"./getScrollParent-DWW6JN_D.js";import"./scrollIntoView-D8kVtkIc.js";import"./useDescription-DeV7fvLF.js";import"./VisuallyHidden-C2eTcyAK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BmrFDQA6.js";import"./createLucideIcon-Cc0DwuLE.js";import"./chevron-right-B8Jsgon0.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Heading-rIzkF3u3.js";import"./FieldError-BBiP0jfO.js";import"./Text-DvPi9pFM.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
