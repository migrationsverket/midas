import{$ as p,a as m,r as l,j as d}from"./iframe-Dme4aFdT.js";import{C as n}from"./Calendar-DFXU7u-0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B712wnMK.js";import"./Button-XAFJZG3z.js";import"./utils-RWkis8G9.js";import"./clsx-B-dksMZM.js";import"./Hidden-C10E5C8v.js";import"./useFocusRing-DWu_JWOd.js";import"./index-C7JOf_RQ.js";import"./index-C6e9A8g1.js";import"./useLabels-Cct5OOSs.js";import"./useButton-DF_MCZ4k.js";import"./RSPContexts-GmODFMNz.js";import"./Text-CMIivFWB.js";import"./useDateFormatter-CcmFA0M_.js";import"./useControlledState-BetURhw8.js";import"./useLocalizedStringFormatter-CkiUW1JU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BzrmN92V.js";import"./useEvent-DYfcnNGN.js";import"./getScrollParent-j8aW_06G.js";import"./scrollIntoView-D3gv1S2x.js";import"./useDescription-DMhS4Cus.js";import"./VisuallyHidden-C5B2ZvOk.js";import"./clsx-Ciqy0D92.js";import"./Button-DKWrf8rk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dx4ypEyW.js";import"./createLucideIcon-CNaULXtJ.js";import"./chevron-right-CF4wIyxb.js";import"./Heading-yDDwOJL2.js";import"./FieldError-D1kPuc3v.js";import"./Text-gw1qxFi7.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
