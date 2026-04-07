import{$ as c,a as m,r as l,j as d}from"./iframe-oKPevWaY.js";import{C as n}from"./Calendar-DqXzw4Is.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BhlUkLKc.js";import"./Button-UMnKvlHB.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./Hidden-DpO7vPy1.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./RSPContexts-I8GuPoNW.js";import"./Text-NuhHAO3F.js";import"./useDateFormatter-B4gxlHV-.js";import"./useControlledState-CyVhgPro.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2uSapZk.js";import"./useEvent-IXAyeg2x.js";import"./getScrollParent-B4qiDCOv.js";import"./scrollIntoView-B_u9uatn.js";import"./useDescription-Ya8G2xdV.js";import"./VisuallyHidden-D5YwBUcA.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-2LzwcAhG.js";import"./createLucideIcon-D_CPhcXk.js";import"./chevron-right-CqH8xVGc.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Heading-CAvfyWoD.js";import"./FieldError-B9nT_kkA.js";import"./Text-CEmixCfV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
