import{$ as p,a as m,r as l,j as d}from"./iframe-BFAT86ge.js";import{C as n}from"./Calendar-CdaN_JRI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BlBVcmfE.js";import"./Button-DLAy5IOQ.js";import"./utils-Ba9aKAk3.js";import"./clsx-B-dksMZM.js";import"./Hidden-eduYOiEE.js";import"./useFocusRing-DMrOFPKB.js";import"./index-BFncSmEm.js";import"./index-frs3Q4tr.js";import"./useLabels-C6lMhNDy.js";import"./useButton-B3TVvISn.js";import"./RSPContexts-BYWA1x4J.js";import"./Text-ZCo5zKuv.js";import"./useDateFormatter-DIamQ1q_.js";import"./useControlledState-CkPmYDR8.js";import"./useLocalizedStringFormatter-EcwRZ9Dr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-MT42jF0_.js";import"./useEvent-CnO47SCe.js";import"./getScrollParent-CsKOuMBX.js";import"./scrollIntoView-BSaH7Nmd.js";import"./useDescription-Cc9k7uL8.js";import"./VisuallyHidden-CyAMcSTC.js";import"./clsx-Ciqy0D92.js";import"./Button-D7VV456q.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D_c5jWec.js";import"./createLucideIcon-DcKvq49U.js";import"./chevron-right-DHq2t2cs.js";import"./Heading-BPJd7_5o.js";import"./FieldError-D620tWPG.js";import"./Text-DuhPYjo1.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
