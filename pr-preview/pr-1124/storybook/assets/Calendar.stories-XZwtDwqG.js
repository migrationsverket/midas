import{$ as c,a as m,r as l,j as d}from"./iframe-C-K27eAl.js";import{C as n}from"./Calendar-C7mYznfc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ti9cQw8C.js";import"./Button-BT6WGe3E.js";import"./utils-CJaZGGf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Vwjx6V0Q.js";import"./useFocusRing-DxSA2Sop.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./RSPContexts-BEdbbOnm.js";import"./Text-CDT_NlP5.js";import"./useDateFormatter-CQbUK3x1.js";import"./useControlledState-BS7oDD3M.js";import"./useLocalizedStringFormatter-Cnb01dil.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-SZa1eLCQ.js";import"./useEvent-BZmViZJ-.js";import"./getScrollParent-DeiG1Qzx.js";import"./scrollIntoView-DCPl_J-b.js";import"./useDescription-xQJDPJMa.js";import"./VisuallyHidden-u6B1l6x2.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cy0WLoQH.js";import"./createLucideIcon-3jo47RrT.js";import"./chevron-right-DNd1ojop.js";import"./Button-BIatrZTr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./Heading-Bop2F2Rg.js";import"./FieldError-BgyRuz1D.js";import"./Text-BSrzc_20.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
