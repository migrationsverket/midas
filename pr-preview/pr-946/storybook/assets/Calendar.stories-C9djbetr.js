import{$ as p,a as m,r as l,j as d}from"./iframe-Dt8qGcj0.js";import{C as n}from"./Calendar-CHb0OYB_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9krDvRf.js";import"./Button-CjJiJTes.js";import"./utils-DzGpUwDk.js";import"./clsx-B-dksMZM.js";import"./Hidden-BXZBrSDT.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./RSPContexts-B8qtBHPt.js";import"./Text-BFMlzHdv.js";import"./useDateFormatter-C2D1kM8l.js";import"./useControlledState-BVoQcIBV.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-pLBn1DUj.js";import"./useEvent-EDEmV_un.js";import"./getScrollParent-DMG60YH-.js";import"./scrollIntoView-DopW3zf_.js";import"./useDescription-lf21MVH0.js";import"./VisuallyHidden-DqAUfebe.js";import"./clsx-Ciqy0D92.js";import"./Button-CoCyWkmo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";import"./createLucideIcon-CzMrI8-b.js";import"./chevron-right-hDsj1KZE.js";import"./Heading-DRviNsfq.js";import"./FieldError-Boq0AlWn.js";import"./Text-DXvquVL7.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
