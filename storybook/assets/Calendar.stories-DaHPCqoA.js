import{$ as c,a as m,r as l,j as d}from"./iframe-CZDKaAth.js";import{C as n}from"./Calendar-6O8LEDZW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CsR-vZ3w.js";import"./Button-BJEoY7LO.js";import"./utils-DN3LZENe.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKAoQIbG.js";import"./useFocusRing-DFIYpxaz.js";import"./index-Cb3fQwD_.js";import"./index-774Qpy2F.js";import"./useLabels-mgzC46gL.js";import"./useButton-BCDoEqm_.js";import"./RSPContexts-CK3pP4Eo.js";import"./Text-DZbmG9za.js";import"./useDateFormatter-UDmYLtdc.js";import"./useControlledState-B_tnY1CD.js";import"./useLocalizedStringFormatter-BoxRGhBr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BDMHxce3.js";import"./useEvent-BfXh6nP0.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-O6FD6N3s.js";import"./VisuallyHidden-CoNqG1me.js";import"./clsx-Ciqy0D92.js";import"./Button-BK8SLlQI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDe0URuf.js";import"./createLucideIcon-BpgRNcfO.js";import"./chevron-left-CGirTo_7.js";import"./chevron-right-C5WCkrk5.js";import"./Heading-BdTMYtmv.js";import"./FieldError-BRB2QFta.js";import"./Text-DWwhJwcg.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
