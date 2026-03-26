import{$ as c,a as m,r as l,j as d}from"./iframe-SOAudsoD.js";import{C as n}from"./Calendar-I7GiDffG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-90jfLxq7.js";import"./Button-D067fNNN.js";import"./utils-CIsr0dbb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1WT_Vdg.js";import"./useFocusRing-BAXSXuvY.js";import"./index-BD7D_b6m.js";import"./index-TydVMVST.js";import"./useLabel-CkEKqqdX.js";import"./useLabels-CF8dmUib.js";import"./useButton-BQJi0Bnf.js";import"./RSPContexts-CnPW4VcT.js";import"./Text-BaMrJhkm.js";import"./useDateFormatter-9uVpeacR.js";import"./useControlledState-Bfp68Ksh.js";import"./useLocalizedStringFormatter-DhVS51M8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DjKFdGvC.js";import"./useEvent-BAC2xDQQ.js";import"./getScrollParent-Czn_DZgU.js";import"./scrollIntoView-WOAjmpGz.js";import"./useDescription-CvEN5z8s.js";import"./VisuallyHidden-DchdFXfm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-4k6PrZm-.js";import"./createLucideIcon-C9pXYI_x.js";import"./chevron-right-CA7ijSAR.js";import"./Button-C52wufQI.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DNP-DOoF.js";import"./Heading-BUoYcFor.js";import"./FieldError-DfImaZQ8.js";import"./Text-BA3To6tW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
