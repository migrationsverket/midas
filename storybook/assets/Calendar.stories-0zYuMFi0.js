import{$ as p,a as m,r as l,j as d}from"./iframe-DBhQ8ZfE.js";import{C as n}from"./Calendar-BYrj3A41.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CV1gQ4wj.js";import"./Button-BkJQBN-z.js";import"./utils-CV2hteiq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BD34b6Sf.js";import"./useFocusRing-2NmEPi_N.js";import"./index-CY38OC3k.js";import"./index-Dn-wkp9J.js";import"./useLabels-C-hTBXSR.js";import"./useButton-6CFw4W9G.js";import"./RSPContexts-CiHCTwCW.js";import"./Text-B7pj2ymj.js";import"./useDateFormatter-CC35oPGs.js";import"./useControlledState-DTSOZ1sm.js";import"./useLocalizedStringFormatter-DMxV2bdQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2WfNUchD.js";import"./useEvent--vbCSqK6.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BdlPH_Ut.js";import"./VisuallyHidden-B0hr9uCQ.js";import"./clsx-Ciqy0D92.js";import"./Button-aFOEdS9y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnEeM0Eu.js";import"./createLucideIcon-DPyGDXBW.js";import"./chevron-right-CNr1KLaf.js";import"./Heading--CMmhAbi.js";import"./FieldError-CBIHh_VV.js";import"./Text-ByOBhr0y.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
