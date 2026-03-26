import{$ as c,a as m,r as l,j as d}from"./iframe-DUmnjMKN.js";import{C as n}from"./Calendar-D1WWz2Ar.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CJ2fiqIa.js";import"./Button-6X6Z2oCH.js";import"./utils-0xSMeEGm.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cfzmra0d.js";import"./useFocusRing-CNLfoayx.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./RSPContexts-QZF1MtLT.js";import"./Text-CeMQVnHe.js";import"./useDateFormatter-BBYnKYjY.js";import"./useControlledState-D6z3aXVM.js";import"./useLocalizedStringFormatter-Brx_2IRC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CBRoWx1G.js";import"./useEvent-CkK3gQjy.js";import"./getScrollParent-BQDHCp3Y.js";import"./scrollIntoView-Cg9djLSg.js";import"./useDescription-DXN7t0bP.js";import"./VisuallyHidden-Cb4icQhq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BhvsfLKi.js";import"./createLucideIcon-D1JpQBbc.js";import"./chevron-right-BLpxBJKJ.js";import"./Button-tmoOZgUj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./Heading-C1WgcKve.js";import"./FieldError-0rnN8Sj0.js";import"./Text-CnbD-jnj.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
