import{$ as c,a as m,r as l,j as d}from"./iframe-D4Gvrs9r.js";import{C as n}from"./Calendar-B-AOVIeC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-IMB3uzSk.js";import"./Button-BokCFgRi.js";import"./utils-DgLFYAtQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Fg0nOe1J.js";import"./useFocusRing-Cb3CZ-aE.js";import"./index-6UveYWg_.js";import"./index-DkaKCeuE.js";import"./useLabels-d4KXrv_2.js";import"./useButton-BedLEyIe.js";import"./RSPContexts-Czq_pnVN.js";import"./Text-9OpdE2KE.js";import"./useDateFormatter-jWkxEoQb.js";import"./useControlledState-BxrHLQLL.js";import"./useLocalizedStringFormatter-C406VONV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BDWGf2Me.js";import"./useEvent-BCx0YIxG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CaLH3whp.js";import"./VisuallyHidden-DsUdzhfv.js";import"./clsx-Ciqy0D92.js";import"./Button-CGGZxAPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFXwxmG8.js";import"./createLucideIcon-BxZcqrlQ.js";import"./chevron-left-CB10PDHB.js";import"./chevron-right-dP3asgNE.js";import"./Heading-DDPiogzv.js";import"./FieldError-BLkIz_DJ.js";import"./Text-DPs03w0L.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
