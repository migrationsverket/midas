import{$ as c,a as m,r as l,j as d}from"./iframe-CmeF7aiR.js";import{C as n}from"./Calendar-DrjoXTr1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CYrTEzck.js";import"./Button-ClEeAqn6.js";import"./utils-Z3-XoPsz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUn3MpC7.js";import"./useFocusRing-2QXJrqIt.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./RSPContexts-BpcZ6nht.js";import"./Text-C9HAfj-8.js";import"./useDateFormatter-CQ6ue9Z5.js";import"./useControlledState-hzD7JFD-.js";import"./useLocalizedStringFormatter-CWAX1pT5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-zrhW07hQ.js";import"./useEvent-kH6-sJDb.js";import"./getScrollParent-BlOOdjy0.js";import"./scrollIntoView-rNYRejP1.js";import"./useDescription-DEWpOLKq.js";import"./VisuallyHidden-B0_5kTh6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D3DcFOPD.js";import"./createLucideIcon-DCW1PR-F.js";import"./chevron-right-Doj9pn7a.js";import"./Button-xoJ9JlM1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./Heading-ggj7_bEi.js";import"./FieldError-BVrE0AIG.js";import"./Text-BssmR8ms.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
