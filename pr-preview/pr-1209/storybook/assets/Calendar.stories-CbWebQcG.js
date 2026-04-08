import{$ as c,a as m,r as l,j as d}from"./iframe-D1quRbgW.js";import{C as n}from"./Calendar-BaOf9A_4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B4XPjf9t.js";import"./Button-BhbL5JV7.js";import"./utils-5jbBDEho.js";import"./clsx-B-dksMZM.js";import"./Hidden-CE_f7fkS.js";import"./useFocusRing-9kJRwLWf.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./RSPContexts-BOAQgN9e.js";import"./Text-3Qvoq1in.js";import"./useDateFormatter-C08qxcR3.js";import"./useControlledState-DeZ6Yvot.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DfrNQfxH.js";import"./useEvent-l8liJTej.js";import"./getScrollParent-BuLIPRgk.js";import"./scrollIntoView-Bo7c4HRy.js";import"./useDescription-CYq7ZcY8.js";import"./VisuallyHidden-BTPkzFD2.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BpllEXVc.js";import"./createLucideIcon-xiP51FEZ.js";import"./chevron-right-DcFgwL7j.js";import"./Button-BfQ6mpwy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Heading-DBO9UxDb.js";import"./FieldError-tCCfgJxh.js";import"./Text-D_OKwN2L.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
