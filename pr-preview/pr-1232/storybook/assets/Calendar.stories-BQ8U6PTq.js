import{$ as c,a as m,r as l,j as d}from"./iframe-CcS9-zHY.js";import{C as n}from"./Calendar-DjtE8HYG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-PlZaHwTa.js";import"./Button-CP1lY-X_.js";import"./utils-BpPVMEC-.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5RVHIuY.js";import"./useFocusRing-DtQX9EVQ.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./RSPContexts-CbDTmKmT.js";import"./Text-Bk3CxDKX.js";import"./useDateFormatter-BPy9Svt8.js";import"./useControlledState-BouQOm1H.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DpM_SBJU.js";import"./useEvent-BvvSzZ47.js";import"./getScrollParent-C09F78IA.js";import"./scrollIntoView-xMmmrx8y.js";import"./useDescription-BvrFOMAt.js";import"./VisuallyHidden-hYYm2jyD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BXjLhSK7.js";import"./createLucideIcon-C0GJ5EwW.js";import"./chevron-right-BZ-RjUty.js";import"./Button-D2itB7Px.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Heading-BXnatuTy.js";import"./FieldError-CbsUmaqP.js";import"./Text-BzFZDvz7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
