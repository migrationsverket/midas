import{$ as c,a as m,r as l,j as d}from"./iframe-D_tI-LG6.js";import{C as n}from"./Calendar-CxrDfuQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLIIVclO.js";import"./Button-hSHq5h1Q.js";import"./utils-BmuT-4CL.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7jFD7Zq.js";import"./useFocusRing-DXI1PCCK.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./RSPContexts-C1Z7Vm5X.js";import"./Text-CULJXyXM.js";import"./useDateFormatter-BLbKq6gc.js";import"./useControlledState-D0L1s8oX.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQ0Yok9k.js";import"./useEvent-BeOXJju6.js";import"./getScrollParent-BgKCMS-7.js";import"./scrollIntoView-Bwch4vY3.js";import"./useDescription-T8zc5UX5.js";import"./VisuallyHidden-DzLaLv62.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D3a6yexx.js";import"./createLucideIcon-Cjn_t3BL.js";import"./chevron-right-By6dxsig.js";import"./Button-GXHEwtjb.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./Heading-DHTQxhhY.js";import"./FieldError-CvwrOOlF.js";import"./Text-C08wpa18.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
