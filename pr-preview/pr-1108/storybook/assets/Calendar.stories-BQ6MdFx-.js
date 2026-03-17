import{$ as c,a as m,r as l,j as d}from"./iframe-DJvMsPK5.js";import{C as n}from"./Calendar-Bm_R4b4L.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CqLVEc4f.js";import"./Button-DaEctwPE.js";import"./utils-esTkTgMr.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5_NTDOk.js";import"./useFocusRing-D6tEw859.js";import"./index-Ipi0mz-M.js";import"./index-B3xZpXqe.js";import"./useLabels-C9xCPnuW.js";import"./useButton-D9q_HuIm.js";import"./RSPContexts-Cx8DPVhb.js";import"./Text-DIS3P1po.js";import"./useDateFormatter-Cecs-R2N.js";import"./useControlledState-C3uqw8vh.js";import"./useLocalizedStringFormatter-yOW7xoG5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B4LoADPT.js";import"./useEvent-DACQ8JSc.js";import"./getScrollParent-CijgiSwc.js";import"./scrollIntoView-DGipwkZA.js";import"./useDescription-D8zJCmPO.js";import"./VisuallyHidden-DGcwd28E.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DzanO0kl.js";import"./createLucideIcon-Cs-gIZHj.js";import"./chevron-right-CXBzj6Ud.js";import"./Button-BLuDdZMx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C4ywwRp4.js";import"./Heading-B3ayFQkC.js";import"./FieldError-CQm3X7MS.js";import"./Text-CLEP5l2l.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
