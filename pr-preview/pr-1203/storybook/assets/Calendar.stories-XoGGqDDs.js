import{$ as c,a as m,r as l,j as d}from"./iframe-BQjBM75C.js";import{C as n}from"./Calendar-DJcIKgbg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VCOlTYna.js";import"./Button-CleE5i4u.js";import"./utils-BSV0ImVH.js";import"./clsx-B-dksMZM.js";import"./Hidden-DsiXMF_M.js";import"./useFocusRing-gicmbIfS.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./RSPContexts-ifp6jpNf.js";import"./Text-ByOtvKGn.js";import"./useDateFormatter-BN9WFjOC.js";import"./useControlledState-C34v6o9-.js";import"./useLocalizedStringFormatter-1UgPp4Q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRNjg0Ce.js";import"./useEvent-Bf_J53mB.js";import"./getScrollParent-DRx-xlpO.js";import"./scrollIntoView-ClzIkG2v.js";import"./useDescription-CBsnfRLo.js";import"./VisuallyHidden-DUlqTjt1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DXsfBCWp.js";import"./createLucideIcon-CfIBoofS.js";import"./chevron-right-CqoUO2XE.js";import"./Button-BrUsIHUW.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./Heading-BE_ccCAS.js";import"./FieldError-DR3ilOc-.js";import"./Text-CSQrQWbM.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
