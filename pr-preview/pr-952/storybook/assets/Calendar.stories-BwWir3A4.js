import{$ as p,a as m,r as l,j as d}from"./iframe-WZjYUZug.js";import{C as n}from"./Calendar-DKMRtV0Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5LM2Cyp.js";import"./Button-ELQey9_7.js";import"./utils-41IgFTt3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DM5r5VXO.js";import"./useFocusRing-BhLet_pE.js";import"./index-DE2S3xCs.js";import"./index-bZw2_QEe.js";import"./useLabels-Db4OJvCS.js";import"./useButton-DnSOK5iD.js";import"./RSPContexts-BeSw2lJx.js";import"./Text-CD5L3NGu.js";import"./useDateFormatter-jR8RlLDG.js";import"./useControlledState-Dmj__v8P.js";import"./useLocalizedStringFormatter-BzhYOgrj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDgOSkzA.js";import"./useEvent-zWCVMw-y.js";import"./getScrollParent-BrRm6VkK.js";import"./scrollIntoView-CfUOfy0t.js";import"./useDescription-DmU-x1Sy.js";import"./VisuallyHidden-y2k8W_sW.js";import"./clsx-Ciqy0D92.js";import"./Button-CADr4mbo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BxtrdjQp.js";import"./createLucideIcon-7p7juL6_.js";import"./chevron-right-B5TfJfmQ.js";import"./Heading-DM4-bJBc.js";import"./FieldError-8QYALo9Q.js";import"./Text-CbC6PGTn.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
