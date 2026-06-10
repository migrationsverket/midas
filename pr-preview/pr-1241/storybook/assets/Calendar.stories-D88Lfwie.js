import{$ as c,a as m,r as l,j as d}from"./iframe-y1u__L-8.js";import{C as n}from"./Calendar-DkPhni8I.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BtL48TH9.js";import"./Button-Bmc3JOkJ.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTarpjft.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./RSPContexts-BzgKoUFY.js";import"./Text-LCGDIWeJ.js";import"./useDateFormatter-BBd8bFwK.js";import"./useControlledState-SL3CCMLy.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DtM5mrux.js";import"./useEvent-BdW-8kO2.js";import"./getScrollParent-DOFnmN7L.js";import"./scrollIntoView-DPjPSgYg.js";import"./useDescription-C868_Zy-.js";import"./VisuallyHidden-vMJRuQeL.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-sElMaxFh.js";import"./createLucideIcon-C_M4Trqf.js";import"./chevron-right-BmjEXQmf.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Heading-C9dBce2x.js";import"./FieldError-B3ZCLrVr.js";import"./Text-DI19gscT.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
