import{$ as c,a as m,r as l,j as d}from"./iframe-CSArLD6f.js";import{C as n}from"./Calendar-B1Dlirzj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D6tuHxBh.js";import"./Button-CVc2L7QK.js";import"./utils-CCBKoGgU.js";import"./clsx-B-dksMZM.js";import"./Hidden-C3bxkDXx.js";import"./useFocusRing-IWQ1hWag.js";import"./index-DIECvqes.js";import"./index-ywIekiaj.js";import"./useLabel-6yPvvDeu.js";import"./useLabels-y6WFRAzY.js";import"./useButton-Ivv3_IdO.js";import"./RSPContexts-gcUc6sbV.js";import"./Text-BU71TyQs.js";import"./useDateFormatter-DjXMVlV0.js";import"./useControlledState-DaW5OxR1.js";import"./useLocalizedStringFormatter-WHf9z393.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DLW1IRVk.js";import"./useEvent-DjZuF2Xg.js";import"./getScrollParent-7cis0Mb7.js";import"./scrollIntoView-C_WrJeuk.js";import"./useDescription-dWdsonds.js";import"./VisuallyHidden-46ezc1h_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-idiTMIpG.js";import"./createLucideIcon-DROqj45j.js";import"./chevron-right-XBn0aDyZ.js";import"./Button-CWyJ-riM.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BBjTg30D.js";import"./Heading-CljZzBPJ.js";import"./FieldError-B5M3gUUv.js";import"./Text-DYmfOSM7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
