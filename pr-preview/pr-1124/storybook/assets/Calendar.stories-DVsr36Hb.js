import{$ as c,a as m,r as l,j as d}from"./iframe-DH698doG.js";import{C as n}from"./Calendar-BjvM5Wck.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D7kldTRT.js";import"./Button-BtUst4AR.js";import"./utils-mVgYYLB3.js";import"./clsx-B-dksMZM.js";import"./Hidden-lMTjRszI.js";import"./useFocusRing-BGlk11Cg.js";import"./index-DMd-E98X.js";import"./index-DdbUDU8H.js";import"./useLabels-D0yThyi4.js";import"./useButton-D9Hw2-4l.js";import"./RSPContexts-BEJaOB8S.js";import"./Text-wTeCM58U.js";import"./useDateFormatter-SEur3jPZ.js";import"./useControlledState-BAbuv76Z.js";import"./useLocalizedStringFormatter-GBxrcPr6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CR4gVAs_.js";import"./useEvent-CBcHK6bo.js";import"./getScrollParent-3lUfZO39.js";import"./scrollIntoView-j5v68fUZ.js";import"./useDescription-DRxPyHbI.js";import"./VisuallyHidden-C_koxuPK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DkDXVJCM.js";import"./createLucideIcon-CRaNdiYT.js";import"./chevron-right-_X7UIOMk.js";import"./Button-D64pEHkS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BLVqg3Su.js";import"./Heading-Cxf6klKK.js";import"./FieldError-LfuFvrGD.js";import"./Text-B6-Pmcz8.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
