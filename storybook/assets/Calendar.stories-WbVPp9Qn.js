import{$ as p,a as m,r as l,j as d}from"./iframe-xQKE6wa6.js";import{C as n}from"./Calendar-ClZ6vqKH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-d15PZh8_.js";import"./Button-Bt7XBPAl.js";import"./utils-7domtJUf.js";import"./clsx-B-dksMZM.js";import"./Hidden-tXn6HuYt.js";import"./useFocusRing-1X-zoPws.js";import"./index-DKS5doAt.js";import"./index-DrDygLFm.js";import"./useLabels-D4MCwU7s.js";import"./useButton-DqqVSO88.js";import"./RSPContexts-0gzSG6tx.js";import"./Text-D5teWlx5.js";import"./useDateFormatter-BiP25E3d.js";import"./useControlledState-DfGN0GbI.js";import"./useLocalizedStringFormatter-B7SsWOnS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-pg5I-DGG.js";import"./useEvent-7P8ycwW7.js";import"./getScrollParent-Cju36vrW.js";import"./scrollIntoView-DBfFv-dr.js";import"./useDescription-BX41Wstb.js";import"./VisuallyHidden-CWmr-2Og.js";import"./clsx-Ciqy0D92.js";import"./Button-V66Mfsaz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C_k1kBfl.js";import"./createLucideIcon-CCTWRIL7.js";import"./chevron-right-BLPDeMqB.js";import"./Heading-CIDLnbCA.js";import"./FieldError-BacFZILj.js";import"./Text-Z6s--rdv.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
