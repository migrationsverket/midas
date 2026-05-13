import{$ as c,a as m,r as l,j as d}from"./iframe-DK3mrAyo.js";import{C as n}from"./Calendar-ClH3Cfz2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-RKAqJVza.js";import"./Button-Yd8CTw2L.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9O9f11_.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./RSPContexts-CbpbC2QZ.js";import"./Text-ChQBgCn7.js";import"./useDateFormatter-GnSrfteg.js";import"./useControlledState-c72KLHwF.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BRpUNopn.js";import"./useEvent-q7OaXBNw.js";import"./getScrollParent-CsmfW8t8.js";import"./scrollIntoView-DzztdlRp.js";import"./useDescription-e3GpwAAN.js";import"./VisuallyHidden-CuCKnYKC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BVzgbajK.js";import"./createLucideIcon-ZHubZ-OE.js";import"./chevron-right-BEVa5GCP.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Heading-D2LEgSAb.js";import"./FieldError-7i4Fax51.js";import"./Text-BG4EGVIm.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
