import{$ as c,a as m,r as l,j as d}from"./iframe-DWjCTUGS.js";import{C as n}from"./Calendar-jFPC3I-y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-YDQO4Ywv.js";import"./Button-C9b-TJtb.js";import"./utils-jft35r8I.js";import"./clsx-B-dksMZM.js";import"./Hidden-Crg89ChB.js";import"./useFocusRing-By5vzM2y.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./RSPContexts-Csylolnc.js";import"./Text-Dg63mXaz.js";import"./useDateFormatter-F_8lPZeZ.js";import"./useControlledState-CkptqhP6.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1ex9kdD.js";import"./useEvent-Dr-0pueP.js";import"./getScrollParent-DwRJEpBB.js";import"./scrollIntoView-DUeHV5Vd.js";import"./useDescription-Da3_CYtm.js";import"./VisuallyHidden-DBHrI_B7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-vuIHOEBJ.js";import"./createLucideIcon-B9xTeaix.js";import"./chevron-right-CNyUBqMs.js";import"./Button-ClirsJfj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Heading-D83dPF1d.js";import"./FieldError-B_RQwvpG.js";import"./Text-eFe150r9.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
