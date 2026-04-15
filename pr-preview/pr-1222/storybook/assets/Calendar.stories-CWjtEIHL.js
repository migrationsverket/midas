import{$ as c,a as m,r as l,j as d}from"./iframe-DjTiQbk5.js";import{C as n}from"./Calendar-CkkXYQp9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CwNC_bnl.js";import"./Button-DA9JAHIV.js";import"./utils-ionmxpx_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CDamOlST.js";import"./useFocusRing-DMf_tcM8.js";import"./index-zhJsHxyL.js";import"./index-D7ZGMXkv.js";import"./useLabel-CLuSEdHo.js";import"./useLabels-BB0a4MRb.js";import"./useButton-CB170Mhz.js";import"./RSPContexts-BQojnwjm.js";import"./Text-C_ch0y44.js";import"./useDateFormatter-BtMpQWBj.js";import"./useControlledState-DLtB8m1U.js";import"./useLocalizedStringFormatter-b3SQCftA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bxD2f_cG.js";import"./useEvent-DGEghV1n.js";import"./getScrollParent-X2PToduC.js";import"./scrollIntoView-JFwGorYi.js";import"./useDescription-DnMRFmWg.js";import"./VisuallyHidden-CQ7IztLz.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DEnM_Qql.js";import"./createLucideIcon-CJ41k5Dv.js";import"./chevron-right-Dx1bQUMc.js";import"./Button-DB82qK_z.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bs_4plvK.js";import"./Heading-xT31pYvP.js";import"./FieldError-CUTcgzRi.js";import"./Text-Cem6pM3f.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
