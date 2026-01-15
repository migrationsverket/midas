import{$ as c,a as m,r as l,j as d}from"./iframe-CghREHCp.js";import{C as n}from"./Calendar-BdYlSmkD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B9OX25yE.js";import"./Button-BbapMa4Z.js";import"./utils-DcbzADZG.js";import"./clsx-B-dksMZM.js";import"./Hidden-BLP0xzBf.js";import"./useFocusRing-Os94pZjv.js";import"./index-C_9syRFs.js";import"./index-bNnSmjOQ.js";import"./useLabels-BLq2FESX.js";import"./useButton-DICYCMex.js";import"./RSPContexts-DXf2tjJD.js";import"./Text-Buk_-DSi.js";import"./useDateFormatter-BYlqmmE_.js";import"./useControlledState-BNCqjruO.js";import"./useLocalizedStringFormatter-BHRqU8bD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CkcBqBng.js";import"./useEvent-BLXjJ4XY.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DHW5wKPx.js";import"./VisuallyHidden-CK_U2Q_P.js";import"./clsx-Ciqy0D92.js";import"./Button-BgVDIbm9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-43Jpf1jS.js";import"./createLucideIcon-DCyJjHTa.js";import"./chevron-left-CpZaLzKI.js";import"./chevron-right-DOwVgDdo.js";import"./Heading-BCIKpTaK.js";import"./FieldError-v9jgVeW0.js";import"./Text-Bgsdl3BX.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
