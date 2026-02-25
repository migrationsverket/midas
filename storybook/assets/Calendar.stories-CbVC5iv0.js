import{$ as c,a as m,r as l,j as d}from"./iframe--7ouzhCF.js";import{C as n}from"./Calendar-BqJRNAey.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnKRbwY-.js";import"./Button-MMOZkiqP.js";import"./utils-CCrPRXFd.js";import"./clsx-B-dksMZM.js";import"./Hidden-DnK2cKnr.js";import"./useFocusRing-VMBdHrfo.js";import"./index-7GfLKj_c.js";import"./index-C-Az-PCO.js";import"./useLabels-D2JG2NHF.js";import"./useButton-DUghFOmd.js";import"./RSPContexts-CaPUaSms.js";import"./Text-_ylAafRx.js";import"./useDateFormatter-Cf8U4coG.js";import"./useControlledState-WRN65Jvl.js";import"./useLocalizedStringFormatter-BqAS8Gzt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CoZ8eeUT.js";import"./useEvent-BabVHB3y.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-XC1woF3d.js";import"./VisuallyHidden-DZP5hbvT.js";import"./clsx-Ciqy0D92.js";import"./Button-D_kviF_H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiDiFH31.js";import"./createLucideIcon-DMRXokTE.js";import"./chevron-left-D_Jh9lmW.js";import"./chevron-right-D7Kwbnye.js";import"./Heading-CBucoZUc.js";import"./FieldError-C9fNdBcq.js";import"./Text-Dt6EjG80.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
