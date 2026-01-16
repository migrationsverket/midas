import{$ as c,a as m,r as l,j as d}from"./iframe-DwI68eck.js";import{C as n}from"./Calendar-CRSmvh8C.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B_XzsxUx.js";import"./Button-Dq8sGMaF.js";import"./utils-Dw1S_uWj.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPNZSM4r.js";import"./useFocusRing-DB0Vn7oI.js";import"./index-DyjIQlNW.js";import"./index-DBi3ohRe.js";import"./useLabels-DRJ0S-DI.js";import"./useButton-C5XtJKU4.js";import"./RSPContexts-CBTI3P45.js";import"./Text-llkKnBOG.js";import"./useDateFormatter-y5wCgJKN.js";import"./useControlledState-B4AMrZHZ.js";import"./useLocalizedStringFormatter-C-X_uo4l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BSQIs7fO.js";import"./useEvent-De40iJ4U.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B56we0Bc.js";import"./VisuallyHidden-DzFRqZJO.js";import"./clsx-Ciqy0D92.js";import"./Button-CTJhina1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-K9SYCEaj.js";import"./createLucideIcon-DGN0UqC4.js";import"./chevron-left-DEHrrDmc.js";import"./chevron-right-ZqNAnGsW.js";import"./Heading-iMcIu53o.js";import"./FieldError-CtXLLrVt.js";import"./Text-CkP7VZx0.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
