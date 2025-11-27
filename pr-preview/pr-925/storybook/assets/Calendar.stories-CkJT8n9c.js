import{$ as c,a as m,r as l,j as d}from"./iframe-CwLkjgpT.js";import{C as n}from"./Calendar-B9YqMtlg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTfuWY2k.js";import"./Button-CQyRRKMW.js";import"./utils-DSWzARDZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DdX0U8LA.js";import"./useFocusRing-DAwt605V.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./useLabels-C8OlSCO5.js";import"./useButton-BS52WYPg.js";import"./RSPContexts-5uc_6UdN.js";import"./Text-BZsBZWaE.js";import"./useDateFormatter-CN5g5K_7.js";import"./useControlledState-aJ_MxFDE.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-t_UoM87h.js";import"./useEvent-D_IHmf9Z.js";import"./getScrollParent-C95P398o.js";import"./scrollIntoView-CO_UKuN0.js";import"./useDescription-DbGCeq7X.js";import"./VisuallyHidden-DcUNvP8l.js";import"./clsx-Ciqy0D92.js";import"./Button-DtGuvUjf.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BIv7akwD.js";import"./createLucideIcon-DeGNxWTw.js";import"./chevron-right-8PfJho--.js";import"./Heading-DmQGtzi_.js";import"./FieldError-DGr3c4Fy.js";import"./FieldError-D0HGPYoR.js";import"./Text-BQIFYXN4.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
