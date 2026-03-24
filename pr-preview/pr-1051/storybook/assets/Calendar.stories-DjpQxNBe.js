import{$ as c,a as m,r as l,j as d}from"./iframe-B5fT8W8B.js";import{C as n}from"./Calendar-CbthLPml.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B0_EO-O8.js";import"./Button-DoDt4li8.js";import"./utils-Bh7KGz6i.js";import"./clsx-B-dksMZM.js";import"./Hidden-DB3eEGqq.js";import"./useFocusRing-BgTsLm0m.js";import"./index-CkX7KbtT.js";import"./index-C5IsVOl0.js";import"./useLabels-D60PMjBU.js";import"./useButton-CPqG-nUq.js";import"./RSPContexts-D1Lpp2lJ.js";import"./Text-DOeKj6x7.js";import"./useDateFormatter-alLBtJu1.js";import"./useControlledState-BGmHapEN.js";import"./useLocalizedStringFormatter-CcytJjyB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHcQRt7V.js";import"./useEvent-DJwUrGHD.js";import"./getScrollParent-DN2Ny2rG.js";import"./scrollIntoView-B84U33Mc.js";import"./useDescription-_hkkBgKI.js";import"./VisuallyHidden-DiGmQZwe.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BF4euxk6.js";import"./createLucideIcon-ChldPQr9.js";import"./chevron-right-CdYfZCq0.js";import"./Button-Cbu0zB47.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CVUeiCFD.js";import"./Heading-Lp6ZoSYc.js";import"./FieldError-C1zhQcfr.js";import"./Text-DNRTdsIF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
