import{$ as c,a as m,r as l,j as d}from"./iframe-BqNGaS3Q.js";import{C as n}from"./Calendar-DtFUQLDF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CDJ_p6Wg.js";import"./Button-DSR7b1dw.js";import"./utils-YRMroG4N.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSU9xJ9h.js";import"./useFocusRing-CGkrrHUz.js";import"./index-84uqcsRw.js";import"./index-Vj0nGHdt.js";import"./useLabel-EeiXtDoW.js";import"./useLabels-adoQ0dml.js";import"./useButton-DOhwhZT1.js";import"./RSPContexts-BStQ6TrK.js";import"./Text-1jSgyZAH.js";import"./useDateFormatter-mXyqS_CA.js";import"./useControlledState-CmrGw6Qp.js";import"./useLocalizedStringFormatter-Dy-KyAJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BORWL9Av.js";import"./useEvent-CbShBTQB.js";import"./getScrollParent-D3JQJWO2.js";import"./scrollIntoView-DqdmP0Ox.js";import"./useDescription-qTJacu0G.js";import"./VisuallyHidden-Bp1KH-we.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CUhBKJxV.js";import"./createLucideIcon-DCKEqRJ8.js";import"./chevron-right-D2GZbLMc.js";import"./Button-o-Kbu0N5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Y9axLppZ.js";import"./Heading-fuBJDnNY.js";import"./FieldError-C9gz52yQ.js";import"./Text-CJgdTp0n.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
