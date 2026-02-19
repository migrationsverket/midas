import{$ as c,a as m,r as l,j as d}from"./iframe-Yvl_hQp1.js";import{C as n}from"./Calendar-ZdsfoXkg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-trIqK9-2.js";import"./Button-BJxa14qf.js";import"./utils-DYWQ1ZEX.js";import"./clsx-B-dksMZM.js";import"./Hidden-BepZ5jXl.js";import"./useFocusRing-B03ZjHpo.js";import"./index-DOjFyTO0.js";import"./index-ClsdGyI8.js";import"./useLabels-ChKgIqy0.js";import"./useButton-Zt3QI29N.js";import"./RSPContexts-Cb4Wpr2g.js";import"./Text-BVqhKK-w.js";import"./useDateFormatter-C00lSLm7.js";import"./useControlledState-DyHxCAdy.js";import"./useLocalizedStringFormatter-BuxVSRdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D4L84otH.js";import"./useEvent-CQvT5sdB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B_NDvIIC.js";import"./VisuallyHidden-CLE8P4Kj.js";import"./clsx-Ciqy0D92.js";import"./Button-B2x0GTnC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DBNxzRKc.js";import"./createLucideIcon-B92K0nKO.js";import"./chevron-left-B5_FICFS.js";import"./chevron-right-iAn3QKcM.js";import"./Heading-BJCMYoW7.js";import"./FieldError-B1qUY16S.js";import"./Text-C7yRWRnj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
