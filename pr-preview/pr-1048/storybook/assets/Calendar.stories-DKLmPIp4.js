import{$ as c,a as m,r as l,j as d}from"./iframe-BB7xjXo9.js";import{C as n}from"./Calendar-BfezIU3y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWEwgaEy.js";import"./Button-BkFJO1eK.js";import"./utils-Dvy0y2aN.js";import"./clsx-B-dksMZM.js";import"./Hidden-7SCFpwar.js";import"./number-DfkVkf0F.js";import"./useFocusRing-CktrVIaE.js";import"./index-C09hS3mR.js";import"./index-B8nO0JsZ.js";import"./useLabels-B4AtxOYQ.js";import"./useButton-Bm946jai.js";import"./RSPContexts-D2NFs19Y.js";import"./Text-CLZT0tYL.js";import"./useDateFormatter-DqcGUMyA.js";import"./useControlledState-Cfde8CUP.js";import"./useLocalizedStringFormatter-CVUyHfN-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CFbfYyJZ.js";import"./useEvent-BMI0Onkw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Ct3uDuK8.js";import"./VisuallyHidden-CR7zfsA4.js";import"./clsx-Ciqy0D92.js";import"./Button-C22OOxtQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-8KGrO3.js";import"./createLucideIcon-3X7COU7u.js";import"./chevron-left-BWI7M0hU.js";import"./chevron-right-C1zK08mB.js";import"./Heading-DIypV1uE.js";import"./FieldError-DiGNmRuv.js";import"./Text-CpUAtCa1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
