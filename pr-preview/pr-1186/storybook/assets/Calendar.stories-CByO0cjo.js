import{$ as c,a as m,r as l,j as d}from"./iframe-Cd0-ZcsP.js";import{C as n}from"./Calendar-D7Qbjn8r.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-QexID9YX.js";import"./Button-7ELWuSQK.js";import"./utils-DhqpUTpA.js";import"./clsx-B-dksMZM.js";import"./Hidden-CPmKijlW.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./RSPContexts-Co104av2.js";import"./Text-DyAmcS7z.js";import"./useDateFormatter-TxzDT39g.js";import"./useControlledState-d4JhcqA_.js";import"./useLocalizedStringFormatter-eRJpNzx7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ReQETEeO.js";import"./useEvent-sNCkpNtj.js";import"./getScrollParent-CsyNiD_a.js";import"./scrollIntoView-CK4U69Q7.js";import"./useDescription-D_MdrsUa.js";import"./VisuallyHidden-DUU_0XCx.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D1DduXTA.js";import"./createLucideIcon-BVwfSxcn.js";import"./chevron-right-BfB-nMxM.js";import"./Button-pofFgtnZ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./Heading-BHM2v0MZ.js";import"./FieldError-1WFTuS_h.js";import"./Text-Cw2Ugvgy.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
