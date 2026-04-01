import{$ as c,a as m,r as l,j as d}from"./iframe-TDsHiw9c.js";import{C as n}from"./Calendar-CkUi-KxC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BPA2zzKv.js";import"./Button-BZ0QUIXr.js";import"./utils-DFK3ftG0.js";import"./clsx-B-dksMZM.js";import"./Hidden-aVRRAvvd.js";import"./useFocusRing-D-BQBv-v.js";import"./index-CWZOiNf1.js";import"./index-Cblya1pl.js";import"./useLabel-De4TtVrY.js";import"./useLabels-z_MUf0yQ.js";import"./useButton-Be-gBZL5.js";import"./RSPContexts-CLirld8T.js";import"./Text-BDcQTCXw.js";import"./useDateFormatter-BZgJSQ5m.js";import"./useControlledState-BONMuXu4.js";import"./useLocalizedStringFormatter-Da5BvhPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C5CzPJvJ.js";import"./useEvent-DTTf9n44.js";import"./getScrollParent-_JGFcv3G.js";import"./scrollIntoView-BIDXO_TJ.js";import"./useDescription-DSTFIc6A.js";import"./VisuallyHidden-CpvkWfyr.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ChrtA2LC.js";import"./createLucideIcon-Diz4XGXj.js";import"./chevron-right-CR95iuAz.js";import"./Button-BFdMqc_h.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DxUswB7b.js";import"./Heading-XOk9SPrR.js";import"./FieldError-D00axG9h.js";import"./Text-BTMF7VME.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
