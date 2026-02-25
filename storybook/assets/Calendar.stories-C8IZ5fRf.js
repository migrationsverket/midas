import{$ as c,a as m,r as l,j as d}from"./iframe-BI14_MVF.js";import{C as n}from"./Calendar-BtgQBDyo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9I44tyc.js";import"./Button-C1lGy2rc.js";import"./utils-CUoFg1P-.js";import"./clsx-B-dksMZM.js";import"./Hidden-fX2mzFJg.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./RSPContexts-BdlFwrnM.js";import"./Text-CI44Yo6S.js";import"./useDateFormatter-BRMru1U6.js";import"./useControlledState-C7wUKhFW.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnCqR5Q3.js";import"./useEvent-Cl7U-xPX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRcfnO6m.js";import"./VisuallyHidden-CyW44Voa.js";import"./clsx-Ciqy0D92.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./createLucideIcon-DENDzJzs.js";import"./chevron-left-CYHCMMZ7.js";import"./chevron-right-D_Au3aS0.js";import"./Heading-CbFl5iEv.js";import"./FieldError-0gwuUdiP.js";import"./Text-RJrnIXBc.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
