import{$ as c,a as m,r as l,j as d}from"./iframe-BUlYeenf.js";import{C as n}from"./Calendar-B4wFJywK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DcYj597I.js";import"./Button-CAFxmTKU.js";import"./utils-lHsRwqJp.js";import"./clsx-B-dksMZM.js";import"./Hidden-xA7wwpGq.js";import"./useFocusRing-CviEpoWZ.js";import"./index-DGEIcEWR.js";import"./index-DmdJ6ljJ.js";import"./useLabels-BwlyzcSz.js";import"./useButton-BwVzS7tb.js";import"./RSPContexts-DyT-IAgl.js";import"./Text-BEqbNabF.js";import"./useDateFormatter-DsKFUbSP.js";import"./useControlledState-BQ1_hIib.js";import"./useLocalizedStringFormatter-CZUMuckE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CvDWD5lc.js";import"./useEvent-qyTooRJj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DtuYr6PG.js";import"./VisuallyHidden-BE5YEdq7.js";import"./clsx-Ciqy0D92.js";import"./Button-atNiNEsO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7ud72d9.js";import"./createLucideIcon-D-YObSxS.js";import"./chevron-left-Bf9xDq3w.js";import"./chevron-right-x7r3ywV9.js";import"./Heading-X-PaujHH.js";import"./FieldError-BuLprRq1.js";import"./Text-Bcb19OuN.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
