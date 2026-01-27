import{$ as c,a as m,r as l,j as d}from"./iframe-C1JT45wI.js";import{C as n}from"./Calendar-DOmKbcG7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DN1Pbqwg.js";import"./Button-iYwZhBmL.js";import"./utils-B3mA2zMb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B97wECjB.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./RSPContexts-DsZAf0Kq.js";import"./Text-Do4Hf0SC.js";import"./useDateFormatter-DBgaA8ig.js";import"./useControlledState-1gHrzrW8.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLVflKZM.js";import"./useEvent-CMhUQfXy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-AygReMNv.js";import"./VisuallyHidden-CExqZ3An.js";import"./clsx-Ciqy0D92.js";import"./Button-Cvr3NX4g.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./createLucideIcon-DjE8uKST.js";import"./chevron-left-DadCbzwP.js";import"./chevron-right-C-GxTaBj.js";import"./Heading-ZXPKAgVW.js";import"./FieldError-CRFea137.js";import"./Text-BnVMb_Eh.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
