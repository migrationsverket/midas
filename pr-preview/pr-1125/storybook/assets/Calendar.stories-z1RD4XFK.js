import{$ as c,a as m,r as l,j as d}from"./iframe-CvP1jW3H.js";import{C as n}from"./Calendar-XkSYgJTF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BbOKSFdr.js";import"./Button-DxNv6VEa.js";import"./utils-JtInM6A8.js";import"./clsx-B-dksMZM.js";import"./Hidden-JUleaqc2.js";import"./useFocusRing-CbbdQhlq.js";import"./index-DfJv0pAU.js";import"./index-yjciiip6.js";import"./useLabels-CkliYhxT.js";import"./useButton-B7hEU-Yu.js";import"./RSPContexts-y85Y3Ar7.js";import"./Text-vBZSXrPV.js";import"./useDateFormatter-D0YaRpBT.js";import"./useControlledState-JSgnBBPW.js";import"./useLocalizedStringFormatter-XI0I9Ge3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_c1HJ9z.js";import"./useEvent-D_9UE99K.js";import"./getScrollParent-Djq9HB-Y.js";import"./scrollIntoView-DRuWzNUG.js";import"./useDescription-DcTuAIR2.js";import"./VisuallyHidden-DKHlsSRZ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cm_Xe_F1.js";import"./createLucideIcon-CmBW2oBj.js";import"./chevron-right-CIHMZLIc.js";import"./Button-DsV2n0cy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DZiVR27P.js";import"./Heading-Bfi4jB_Y.js";import"./FieldError-nU5bP6xe.js";import"./Text-DvtHA-H_.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
