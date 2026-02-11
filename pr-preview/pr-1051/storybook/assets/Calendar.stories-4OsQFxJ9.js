import{$ as c,a as m,r as l,j as d}from"./iframe-fp2Nog4h.js";import{C as n}from"./Calendar-C5acWhOK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-czb2wwnt.js";import"./Button-GyiYNsJ6.js";import"./utils-C8oibJ9L.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOc9bKY7.js";import"./useFocusRing-BTvXf_Cd.js";import"./index-D6xqLboL.js";import"./index-B3h2-82A.js";import"./useLabels-DTn6LYUg.js";import"./useButton-D94t8hrE.js";import"./RSPContexts-BdtlfPBJ.js";import"./Text-CCjcRRvg.js";import"./useDateFormatter-Shw9QSE_.js";import"./useControlledState-BU_oUKfA.js";import"./useLocalizedStringFormatter-ANzTOMvn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_ai5HRE.js";import"./useEvent-BkbB1DI_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHRPbtLk.js";import"./VisuallyHidden-CLqMczTC.js";import"./clsx-Ciqy0D92.js";import"./Button-DtrbXpSE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8zHSBgy.js";import"./createLucideIcon-BdCyL4gS.js";import"./chevron-left-Cx3nqPWo.js";import"./chevron-right-B-A-oKqz.js";import"./Heading-BVNexJLw.js";import"./FieldError-B0WmEBkc.js";import"./Text-D811-Zq9.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
