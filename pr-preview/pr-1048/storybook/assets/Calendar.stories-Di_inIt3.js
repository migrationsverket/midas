import{$ as c,a as m,r as l,j as d}from"./iframe-CyQ_Q7rG.js";import{C as n}from"./Calendar-DqJpcDau.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DGSlresF.js";import"./Button-CntAlnRy.js";import"./utils-BoW3E2H5.js";import"./clsx-B-dksMZM.js";import"./Hidden-CRjkj892.js";import"./number-DfkVkf0F.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./RSPContexts-BGLALdn-.js";import"./Text-Dq2_g6JH.js";import"./useDateFormatter-DrbXuTpM.js";import"./useControlledState-fHHUIill.js";import"./useLocalizedStringFormatter-D7j2-V_a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cnofm4hI.js";import"./useEvent-CcBMeIPq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DuUNP3eU.js";import"./VisuallyHidden-DBSUrbfY.js";import"./clsx-Ciqy0D92.js";import"./Button-BTfIzcvP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./createLucideIcon-DGHBNn-o.js";import"./chevron-left-QVGwJc2O.js";import"./chevron-right-oGnk6PyA.js";import"./Heading-Cqo1c1jI.js";import"./FieldError-CQXxDwPR.js";import"./Text-agLRoWzJ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
