import{$ as p,a as m,r as l,j as d}from"./iframe-BH1_R2DT.js";import{C as n}from"./Calendar-DlsNl_3U.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B3_q1-JM.js";import"./Button-DaJwfJY_.js";import"./utils-BVGwIGlb.js";import"./clsx-B-dksMZM.js";import"./Hidden-kAD8IT6R.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./RSPContexts-CanWJetA.js";import"./Text-BSV7h1MS.js";import"./useDateFormatter-ZZuvpnWC.js";import"./useControlledState--SS9_6v3.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-s_uSDnn6.js";import"./useEvent-DFDc_5v7.js";import"./getScrollParent-Cf46SMxm.js";import"./scrollIntoView-CEB_t1nR.js";import"./useDescription-U6ZvYwCQ.js";import"./VisuallyHidden-CT5D58WX.js";import"./clsx-Ciqy0D92.js";import"./Button-BnyEfxrm.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-ii3gKTw6.js";import"./chevron-right-CYaH8xEc.js";import"./Heading-DXJmqslE.js";import"./FieldError-BmHCkNY9.js";import"./Text-DLnNCVmf.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
