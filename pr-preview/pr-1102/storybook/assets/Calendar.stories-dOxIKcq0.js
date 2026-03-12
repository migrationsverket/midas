import{$ as c,a as m,r as l,j as d}from"./iframe-BaJYC4hW.js";import{C as n}from"./Calendar-D6TeWk2c.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-koMik80v.js";import"./Button-MJDkUy4E.js";import"./utils-CV_LYzzD.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlyKOOC9.js";import"./useFocusRing-GVDVIwTN.js";import"./index-DOOXPPqc.js";import"./index-C6g9yftp.js";import"./useLabels-0RFifNrF.js";import"./useButton-CbZN5rLr.js";import"./RSPContexts-CIUsqnNZ.js";import"./Text-Nc4TUeua.js";import"./useDateFormatter-aL7IuNHp.js";import"./useControlledState-Du80Dryz.js";import"./useLocalizedStringFormatter-D3VNkE2Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BDnjAqDX.js";import"./useEvent-BWCZrvaR.js";import"./getScrollParent-CQuJqaKr.js";import"./scrollIntoView-UyFo11w1.js";import"./useDescription-DRlONNEs.js";import"./VisuallyHidden-D97yOK8y.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Coy8Ixbk.js";import"./createLucideIcon-1N_QsJVR.js";import"./chevron-right-BTgxWiYO.js";import"./Button-CGkZxjHk.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BpY-3ExX.js";import"./Heading-BUeT4e7x.js";import"./FieldError-GCWNqEfA.js";import"./Text-x8DptRje.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
