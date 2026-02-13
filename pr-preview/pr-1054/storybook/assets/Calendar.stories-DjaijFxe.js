import{$ as c,a as m,r as l,j as d}from"./iframe-Bzo4kowl.js";import{C as n}from"./Calendar-FXNh5iip.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DlcECNRe.js";import"./Button-CgmEDWQ8.js";import"./utils-DXTeB8HK.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHoilVKC.js";import"./useFocusRing-DHhWIO2N.js";import"./index-CNJaAGk8.js";import"./index-aL6k1mzJ.js";import"./useLabels-CEKsYTJS.js";import"./useButton-D9o58VID.js";import"./RSPContexts-De0PVEjF.js";import"./Text-CzwqkTgC.js";import"./useDateFormatter-wBthzJz-.js";import"./useControlledState-CM5VfWQj.js";import"./useLocalizedStringFormatter-D4nT0ah_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CmJ59jmi.js";import"./useEvent-TwMUr4g1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D0ROJkmX.js";import"./VisuallyHidden-B6Mvmfcl.js";import"./clsx-Ciqy0D92.js";import"./Button-ChuJZebW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUD2yrtg.js";import"./createLucideIcon-DA2PtDq7.js";import"./chevron-left-C52MDIRZ.js";import"./chevron-right-DhFiOgHY.js";import"./Heading-fgEp0HME.js";import"./FieldError-DfYo7bjn.js";import"./Text-BflvD664.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
