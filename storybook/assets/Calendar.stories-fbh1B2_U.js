import{$ as c,a as m,r as l,j as d}from"./iframe-Dnz7kUlg.js";import{C as n}from"./Calendar-CiPuL9N0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B2wygkt_.js";import"./Button-C6iHgC9P.js";import"./utils-CAf_-pht.js";import"./clsx-B-dksMZM.js";import"./Hidden-kcU4Hzb8.js";import"./useFocusRing-Dzszu2Vy.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./RSPContexts-Cp-T_kgY.js";import"./Text-B5WBJ4QI.js";import"./useDateFormatter-b0HQoHGa.js";import"./useControlledState-Iqz0lmAp.js";import"./useLocalizedStringFormatter-DwxYp_RG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BQu6ZFqv.js";import"./useEvent-C9zHHyc9.js";import"./getScrollParent-CEScWKZW.js";import"./scrollIntoView-DTF-X5Bx.js";import"./useDescription-BWq2pUsi.js";import"./VisuallyHidden-Dm7meOkg.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D8ghB-qu.js";import"./createLucideIcon-C7dFuUAn.js";import"./chevron-right-BYqM4bEO.js";import"./Button-DP2JC875.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./Heading-Bzl8jYcb.js";import"./FieldError-BH1ucUfl.js";import"./Text-CtOjX911.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
