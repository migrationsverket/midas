import{$ as c,a as m,r as l,j as d}from"./iframe-TjYTyBIA.js";import{C as n}from"./Calendar-BzhTWTEY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-eSUuV1dv.js";import"./Button-DfGK-ytd.js";import"./utils-B2jU_PXd.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bk8kC44C.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./RSPContexts-IGt6m-sM.js";import"./Text-BkOzDRnY.js";import"./useDateFormatter-_AeG6X5P.js";import"./useControlledState-DRcN3zts.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CdFC-PM4.js";import"./useEvent-onuK9vqA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bc-rlWkY.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./clsx-Ciqy0D92.js";import"./Button-Lepv9VS_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./createLucideIcon-CEDLvmmT.js";import"./chevron-left-BWoUbnej.js";import"./chevron-right-OKSlkixN.js";import"./Heading-CXTRw5XU.js";import"./FieldError-Bc9pveKo.js";import"./Text-C9TF991Y.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
