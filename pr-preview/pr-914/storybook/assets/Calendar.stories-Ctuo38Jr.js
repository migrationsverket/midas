import{$ as p,a as m,r as l,j as d}from"./iframe-CxZjhegp.js";import{C as n}from"./Calendar-DFoqxAkh.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DB9ZYP_9.js";import"./Button-DTaXrG8H.js";import"./utils-t_UvxsPo.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwZ-5pz7.js";import"./useFocusRing-CuAhJjMk.js";import"./index-Df8cI5Fd.js";import"./index-BpV2s7Sq.js";import"./useLabels-DYf1S3Mk.js";import"./useButton-D6P1u6Z6.js";import"./RSPContexts-DTcZWwa3.js";import"./Text-BxKbXzcf.js";import"./useDateFormatter-B8LAisEj.js";import"./useControlledState-1MfuKuam.js";import"./useLocalizedStringFormatter-CFCh-lbJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8szR3EAI.js";import"./useEvent-DWA2S5R6.js";import"./getScrollParent-VbWZMWd3.js";import"./scrollIntoView-RMCpJVNW.js";import"./useDescription-B-louMJX.js";import"./VisuallyHidden-C8ai3rtG.js";import"./clsx-Ciqy0D92.js";import"./Button-DmCxpU9a.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-Wfv3XnU7.js";import"./chevron-right-jqbR5OQe.js";import"./Heading-yIWuvTWW.js";import"./FieldError-BnSMhr-e.js";import"./Text-BO0XgLDT.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
