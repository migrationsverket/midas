import{$ as c,a as m,r as l,j as d}from"./iframe-CYdOIShe.js";import{C as n}from"./Calendar-1ZOXPW2c.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-S8T40m8_.js";import"./Button-CFIgUPn3.js";import"./utils-HKmh4Wcn.js";import"./clsx-B-dksMZM.js";import"./Hidden-CT5s6T9J.js";import"./useFocusRing-luUELUDI.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./RSPContexts-C-0mxEQj.js";import"./Text-JajiEAQE.js";import"./useDateFormatter-C1dGSu17.js";import"./useControlledState-DtqbYXAa.js";import"./useLocalizedStringFormatter-5ECDI-gb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ld2Yjo1i.js";import"./useEvent-Dw5D7H6E.js";import"./getScrollParent-BfoeuBWC.js";import"./scrollIntoView-DG71oHLe.js";import"./useDescription-B-kG1rWN.js";import"./VisuallyHidden-DnXqJuQy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BHCE2ExL.js";import"./createLucideIcon-cX0zgN2L.js";import"./chevron-right-DVmV1k2N.js";import"./Button-CBUriOkd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./Heading-BZlZRKoS.js";import"./FieldError-DuFysaFf.js";import"./Text-BPz397x3.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
