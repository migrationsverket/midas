import{$ as c,a as m,r as l,j as d}from"./iframe-CjS4NLOn.js";import{C as n}from"./Calendar-CSWI1OmX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CHgcyT-G.js";import"./Button-Dd-c5XOo.js";import"./utils-Bd-AzVom.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQ5FusQj.js";import"./useFocusRing-DglKaSCo.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./RSPContexts-kqnwGWDt.js";import"./Text-BbW2XwBz.js";import"./useDateFormatter-DGJuVjfo.js";import"./useControlledState-BbWK1__y.js";import"./useLocalizedStringFormatter-gid5zSz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DS0b_jEY.js";import"./useEvent-CiAr47a4.js";import"./getScrollParent-CSIbG2HY.js";import"./scrollIntoView-2fiPBvL-.js";import"./useDescription-CBNmeEe_.js";import"./VisuallyHidden-CY_5XPqM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CU94k6jT.js";import"./createLucideIcon-DkfyV_c3.js";import"./chevron-right-CZZ5ato1.js";import"./Button-iv9BguPP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./Heading-pmYegQEd.js";import"./FieldError-mjdlktiQ.js";import"./Text-CX-M1xx_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
