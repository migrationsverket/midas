import{$ as p,a as m,r as l,j as d}from"./iframe-L3ZiwQam.js";import{C as n}from"./Calendar-BccfsAuE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BeP8Jn1i.js";import"./Button-BdnTjb0J.js";import"./utils-8_0C2edU.js";import"./clsx-B-dksMZM.js";import"./Hidden-p2g1pf0R.js";import"./useFocusRing-xkAUyvIA.js";import"./index-CTyHgkao.js";import"./index-C7aC8kzM.js";import"./useLabels-BPwrjTKQ.js";import"./useButton-kd668K9b.js";import"./RSPContexts-Dirc5gTa.js";import"./Text-VmXli42R.js";import"./useDateFormatter-DgArpHMB.js";import"./useControlledState-Dpt5Xs4z.js";import"./useLocalizedStringFormatter-CAQOHLqK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ues5REYN.js";import"./useEvent-Dw1NpWTu.js";import"./getScrollParent-DlD0-RJx.js";import"./scrollIntoView-CsuURo36.js";import"./useDescription-D_158S4T.js";import"./VisuallyHidden-D6HuS3bN.js";import"./clsx-Ciqy0D92.js";import"./Button-DGRhcKVW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SIx4tihu.js";import"./createLucideIcon-BAFEPMu5.js";import"./chevron-right-DDnpdCaI.js";import"./Heading-BYh2sWiY.js";import"./FieldError-BqSjwlEK.js";import"./Text-DEU87KDU.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
