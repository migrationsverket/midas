import{$ as c,a as m,r as l,j as d}from"./iframe-5gY8uiZp.js";import{C as n}from"./Calendar-Bbqj5UVu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DuSHC6Rq.js";import"./Button-CTvN5iBJ.js";import"./utils-DECZjV3X.js";import"./clsx-B-dksMZM.js";import"./Hidden-CJ0_VQq2.js";import"./useFocusRing-Boel07eM.js";import"./index-TGVZlA7L.js";import"./index-CLK4xEXj.js";import"./useLabels-Di96fV3Q.js";import"./useButton-4X48dbK-.js";import"./RSPContexts-B5FLXJGX.js";import"./Text-DX1n20pB.js";import"./useDateFormatter-BjtzwHb0.js";import"./useControlledState-D5A6R61M.js";import"./useLocalizedStringFormatter-DZ0rZsWI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DfoKivfl.js";import"./useEvent-DxUtadp_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-07SEN0Vw.js";import"./VisuallyHidden-CoBV_pcx.js";import"./clsx-Ciqy0D92.js";import"./Button-VUiFd7fg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_Dnj8gb8.js";import"./createLucideIcon-B1QC88uT.js";import"./chevron-left-B8Do5mSM.js";import"./chevron-right-BvgmCht0.js";import"./Heading-ftpgvw5S.js";import"./FieldError-Cj22ksHa.js";import"./Text-C5V7OBlJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
