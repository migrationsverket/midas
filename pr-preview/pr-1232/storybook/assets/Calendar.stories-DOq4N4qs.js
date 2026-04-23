import{$ as c,a as m,r as l,j as d}from"./iframe-9FvbyuW0.js";import{C as n}from"./Calendar-BY21tTs5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DzoqqVB8.js";import"./Button-C6F5UViI.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DVuO0yGr.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./RSPContexts--6FiGTU6.js";import"./Text-DiUsHtEy.js";import"./useDateFormatter-jUaHKtc6.js";import"./useControlledState-DTpS52De.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-_5lb3g9b.js";import"./useEvent-CbyPD6wK.js";import"./getScrollParent-L3WWZsSI.js";import"./scrollIntoView-Cg5eRwi4.js";import"./useDescription-BGTuXDEN.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ca1_EupT.js";import"./createLucideIcon-BM_MsqvO.js";import"./chevron-right-CTBOfeJ2.js";import"./Button-2CN5Xnme.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Heading-CQ5wBLPw.js";import"./FieldError-DXeE9aRb.js";import"./Text-rctLJTJW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
