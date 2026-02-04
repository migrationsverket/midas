import{$ as c,a as m,r as l,j as d}from"./iframe-avvwDBBp.js";import{C as n}from"./Calendar-DRNBS_E-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-COjIoyJn.js";import"./Button-B34KA-9Z.js";import"./utils-C6AdICJ7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ft7ifkXt.js";import"./useFocusRing-x-yt5vcP.js";import"./index-Cc2TyXf4.js";import"./index-F0yeFPaK.js";import"./useLabels-BaAeHDSr.js";import"./useButton-C6RHTzzZ.js";import"./RSPContexts-BJmPPlkw.js";import"./Text-nuNh7stK.js";import"./useDateFormatter-DMnYw0Aq.js";import"./useControlledState-BQt9Xj6g.js";import"./useLocalizedStringFormatter-C0xDl-WG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bun28fGs.js";import"./useEvent-DK7Zb_XO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BiPsPzZk.js";import"./VisuallyHidden-Bjg7bFep.js";import"./clsx-Ciqy0D92.js";import"./Button-Bc5upLYd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDByPaCr.js";import"./createLucideIcon-H9RUqqbe.js";import"./chevron-left-DVc25HV7.js";import"./chevron-right-CO28Y7CN.js";import"./Heading-CcX-zHd2.js";import"./FieldError-CUJ1nOb_.js";import"./Text-BuEQRuhi.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
