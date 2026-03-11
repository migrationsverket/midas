import{$ as c,a as m,r as l,j as d}from"./iframe-C2Yyxb_o.js";import{C as n}from"./Calendar-DoTGJf5K.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BG3v5WMJ.js";import"./Button-BIrUuJFL.js";import"./utils-WFtffLiW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgX5eHvD.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./RSPContexts-2VRlgjKK.js";import"./Text-Dt7S0YjD.js";import"./useDateFormatter-DNN4FTvl.js";import"./useControlledState-Cdg6EvLr.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DFdE-Uuv.js";import"./useEvent-DX2tR9aV.js";import"./getScrollParent-BkBLu-wI.js";import"./scrollIntoView-CyGcDExg.js";import"./useDescription-BVRp3o_m.js";import"./VisuallyHidden-B7F_lxL0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DkdbXV-J.js";import"./createLucideIcon-CfyIEXzg.js";import"./chevron-right-CsiYrXlh.js";import"./Button-BQqfifzb.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./Heading-BDvA49Rx.js";import"./FieldError-C6hW-3rq.js";import"./Text-CeM-jeK1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
