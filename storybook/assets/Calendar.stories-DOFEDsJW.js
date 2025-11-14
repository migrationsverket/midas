import{$ as p,a as m,r as l,j as d}from"./iframe-Dnj0zt3A.js";import{C as n}from"./Calendar-DbCkd_h6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-WqwhEROw.js";import"./Button-BEMXi9hp.js";import"./utils-CZ7ujQb6.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdPJwGeM.js";import"./useFocusRing-BJGbDr4g.js";import"./index-BZ5oXR7W.js";import"./index-w9N2b8_o.js";import"./useLabels-DPkdJjpB.js";import"./useButton-DXRKrxCT.js";import"./RSPContexts-CiYHqfM8.js";import"./Text-BZcE4PZu.js";import"./useDateFormatter-CrfU4cjW.js";import"./useControlledState-BLnkZwm8.js";import"./useLocalizedStringFormatter-B0e0Ob-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DU4MYCyz.js";import"./useEvent-nNccmmdj.js";import"./getScrollParent-BUEVh28_.js";import"./scrollIntoView-D8GpqHqj.js";import"./useDescription-BuSTaiIN.js";import"./VisuallyHidden-OA8MFr3H.js";import"./clsx-Ciqy0D92.js";import"./Button-D037RcO0.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-2omQZeFD.js";import"./chevron-right-BQaFaKKs.js";import"./Heading-B3Ef_nQn.js";import"./FieldError-Ds1rpN1P.js";import"./Text-CUy2D1XG.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
