import{$ as c,a as m,r as l,j as d}from"./iframe-BULWFXB5.js";import{C as n}from"./Calendar-Dm2WLkeB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BG0j2D3w.js";import"./Button-DlgELQyz.js";import"./utils-BypaegC2.js";import"./clsx-B-dksMZM.js";import"./Hidden-iwjRZV6c.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./RSPContexts-p83zhHcS.js";import"./Text--sxnixpG.js";import"./useDateFormatter-DcEISgyu.js";import"./useControlledState-BW5BQp7c.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BGZbUXI-.js";import"./useEvent-P8B_Gb_H.js";import"./getScrollParent-BKMesRpb.js";import"./scrollIntoView-DAGd27OM.js";import"./useDescription-DGIlMGbp.js";import"./VisuallyHidden-D8sOhpgS.js";import"./clsx-Ciqy0D92.js";import"./Button-DuCjaiZE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./createLucideIcon-Ch4Yrygv.js";import"./chevron-left-BV3x2fl_.js";import"./chevron-right-DdXn-uVG.js";import"./Heading-SCHH97H1.js";import"./FieldError-C4OBGurV.js";import"./Text-DuTR7tq0.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
