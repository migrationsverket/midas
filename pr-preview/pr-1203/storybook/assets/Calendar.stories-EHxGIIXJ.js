import{$ as c,a as m,r as l,j as d}from"./iframe-AjHIFKYL.js";import{C as n}from"./Calendar-B-v3SnGK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CcQKCRA8.js";import"./Button-C1DU2kQ0.js";import"./utils-BQ53D7f7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ciub7nFQ.js";import"./useFocusRing-CvHv-Osy.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./RSPContexts-CcA2FC2H.js";import"./Text-CCR6G686.js";import"./useDateFormatter-BKHXGOBJ.js";import"./useControlledState-DTh410_S.js";import"./useLocalizedStringFormatter-BzByLjfh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DFaaaPHz.js";import"./useEvent-CBOR4nAM.js";import"./getScrollParent-DezySAXs.js";import"./scrollIntoView-DoE9Z2_0.js";import"./useDescription-CjzV_vAG.js";import"./VisuallyHidden-iv4jmUvN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CYi_j65L.js";import"./createLucideIcon-D_tC-MWH.js";import"./chevron-right-BA_dVXnd.js";import"./Button-BEq-_IjI.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./Heading-2dDi2FmH.js";import"./FieldError-7pShLjHw.js";import"./Text-pxITg1r8.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
