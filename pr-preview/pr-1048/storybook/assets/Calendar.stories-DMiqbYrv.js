import{$ as m,a as c,r as l,j as d}from"./iframe-C1J9c0Wx.js";import{C as n}from"./Calendar-BoHxj2ZM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjDPkVmv.js";import"./Button-sRVT8Zzh.js";import"./utils-D-Kximqc.js";import"./useObjectRef-DApwTN-e.js";import"./clsx-B-dksMZM.js";import"./Hidden-D_HMLWkk.js";import"./useFocusRing-DnL4kdEi.js";import"./useFocusable-DpJQLcZ9.js";import"./index-DyM7miu3.js";import"./index-D1okWCVE.js";import"./useLabels-BM_CzPRL.js";import"./useButton-D6tu_qKw.js";import"./RSPContexts-C4ZFOry7.js";import"./Text-CWSZibPG.js";import"./useDateFormatter-BshKqW_j.js";import"./useControlledState-CSlbmBUy.js";import"./useLocalizedStringFormatter-DwMRkuit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-T-NI_Q.js";import"./useEvent-7oArEk9L.js";import"./getScrollParent-D4l3WZmm.js";import"./scrollIntoView-2xpKk0tJ.js";import"./useDescription-Dqtl0cRO.js";import"./VisuallyHidden-DFJgjeMD.js";import"./clsx-Ciqy0D92.js";import"./Button-oYildcGz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-xPxlWEwQ.js";import"./createLucideIcon-CAqL_OOk.js";import"./chevron-left-CzpySNlU.js";import"./chevron-right-c06rVbJb.js";import"./Heading-Di6-X6Hh.js";import"./FieldError-C498Gxi4.js";import"./Text-LXNgL2Cy.js";const V={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>c(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,X as __namedExportsOrder,V as default};
