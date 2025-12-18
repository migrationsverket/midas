import{$ as c,a as m,r as l,j as d}from"./iframe-e7dVJZ80.js";import{C as n}from"./Calendar-CLiBHnSk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DdCRWs1b.js";import"./Button-HeijaR4V.js";import"./utils-CEQ_Va0c.js";import"./clsx-B-dksMZM.js";import"./Hidden-DUO5PkD4.js";import"./useFocusRing-B9Rn1B2s.js";import"./index-5fHP5ATJ.js";import"./index-CaEVLjia.js";import"./useLabels-DJlzxkkZ.js";import"./useButton-DzyK9NH4.js";import"./RSPContexts-CYNFOXtI.js";import"./Text-CPsvfpaa.js";import"./useDateFormatter-2StQ-JoE.js";import"./useControlledState-CbdyQTTS.js";import"./useLocalizedStringFormatter-Dy8GwP1X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bui7edpS.js";import"./useEvent-gTSMTyTm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DcKo4w2-.js";import"./VisuallyHidden-VT-zoUNe.js";import"./clsx-Ciqy0D92.js";import"./Button-B2F6YuiM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Di1nCEID.js";import"./createLucideIcon-tRzhitig.js";import"./chevron-left-B_fypDWG.js";import"./chevron-right-EE0D0ZbS.js";import"./Heading-Bq0ZTA9f.js";import"./FieldError-9Gg6ZPlh.js";import"./Text-CQWMXX5Z.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
