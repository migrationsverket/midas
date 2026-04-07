import{$ as c,a as m,r as l,j as d}from"./iframe-QwZUgaLO.js";import{C as n}from"./Calendar-Dnafs-My.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CgwPnkDF.js";import"./Button-D9S27FhL.js";import"./utils-C5PAaS6l.js";import"./clsx-B-dksMZM.js";import"./Hidden-qsgafZIY.js";import"./useFocusRing-DCV7Bvm3.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./RSPContexts-CRJgyFJK.js";import"./Text-CjsrR6_S.js";import"./useDateFormatter-C2MhtTGe.js";import"./useControlledState-DGCNkOh1.js";import"./useLocalizedStringFormatter-B8e3KCPt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLz2aK0p.js";import"./useEvent-DoVh1qxn.js";import"./getScrollParent-DxQpJ7qd.js";import"./scrollIntoView-CcRWGSSD.js";import"./useDescription-BLH5SCIP.js";import"./VisuallyHidden-B7afogpp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-4282MWEA.js";import"./createLucideIcon-BN5DVyg5.js";import"./chevron-right-CY4vR7qL.js";import"./Button-CEqP3wI_.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./Heading-DzTzoC4y.js";import"./FieldError-vnsH4bsL.js";import"./Text-XaIsUgQ9.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
