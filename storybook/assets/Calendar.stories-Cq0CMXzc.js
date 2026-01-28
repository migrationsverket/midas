import{$ as c,a as m,r as l,j as d}from"./iframe-BBs4_N6h.js";import{C as n}from"./Calendar-DsZ8t3IM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C9fSuwuh.js";import"./Button-Xr6dJxVX.js";import"./utils-DQWEvmcK.js";import"./clsx-B-dksMZM.js";import"./Hidden-Vg2S_tOJ.js";import"./useFocusRing-C2UWZwX7.js";import"./index-DSf7Rq9d.js";import"./index-DgjA7sBY.js";import"./useLabels-2mnglK4H.js";import"./useButton-C_pkSc3R.js";import"./RSPContexts-BwJ1wfP5.js";import"./Text-Docz9roa.js";import"./useDateFormatter-BQpWLfYx.js";import"./useControlledState-BjCb2bRF.js";import"./useLocalizedStringFormatter-CAgc08WU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CCKcSMma.js";import"./useEvent-Ca5WwQl8.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C5nfsD6n.js";import"./VisuallyHidden-DBQc_FBH.js";import"./clsx-Ciqy0D92.js";import"./Button-Bf3i2B3M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYezl8xZ.js";import"./createLucideIcon-qvf3G-BL.js";import"./chevron-left-Dh-qRq8T.js";import"./chevron-right-CwLui1tJ.js";import"./Heading-CEt-X43O.js";import"./FieldError-BhhOnxLS.js";import"./Text-DQhNGrME.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
