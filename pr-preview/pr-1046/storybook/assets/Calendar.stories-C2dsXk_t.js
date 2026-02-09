import{$ as c,a as m,r as l,j as d}from"./iframe-CDlGoVBX.js";import{C as n}from"./Calendar-ON1u5tY5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ECW-C77P.js";import"./Button-ChHi1CmX.js";import"./utils-DK0QJ5bq.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3g4_ydn.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./RSPContexts-omBJ6Sgu.js";import"./Text-gvo1OKGS.js";import"./useDateFormatter-D3lYhQMa.js";import"./useControlledState-CcD6TCI7.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C8Jrz0MP.js";import"./useEvent-BCnLZYbk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DUfOP2Oy.js";import"./VisuallyHidden-BoTcuaXb.js";import"./clsx-Ciqy0D92.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./createLucideIcon-DnI-ftFI.js";import"./chevron-left-BJ60SM70.js";import"./chevron-right-BbhD_lIm.js";import"./Heading-Z24TZx0I.js";import"./FieldError-BTnAzmQ0.js";import"./Text-Cflgqxbo.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
