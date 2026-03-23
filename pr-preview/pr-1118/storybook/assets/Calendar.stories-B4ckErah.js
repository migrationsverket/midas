import{$ as c,a as m,r as l,j as d}from"./iframe-DamRJThF.js";import{C as n}from"./Calendar-C5-Pu3ER.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BdcRJGtc.js";import"./Button-uaN-QkBJ.js";import"./utils-DgcDlDIC.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuQbP2-q.js";import"./useFocusRing-bURA5Avq.js";import"./index-DlvZii8t.js";import"./index-BIVPacnA.js";import"./useLabels-DuyfGClc.js";import"./useButton-COqJVObs.js";import"./RSPContexts-Dggcgd1E.js";import"./Text-DJngJYPB.js";import"./useDateFormatter-DQCFUu41.js";import"./useControlledState-XD3RgfmU.js";import"./useLocalizedStringFormatter-CCiP9Lwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-bsLqKI.js";import"./useEvent-CvQwGKSH.js";import"./getScrollParent-DgPjGSeo.js";import"./scrollIntoView-BpYJI3yu.js";import"./useDescription-Bsqqymym.js";import"./VisuallyHidden-BwmvdnrK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-rwn2RaFe.js";import"./createLucideIcon-XwoK3Gs0.js";import"./chevron-right-DimZ6eYO.js";import"./Button-Cp7EKUE4.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-9w7CTOq4.js";import"./Heading-JFX8v4G2.js";import"./FieldError-DbzbM9K4.js";import"./Text-DL78e22r.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
