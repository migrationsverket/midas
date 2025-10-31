import{$ as p,a as m,r as l,j as d}from"./iframe-CYLbMBt8.js";import{C as n}from"./Calendar-JIAilq1w.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DbIO0BIc.js";import"./Button-CKpDaDrO.js";import"./utils-CtYggOsK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCZJVzSx.js";import"./useFocusRing-sTPNQCE4.js";import"./index-71tlDv88.js";import"./index-Brb7X42m.js";import"./useLabels-3FTzkieI.js";import"./useButton-BztmJ2aQ.js";import"./RSPContexts-D_FN0ARC.js";import"./Text-DZ37ixFx.js";import"./useDateFormatter-DXexV2-Z.js";import"./useControlledState-CH8LbPDY.js";import"./useLocalizedStringFormatter-BCspmRwR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7nqcFo9.js";import"./useEvent-D0F19b6G.js";import"./getScrollParent-CQS5bk9q.js";import"./scrollIntoView-BB2jjYaX.js";import"./useDescription-BNrAS8PP.js";import"./VisuallyHidden-C1dzkIOy.js";import"./clsx-Ciqy0D92.js";import"./Button-CwJUY5Uh.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C_sXulXo.js";import"./chevron-right-3AYP06r7.js";import"./Heading-CSUTgwbg.js";import"./FieldError-DJNlDTNE.js";import"./Text-DhjMuTd4.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
