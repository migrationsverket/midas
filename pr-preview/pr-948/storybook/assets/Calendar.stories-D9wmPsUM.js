import{$ as p,a as m,r as l,j as d}from"./iframe-C1leRaCi.js";import{C as n}from"./Calendar-YRAhM1Cs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BP51PXxA.js";import"./Button-M9uB7-Jb.js";import"./utils-BGVkhvRq.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cqw8yHzL.js";import"./useFocusRing-DlbSN8Ae.js";import"./index-DEAN_h1R.js";import"./index-v0huand3.js";import"./useLabels-DSFbCLKG.js";import"./useButton-k9xAcm15.js";import"./RSPContexts-DKReEcV9.js";import"./Text-dqBDklPG.js";import"./useDateFormatter-DErXfrBA.js";import"./useControlledState-ByljhpRz.js";import"./useLocalizedStringFormatter-Ya10jvmU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BUkwTSs-.js";import"./useEvent-DgudDhx_.js";import"./getScrollParent-LrzveM_K.js";import"./scrollIntoView-BeWdCQA-.js";import"./useDescription-DLrO9DFj.js";import"./VisuallyHidden-YPgCWLl2.js";import"./clsx-Ciqy0D92.js";import"./Button-CwoNmGBb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BWxVH0_G.js";import"./createLucideIcon-C44Pm6ej.js";import"./chevron-right-Cy3nfg6v.js";import"./Heading-CUv8fsir.js";import"./FieldError-BUrHU4SW.js";import"./Text-C7wFv8Yh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
