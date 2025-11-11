import{$ as p,a as m,r as l,j as d}from"./iframe-B_1n2Nxm.js";import{C as n}from"./Calendar-CJJxtAfC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BXhfyXom.js";import"./Button-D_D3PUIa.js";import"./utils-BGVl99QC.js";import"./clsx-B-dksMZM.js";import"./Hidden-C4OnXBk2.js";import"./useFocusRing-ly4EYUSp.js";import"./index-AffYZTwq.js";import"./index-CGcbwgsB.js";import"./useLabels-BunAkoIy.js";import"./useButton-7lsv9hhb.js";import"./RSPContexts-DMFgdgPO.js";import"./Text-CP5SbyTl.js";import"./useDateFormatter-DGja0M4I.js";import"./useControlledState-M8jeR7p8.js";import"./useLocalizedStringFormatter-MjSuGgLd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BpJ3DxnI.js";import"./useEvent-DkK5gVBP.js";import"./getScrollParent-CbCPvUd0.js";import"./scrollIntoView-CL3SITQA.js";import"./useDescription-w_NqhBP9.js";import"./VisuallyHidden-DfwErrXa.js";import"./clsx-Ciqy0D92.js";import"./Button-Ckj24ESM.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-Dd24Cy3Z.js";import"./chevron-right-84HzUAwb.js";import"./Heading-ByblWDM0.js";import"./FieldError-CoAd2X9d.js";import"./Text-BUabn6XH.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
