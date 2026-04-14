import{$ as c,a as m,r as l,j as d}from"./iframe-CUSvXe23.js";import{C as n}from"./Calendar-BGvXK33o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DUu4gvgm.js";import"./Button-C1-Re332.js";import"./utils-CkRXDuX-.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dhsax2Cn.js";import"./useFocusRing-BuJn1tRD.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./RSPContexts-BfFZIYKm.js";import"./Text-DLWDclOW.js";import"./useDateFormatter-B7HBaDhw.js";import"./useControlledState-BDwJH1MB.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DpVMtmWZ.js";import"./useEvent-DjixHLjK.js";import"./getScrollParent-DO1MdHqq.js";import"./scrollIntoView-CjSFcs3B.js";import"./useDescription-CSzbO1wx.js";import"./VisuallyHidden-YrO2RMP0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ChZE5zZE.js";import"./createLucideIcon-Ce9oZthD.js";import"./chevron-right-BMawQhDO.js";import"./Button-ricz7KuE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Heading-CG9en55N.js";import"./FieldError-t8sTtSNx.js";import"./Text-NxTN73uc.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
