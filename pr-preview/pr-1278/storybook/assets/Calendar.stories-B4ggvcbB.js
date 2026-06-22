import{$ as c,a as m,r as l,j as d}from"./iframe-DcBIsMXx.js";import{C as n}from"./Calendar-Bjw89rML.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Butn-NFJ.js";import"./Button-C4Q8xd0B.js";import"./utils-5byDKFfB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DR2geLuk.js";import"./useFocusRing-D5tG7NYb.js";import"./index-Ddy-ld7t.js";import"./index-lIHyJaf-.js";import"./useLabel-Cl4TFLpj.js";import"./useLabels-x1_Sa4GJ.js";import"./useButton-CpEr-C_f.js";import"./RSPContexts-CEHus4Pd.js";import"./Text-DAtPV-yE.js";import"./useDateFormatter-DUgMPs9i.js";import"./useControlledState-e6Gq9Qx5.js";import"./useLocalizedStringFormatter-BLQND9we.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PhhB7rfK.js";import"./useEvent-B_qpFesj.js";import"./getScrollParent-DezxaSLv.js";import"./scrollIntoView-DRKUy1YW.js";import"./useDescription-C0VBBDaG.js";import"./VisuallyHidden-ILsWu368.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CpziO8GG.js";import"./createLucideIcon-D8sotqZ_.js";import"./chevron-right-CDWhOzCm.js";import"./Button-CFaNyWK_.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-RHrCy6F9.js";import"./Heading-DfCChiXd.js";import"./FieldError-CA3FiWjt.js";import"./Text-C7WBWqxX.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
