import{$ as c,a as m,r as l,j as d}from"./iframe-BusKbIuL.js";import{C as n}from"./Calendar-BeafNG3W.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcdmOz3S.js";import"./Button-D16PjYbu.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Hidden-IsjPxMOX.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./RSPContexts-CMg-o8P6.js";import"./Text-By1Rmolv.js";import"./useDateFormatter-KNHNRCjp.js";import"./useControlledState-VeRXhIhk.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BoonRRtT.js";import"./useEvent-D1SRwD2V.js";import"./getScrollParent-BBgpxqF_.js";import"./scrollIntoView-DVC3yEfE.js";import"./useDescription-0cGLMs3d.js";import"./VisuallyHidden-DfUkCTQh.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-w7EXOBOP.js";import"./createLucideIcon-CsIH265l.js";import"./chevron-right-DGJNOiWK.js";import"./Button-CEECLnQG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Heading-MC_GZ1Jp.js";import"./FieldError-DYrJGow5.js";import"./Text-BSlgEswi.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
