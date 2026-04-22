import{$ as c,a as m,r as l,j as d}from"./iframe-CYBQlmyh.js";import{C as n}from"./Calendar-C9CNay1V.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DixRKf8n.js";import"./Button-BOrWC_ny.js";import"./utils-CjHCv0XO.js";import"./clsx-B-dksMZM.js";import"./Hidden-CqWz7xzF.js";import"./useFocusRing-Cpo9J0gL.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./RSPContexts-BhOh3g1F.js";import"./Text-CXwGYn4Y.js";import"./useDateFormatter-BkdXt9ot.js";import"./useControlledState-bAyCG7NY.js";import"./useLocalizedStringFormatter-DjA_iZCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BrCCCrxK.js";import"./useEvent-wP5p6MOh.js";import"./getScrollParent-TdVCvC4y.js";import"./scrollIntoView-DBa2FBnm.js";import"./useDescription-ZMuH04v7.js";import"./VisuallyHidden-DCVaQ010.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C6H0tq7B.js";import"./createLucideIcon-CC51vNZq.js";import"./chevron-right-BFsHDTs7.js";import"./Button-V8iqrR4o.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./Heading-OMAwRvxs.js";import"./FieldError-BU-DnlRI.js";import"./Text-B63Qy0n5.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
