import{$ as c,a as m,r as l,j as d}from"./iframe-DCTfXxhU.js";import{C as n}from"./Calendar-B9RFKqxn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BKBT6ovj.js";import"./Button-CFGQLTfC.js";import"./utils-nW_xli8K.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dz79xEs9.js";import"./useFocusRing-DkB_y7Fd.js";import"./index-mul5IfuL.js";import"./index-oL1NoEtf.js";import"./useLabel-5AB1LZK2.js";import"./useLabels-DDnu_dmS.js";import"./useButton-Dit7Lb_r.js";import"./RSPContexts-C4YWDn84.js";import"./Text-5UTT66SL.js";import"./useDateFormatter-BIQND890.js";import"./useControlledState-2cB3sfef.js";import"./useLocalizedStringFormatter-CXqAKE2A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BhvcEfLg.js";import"./useEvent-OuWmKtZ0.js";import"./getScrollParent-DwM-DNDW.js";import"./scrollIntoView-B6roOr1g.js";import"./useDescription-DDe33wr-.js";import"./VisuallyHidden-BmJc66Gc.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BSWvBFC0.js";import"./createLucideIcon-2FpY4XeI.js";import"./chevron-right-NPtmmmVm.js";import"./Button-9AP9GDtE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D6vCsR43.js";import"./Heading-SRtQzMK0.js";import"./FieldError-CjtBgxrO.js";import"./Text-Caoun6Yq.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
