import{$ as p,a as m,r as l,j as d}from"./iframe-BqDkGuh1.js";import{C as n}from"./Calendar-BBg4mMDB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0vCfN1CH.js";import"./Button-BxGujilG.js";import"./utils-W193K7jS.js";import"./clsx-B-dksMZM.js";import"./Hidden-0zoVmhVR.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./RSPContexts-BrQCiqr8.js";import"./Text-P0Uog9HF.js";import"./useDateFormatter-CySaSF8N.js";import"./useControlledState-D87rnCnG.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DkKRQtpi.js";import"./useEvent-XcVfxEor.js";import"./getScrollParent-CUQivi4p.js";import"./scrollIntoView-uYMCGnr-.js";import"./useDescription-Bm9qBg99.js";import"./VisuallyHidden-CQi-zQEF.js";import"./clsx-Ciqy0D92.js";import"./Button-DsUfXBsa.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./createLucideIcon-DTrJOepx.js";import"./chevron-right-DInfSwP8.js";import"./Heading-yrJTarcr.js";import"./FieldError-yw2UMk6d.js";import"./Text-CGQubPUz.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
