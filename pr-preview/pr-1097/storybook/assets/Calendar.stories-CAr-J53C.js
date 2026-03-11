import{$ as c,a as m,r as l,j as d}from"./iframe-D381uj8d.js";import{C as n}from"./Calendar-CjFiJQ8-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjM_kOdC.js";import"./Button-Blu5st7x.js";import"./utils-BSviX3Ff.js";import"./clsx-B-dksMZM.js";import"./Hidden-DtUrHuzu.js";import"./useFocusRing-XLKEWfrJ.js";import"./index-BKX3b3m1.js";import"./index-C8AAmpqg.js";import"./useLabels-D6WYJJ-R.js";import"./useButton-BNKAP6aC.js";import"./RSPContexts-CxY0kGcY.js";import"./Text-D3f-LNKt.js";import"./useDateFormatter-dQj7tdI9.js";import"./useControlledState-Dxnyxp1Q.js";import"./useLocalizedStringFormatter-DU6NoriM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B96vznzF.js";import"./useEvent-BaQbryFM.js";import"./getScrollParent-DpoWOL0W.js";import"./scrollIntoView-BI2NKYX3.js";import"./useDescription-BQBcT-qS.js";import"./VisuallyHidden-CbbcMkM6.js";import"./clsx-Ciqy0D92.js";import"./Button-BPKQXIdy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DHOXMFVV.js";import"./createLucideIcon-vVf7zZDS.js";import"./chevron-left-DxHrIT9A.js";import"./chevron-right-Bg9sbOlP.js";import"./Heading-ebrDIS4D.js";import"./FieldError-DuxnDAnQ.js";import"./Text-DGswq3xo.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
