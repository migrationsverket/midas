import{$ as c,a as m,r as l,j as d}from"./iframe-C--goO8e.js";import{C as n}from"./Calendar-347VIZwH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-5Zzm4inw.js";import"./Button-BI3Iq_aE.js";import"./utils-DSxiF1Cp.js";import"./clsx-B-dksMZM.js";import"./Hidden-GH0AX83d.js";import"./useFocusRing-BcZJn3fC.js";import"./index-DvAhHsax.js";import"./index-DLC2Qh-Q.js";import"./useLabels-CvgKtUT-.js";import"./useButton-Xz1kmXFC.js";import"./RSPContexts-DBlfftlT.js";import"./Text-DfLs60II.js";import"./useDateFormatter-DqexjMSz.js";import"./useControlledState-X-QYJxtN.js";import"./useLocalizedStringFormatter-Ci2N_wM7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-gp3L2Yfr.js";import"./useEvent-teLk4nYd.js";import"./getScrollParent-gKv46a13.js";import"./scrollIntoView-Zj7kw8yy.js";import"./useDescription-DPoM5gP_.js";import"./VisuallyHidden-C4dWGUSD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DslTM6ge.js";import"./createLucideIcon-pUc5o6Nr.js";import"./chevron-right-P5uj8Spd.js";import"./Button-D9Z4rzGT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-L0RS7m21.js";import"./Heading-DorcuOCz.js";import"./FieldError-Dwje_tcE.js";import"./Text-9OutCub2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
