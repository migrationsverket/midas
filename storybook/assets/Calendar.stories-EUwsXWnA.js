import{$ as c,a as m,r as l,j as d}from"./iframe-DhO1D3QS.js";import{C as n}from"./Calendar-DGZjOTK_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D45jHwId.js";import"./Button-C3UugFSS.js";import"./utils-CSNCD2yj.js";import"./clsx-B-dksMZM.js";import"./Hidden-I1lhyBbs.js";import"./useFocusRing-CQcNXJs3.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./RSPContexts-6O3ucjMQ.js";import"./Text-_SRXujoE.js";import"./useDateFormatter-CHwSVs4T.js";import"./useControlledState-C9CuHrJu.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-50Wz2k7C.js";import"./useEvent-CAEIwGNs.js";import"./getScrollParent-CDShaaNJ.js";import"./scrollIntoView-aGeNnyvC.js";import"./useDescription-CghzDXw0.js";import"./VisuallyHidden-D9luNuIh.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BEY-ziPc.js";import"./createLucideIcon-DKHdgiD6.js";import"./chevron-right-BMXFkhNz.js";import"./Button-Do0NIfC4.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D1NPH8NW.js";import"./Heading-43GdhHJh.js";import"./FieldError-BUEn5Oe2.js";import"./Text-CzyDiWSu.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
