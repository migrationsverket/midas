import{$ as p,a as m,r as l,j as d}from"./iframe-C-Lam_ng.js";import{C as n}from"./Calendar-B8GzwEfp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ChEsJMOQ.js";import"./Button-fej9ya2E.js";import"./utils-W06ddP_L.js";import"./clsx-B-dksMZM.js";import"./Hidden-LjeV_3jg.js";import"./useFocusRing-BOxTCQ-z.js";import"./index-B-1MEL0a.js";import"./index-AgIsqBR_.js";import"./useLabels-CL-84yha.js";import"./useButton-CI7GwtHS.js";import"./RSPContexts-B-YXtEWf.js";import"./Text-BfdfpGmz.js";import"./useDateFormatter-BrZ51RON.js";import"./useControlledState-CKRNIuAr.js";import"./useLocalizedStringFormatter-DdCEe0_z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DTvoc4kN.js";import"./useEvent-z1sPjE67.js";import"./getScrollParent-CWmAp7Wq.js";import"./scrollIntoView-D5cAmATd.js";import"./useDescription-_kbhm_E4.js";import"./VisuallyHidden-_cUxrJf0.js";import"./clsx-Ciqy0D92.js";import"./Button-P88LisFb.js";import"./Button.module-D7V8WCeR.js";import"./useLocalizedStringFormatter-h0NnrpaM.js";import"./createLucideIcon-44xnuqEI.js";import"./chevron-right-m1KnKdKU.js";import"./Heading-BQiPV1r3.js";import"./FieldError-C41CocVt.js";import"./Text-CpVobgrZ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
