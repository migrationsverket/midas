import{$ as c,a as m,r as l,j as d}from"./iframe-BkUM7oEP.js";import{C as n}from"./Calendar-j9khuSSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cu8pRBOM.js";import"./Button-UyuoNVOf.js";import"./utils-DWoj52PP.js";import"./clsx-B-dksMZM.js";import"./Hidden-iTXT5-p2.js";import"./useFocusRing-CU5ndcID.js";import"./index-Db2I9cuy.js";import"./index-BL6dPHEM.js";import"./useLabel-Digs7FVA.js";import"./useLabels-DJtxT6T3.js";import"./useButton-y66OoghU.js";import"./RSPContexts--U7gqoYU.js";import"./Text-ClKfHAct.js";import"./useDateFormatter-BRatkIp7.js";import"./useControlledState-BozTthf5.js";import"./useLocalizedStringFormatter-DeI5I3jv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CIIFjeS9.js";import"./useEvent-BugpiwQQ.js";import"./getScrollParent-DKWwh6Kx.js";import"./scrollIntoView-D6PMwzyg.js";import"./useDescription-DAIDaPzO.js";import"./VisuallyHidden-eByAjNhP.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BjdGW83_.js";import"./createLucideIcon-tb5hO106.js";import"./chevron-right-BUHWWhzG.js";import"./Button-aQxjv1sN.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B4MD3dHV.js";import"./Heading-BPZQUmdc.js";import"./FieldError-01Ml0ka5.js";import"./Text-pLibJUKD.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
