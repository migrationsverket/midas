import{$ as c,a as m,r as l,j as d}from"./iframe-UKNJQjU7.js";import{C as n}from"./Calendar-DMDOwqcH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CRIlDT3I.js";import"./Button-ktQggvc6.js";import"./utils-ZaspRvtG.js";import"./clsx-B-dksMZM.js";import"./Hidden-DcgeNwze.js";import"./useFocusRing-BeIXTmL-.js";import"./index-BeTr8JYW.js";import"./index-Cs6Wfmrv.js";import"./useLabels-Egh2Tmf-.js";import"./useButton-B8VBkWrX.js";import"./RSPContexts-hVdnM1Ff.js";import"./Text-DJmal9QH.js";import"./useDateFormatter-DVG4BIdU.js";import"./useControlledState-DMxiQw5s.js";import"./useLocalizedStringFormatter-DzhvNqYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-4LONECmn.js";import"./useEvent-CAWk4ACy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-tMahdvfR.js";import"./VisuallyHidden-B64N4Qj2.js";import"./clsx-Ciqy0D92.js";import"./Button-CwlpoN3f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B6bHgHU4.js";import"./createLucideIcon-VUHoQ9n0.js";import"./chevron-left-Cpzrm5a8.js";import"./chevron-right-DyrwQwT2.js";import"./Heading-DtOHVxxT.js";import"./FieldError-D2l5qYM7.js";import"./Text-DpfK05TX.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
