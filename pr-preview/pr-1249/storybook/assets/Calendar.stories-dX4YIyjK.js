import{$ as c,a as m,r as l,j as d}from"./iframe-BaDPacjd.js";import{C as n}from"./Calendar-CfMBorSt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bk__Nwcb.js";import"./Button-xqG4BSxe.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./Hidden-wYkIMllK.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./RSPContexts-Q8mL0bRp.js";import"./Text-D9IIAziF.js";import"./useDateFormatter-D9E8VM5-.js";import"./useControlledState-C7Qyb7bs.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOi3uH8F.js";import"./useEvent-DWbcd_98.js";import"./getScrollParent-CQLO__Ec.js";import"./scrollIntoView-DP2ELaPl.js";import"./useDescription-4MxSlUac.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B6zRL8IQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./chevron-right-CF_55HPd.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Heading-Bf9R16Cd.js";import"./FieldError-CCoQDHBS.js";import"./Text-maDwTHxG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
