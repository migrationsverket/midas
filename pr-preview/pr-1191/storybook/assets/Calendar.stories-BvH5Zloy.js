import{$ as c,a as m,r as l,j as d}from"./iframe-pPxe0wf0.js";import{C as n}from"./Calendar-D7CsRQJk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-QG8sm3L7.js";import"./Button-C0xfSFPn.js";import"./utils-B9dfa99f.js";import"./clsx-B-dksMZM.js";import"./Hidden-BcuSkgl5.js";import"./useFocusRing-Brybz-Mb.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./RSPContexts-B0SlvVRf.js";import"./Text-CfRTLfl7.js";import"./useDateFormatter-DxfXxiFu.js";import"./useControlledState-DALrvKda.js";import"./useLocalizedStringFormatter-BNao4Mdf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-iJnE13oR.js";import"./useEvent-CKwa_4Ly.js";import"./getScrollParent-Cau9qeJE.js";import"./scrollIntoView-Cgwn1ATY.js";import"./useDescription-Ci3Nojex.js";import"./VisuallyHidden-ByZgoMRK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-EqyCUe-4.js";import"./createLucideIcon-DWvekaMf.js";import"./chevron-right-TfvClmWg.js";import"./Button-KC2D_O3S.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./Heading-BoHH1Xau.js";import"./FieldError-CL01H_85.js";import"./Text-DnWwzkAf.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
