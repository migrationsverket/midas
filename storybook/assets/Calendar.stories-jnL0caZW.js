import{$ as c,a as m,r as l,j as d}from"./iframe-C0gItKGI.js";import{C as n}from"./Calendar-Cqh1Gq0y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0sfAUrGS.js";import"./Button-o0QsNuSA.js";import"./utils-C4BmiKeT.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxiPA8K1.js";import"./useFocusRing-D6zHA-j4.js";import"./index-JTUL9Zza.js";import"./index-DYJlb7vK.js";import"./useLabel-DSorbXz4.js";import"./useLabels-B6zfi_e6.js";import"./useButton-Dx1KDGRQ.js";import"./RSPContexts-Cl1Py3Cy.js";import"./Text-CP3oPRRG.js";import"./useDateFormatter-CovsAFwQ.js";import"./useControlledState-BBjdJp7n.js";import"./useLocalizedStringFormatter-CJETvB2q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CpDruFW_.js";import"./useEvent-B1QAVb7V.js";import"./getScrollParent-FaTrNgdQ.js";import"./scrollIntoView-CsIkDecr.js";import"./useDescription-DN4iRcxV.js";import"./VisuallyHidden-B6iVGiF3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D_Fm-zsX.js";import"./createLucideIcon-jAmYwIsU.js";import"./chevron-right-DpEC2Nrw.js";import"./Button-ByBsZf-O.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CX1JQrfE.js";import"./Heading-D3BiTKui.js";import"./FieldError-X-1CPtGa.js";import"./Text-COsMTm1B.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
