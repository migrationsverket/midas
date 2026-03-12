import{$ as c,a as m,r as l,j as d}from"./iframe-cYpxZzUZ.js";import{C as n}from"./Calendar-CL9siSNK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BG_C29Ja.js";import"./Button-I19PkSL9.js";import"./utils-Da5YKx2_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CEh4KexJ.js";import"./useFocusRing-Ro1kVhTk.js";import"./index-DWJi6tle.js";import"./index-nlAR4CdQ.js";import"./useLabels-yIxCyUCA.js";import"./useButton-BTaVYt9k.js";import"./RSPContexts-PAZO9wT0.js";import"./Text-BEBHFL1U.js";import"./useDateFormatter-B-oeyWNC.js";import"./useControlledState-BAEBGgdv.js";import"./useLocalizedStringFormatter-BSJ4rvpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DPvw_Y-3.js";import"./useEvent-CieYChAx.js";import"./getScrollParent-DCSYnjJt.js";import"./scrollIntoView-rdHf84fN.js";import"./useDescription-D_79kmmu.js";import"./VisuallyHidden-DaBYovm5.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-buVrL3D5.js";import"./createLucideIcon-CeCkLO_B.js";import"./chevron-right-BCIHgKKy.js";import"./Button-CJf-JCMB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cgn8B_F7.js";import"./Heading-DtwqYiEh.js";import"./FieldError-B5Zp84t6.js";import"./Text-BWvCs6nS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
