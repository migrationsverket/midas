import{$ as c,a as m,r as l,j as d}from"./iframe-DRLQwCNB.js";import{C as n}from"./Calendar-DbG_5ncV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CXpfk5w_.js";import"./Button-B3A8qvAG.js";import"./utils-DwlK8lYm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAi6qXjx.js";import"./useFocusRing-lDwfAEVQ.js";import"./index-DH8oBJLm.js";import"./index-BHtNZ3Yk.js";import"./useLabel-I8iavOjU.js";import"./useLabels-Bv060iu2.js";import"./useButton-BsM8VkEl.js";import"./RSPContexts-TCreybeK.js";import"./Text-DnHWSscL.js";import"./useDateFormatter-dnGZSEEa.js";import"./useControlledState-dveh82K_.js";import"./useLocalizedStringFormatter-BxPern0h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DBh9xzNG.js";import"./useEvent-BycsI7SI.js";import"./getScrollParent-Dj7PaAHW.js";import"./scrollIntoView-CwirR4Mk.js";import"./useDescription-B6f-6xTN.js";import"./VisuallyHidden-D-pnepPQ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DEyh8TP6.js";import"./createLucideIcon-BcFDGO1n.js";import"./chevron-right-oP-J21PR.js";import"./Button-BfaOHdzG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DUEXk9yR.js";import"./Heading-BoZ3tvwQ.js";import"./FieldError-BkNvp2E6.js";import"./Text-ynU63HEc.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
