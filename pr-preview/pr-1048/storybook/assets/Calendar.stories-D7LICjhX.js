import{$ as c,a as m,r as l,j as d}from"./iframe-BrSFSEso.js";import{C as n}from"./Calendar-JJy5y1Gd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bg4RFag8.js";import"./Button-sstewYaM.js";import"./utils-CSLr47GB.js";import"./clsx-B-dksMZM.js";import"./Hidden-bRkw9FY4.js";import"./number-DfkVkf0F.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./RSPContexts-D6LnjnjF.js";import"./Text-CqAiKc3c.js";import"./useDateFormatter-CPmIjr1X.js";import"./useControlledState-CqGR6b7a.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGwGMGOq.js";import"./useEvent-Bnvwx3ca.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CgGPIItB.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./clsx-Ciqy0D92.js";import"./Button-D56CPdXD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./createLucideIcon-D7YZh2ey.js";import"./chevron-left-8Qq_eYHe.js";import"./chevron-right-CFBUk4ds.js";import"./Heading-BO2ZHWnX.js";import"./FieldError-C1wT0W68.js";import"./Text-afjM-cTG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
