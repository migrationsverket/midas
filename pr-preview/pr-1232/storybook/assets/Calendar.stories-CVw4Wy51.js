import{$ as c,a as m,r as l,j as d}from"./iframe-u611P0T1.js";import{C as n}from"./Calendar-DJ1M-7Y7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KLvan-cD.js";import"./Button-DHuMXkEV.js";import"./utils-BdhmhbmB.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwAa9Aqn.js";import"./useFocusRing-x1014Y4C.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./RSPContexts-CHqXj6wS.js";import"./Text-C1ITd__M.js";import"./useDateFormatter-DAS8XZgU.js";import"./useControlledState-C8WxcwQm.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CAYFW-uc.js";import"./useEvent-NAjU2EOD.js";import"./getScrollParent-Dr2tWDHe.js";import"./scrollIntoView-XJLuBOkU.js";import"./useDescription-Dz-E1gaV.js";import"./VisuallyHidden-CPF-h8vx.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CIWCAaNF.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./chevron-right-GdD0PcJn.js";import"./Button-D0hAEojt.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Heading-CqJG1U4J.js";import"./FieldError-BUsLHsVx.js";import"./Text-BiFS0ps1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
