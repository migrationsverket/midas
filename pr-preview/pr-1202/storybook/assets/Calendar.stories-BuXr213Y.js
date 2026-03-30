import{$ as c,a as m,r as l,j as d}from"./iframe-B3vg1P6Y.js";import{C as n}from"./Calendar-K0yLuTxW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BVh-5ktZ.js";import"./Button-CnxNAqy1.js";import"./utils-n5Tj6M7m.js";import"./clsx-B-dksMZM.js";import"./Hidden-fGQAJpTQ.js";import"./useFocusRing-C6AjoB7d.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./RSPContexts-CSreTt_o.js";import"./Text-DUOd7G_7.js";import"./useDateFormatter-C2JQJDtK.js";import"./useControlledState-CZjhAhOw.js";import"./useLocalizedStringFormatter-m57n-2t8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Czvd6CfV.js";import"./useEvent-BjWnd_Rp.js";import"./getScrollParent-BLZYM11o.js";import"./scrollIntoView-BP5DeFq1.js";import"./useDescription-CNqQXY_p.js";import"./VisuallyHidden-BtPzLQ1W.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DSZ7nGmN.js";import"./createLucideIcon-CB7DrpFH.js";import"./chevron-right-CEjopSeZ.js";import"./Button-Bihgy3ar.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./Heading--hjz4TQ0.js";import"./FieldError-DFCvQgU7.js";import"./Text-BlzVF25n.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
