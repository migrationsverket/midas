import{$ as c,a as m,r as l,j as d}from"./iframe-Bs8KTy6C.js";import{C as n}from"./Calendar-DQstAMZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BAQ_ucuz.js";import"./Button-CxAHhwgQ.js";import"./utils-7Wht2g-Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-BrvGFfZa.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./RSPContexts-Cn0wIx3g.js";import"./Text-Is5sK9kM.js";import"./useDateFormatter-BCMR4xLu.js";import"./useControlledState-6XUuECgK.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqkCkNkC.js";import"./useEvent-5ZwgKb7q.js";import"./getScrollParent-CPUsdWMS.js";import"./scrollIntoView-BBlkQq5K.js";import"./useDescription-B2R3OifQ.js";import"./VisuallyHidden-BBTIfzW0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DNrdKlbl.js";import"./createLucideIcon-TcTXJfKq.js";import"./chevron-right-weLlQpzb.js";import"./Button-hEmbppXg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./Heading-BZGNUUY1.js";import"./FieldError-C99gwkco.js";import"./Text-BoHNsdRj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
