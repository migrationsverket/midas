import{$ as c,a as m,r as l,j as d}from"./iframe-CLZ7lMWL.js";import{C as n}from"./Calendar-DNlpi3gs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DJRbkvrb.js";import"./Button-BdHKCjLS.js";import"./utils-2WeD-wN4.js";import"./clsx-B-dksMZM.js";import"./Hidden-To-3RG_j.js";import"./useFocusRing-ChcbSX8A.js";import"./index-joeLWnyk.js";import"./index-BQfKMPTh.js";import"./useLabels-DWLJ680t.js";import"./useButton-BRhObPaf.js";import"./RSPContexts-p4UD-iwG.js";import"./Text-DRJ2hBXG.js";import"./useDateFormatter-DskDzhex.js";import"./useControlledState-Ch1Apm7b.js";import"./useLocalizedStringFormatter-C7tLz9-g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-60HYZQ4x.js";import"./useEvent-A6WuRPvM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DN7NAyXj.js";import"./VisuallyHidden-BKsebB3-.js";import"./clsx-Ciqy0D92.js";import"./Button-epCGRlhZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKKvMQ_v.js";import"./createLucideIcon-CqL2zG8F.js";import"./chevron-left-DJvv-T2C.js";import"./chevron-right-CnKx9b36.js";import"./Heading-BSQ7kAFI.js";import"./FieldError-C9kOHtGX.js";import"./Text-BMOUMG_N.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
