import{$ as p,a as m,r as l,j as d}from"./iframe-CNsxVRri.js";import{C as n}from"./Calendar-DXFu-oAp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ICYMkXYO.js";import"./Button-Do7i_7km.js";import"./utils-Co8chztC.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMs7iDYH.js";import"./useFocusRing-DsaNSwIK.js";import"./index-iQGs7ivC.js";import"./index-xzFc3yKu.js";import"./useLabels-DqA2utri.js";import"./useButton-DcobyQYb.js";import"./RSPContexts-C2NqX-xc.js";import"./Text-BcPHhIoD.js";import"./useDateFormatter-D2L-tAks.js";import"./useControlledState-CUxSahqU.js";import"./useLocalizedStringFormatter-BPCDmmQm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DFm155s-.js";import"./useEvent-BWpSMV0r.js";import"./getScrollParent-DME4hMuJ.js";import"./scrollIntoView-ClfUnk7u.js";import"./useDescription-D59E3gfa.js";import"./VisuallyHidden-8GTBfxVg.js";import"./clsx-Ciqy0D92.js";import"./Button-BVskKP47.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C5Du77Az.js";import"./createLucideIcon-RNATAqG3.js";import"./chevron-right-DRA2N_uw.js";import"./Heading-DaJq3jyB.js";import"./FieldError-CQWVGndw.js";import"./Text-B0puKBqo.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
