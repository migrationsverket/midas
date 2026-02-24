import{$ as c,a as m,r as l,j as d}from"./iframe-DJytE9jg.js";import{C as n}from"./Calendar-zjQfCSra.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DcLr_Ypm.js";import"./Button-CVNkhFVY.js";import"./utils-VHUq0skz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKrVS7N8.js";import"./useFocusRing-Vnrwenoe.js";import"./index-B-f9OSEP.js";import"./index-PioAU-tD.js";import"./useLabels-CkATJGoJ.js";import"./useButton-CQ5agqnn.js";import"./RSPContexts-C8SqMLv_.js";import"./Text-Bdh14pRr.js";import"./useDateFormatter-B34Xggo0.js";import"./useControlledState-_v_byBHa.js";import"./useLocalizedStringFormatter-CxnQTRGL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BVDZCEJF.js";import"./useEvent-DGji_m9a.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DI9NSFVt.js";import"./VisuallyHidden-CffJ4x8N.js";import"./clsx-Ciqy0D92.js";import"./Button-C9t41CsC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DspRbcc6.js";import"./createLucideIcon-BQp7PZIZ.js";import"./chevron-left-RnBAbIjh.js";import"./chevron-right-x-sYs4i6.js";import"./Heading-D9CTNomY.js";import"./FieldError-B3osPoIK.js";import"./Text-DlvIzI2Z.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
