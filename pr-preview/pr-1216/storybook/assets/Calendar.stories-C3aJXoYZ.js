import{$ as c,a as m,r as l,j as d}from"./iframe-CYSKzr0I.js";import{C as n}from"./Calendar-CdPQ0Pic.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DNzeJIC3.js";import"./Button-DDpb5IsZ.js";import"./utils-ByZ0CNGg.js";import"./clsx-B-dksMZM.js";import"./Hidden-nUwUlPG8.js";import"./useFocusRing-BOmMevWO.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./RSPContexts-aAwDc8x5.js";import"./Text-D-FhadIY.js";import"./useDateFormatter-AAB0pGWb.js";import"./useControlledState-YbLesBTN.js";import"./useLocalizedStringFormatter-ClZt7a0N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bo7Aw6XJ.js";import"./useEvent-F_BKG7Ay.js";import"./getScrollParent-DyjFmHbi.js";import"./scrollIntoView-DNouCeg5.js";import"./useDescription-BdJNmK5T.js";import"./VisuallyHidden-D5I2qOtz.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-9TYfCj3n.js";import"./createLucideIcon-DLSGmePH.js";import"./chevron-right-C_b_ljtg.js";import"./Button-BBfM7fHR.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./Heading-BesTY9gY.js";import"./FieldError-pBIr7GBS.js";import"./Text-BV0i2D1f.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
