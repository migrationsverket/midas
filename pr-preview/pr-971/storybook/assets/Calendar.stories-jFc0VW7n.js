import{$ as p,a as m,r as l,j as d}from"./iframe-h2rc799w.js";import{C as n}from"./Calendar-dFo3200C.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQBeIIeP.js";import"./Button-aEgurUrk.js";import"./utils-BB9uagM0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BntBCqP1.js";import"./useFocusRing-DRX1lRuz.js";import"./index-3OTH1Fm_.js";import"./index-G1IiyRC6.js";import"./useLabels-Cl8l3w4c.js";import"./useButton-B6xkXiLt.js";import"./RSPContexts-BnV9B0rn.js";import"./Text-27Q9b70a.js";import"./useDateFormatter-2rGu0Fcw.js";import"./useControlledState-Ct_TMVrN.js";import"./useLocalizedStringFormatter-jfgdaXR-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BDwYKMcU.js";import"./useEvent-CdaZAnXg.js";import"./getScrollParent-CKkHc3h5.js";import"./scrollIntoView-DTpX4Jlf.js";import"./useDescription-EraDlspF.js";import"./VisuallyHidden-D7CzkyTI.js";import"./clsx-Ciqy0D92.js";import"./Button-Do-smi34.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ckdz1WVj.js";import"./createLucideIcon-9cYvQa7e.js";import"./chevron-right-DhLhntrV.js";import"./Heading-yRrz7Ihh.js";import"./FieldError-CfA1E9Cr.js";import"./Text-DsxDpOP5.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
