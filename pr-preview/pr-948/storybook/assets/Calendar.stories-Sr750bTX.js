import{$ as p,a as m,r as l,j as d}from"./iframe-g7NEJkuC.js";import{C as n}from"./Calendar-CpQA3pSX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DzvuEOjF.js";import"./Button-DLz7qxXY.js";import"./utils-0G2rZpWX.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0w2WJXS.js";import"./useFocusRing-umR6fa2b.js";import"./index-CHObnUG4.js";import"./index-D3ZTBEsf.js";import"./useLabels-CaMMn4xN.js";import"./useButton-DLlC1wR-.js";import"./RSPContexts-DnvA1an_.js";import"./Text-2wl8S3yv.js";import"./useDateFormatter-DFxNpYDl.js";import"./useControlledState-BfrgZwaU.js";import"./useLocalizedStringFormatter-Ck5RdZog.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZB4_S79.js";import"./useEvent-B-pgGpBm.js";import"./getScrollParent-DPVMq2vt.js";import"./scrollIntoView-BhdzKXRp.js";import"./useDescription-Q7smjSa7.js";import"./VisuallyHidden-DsC2d4kL.js";import"./clsx-Ciqy0D92.js";import"./Button-wkNo0dzg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BH3Jo7uS.js";import"./createLucideIcon-968lwoO8.js";import"./chevron-right-Btj83l5M.js";import"./Heading-Cuo-BxH3.js";import"./FieldError-BxotCqXX.js";import"./Text-COXbJ1k6.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
