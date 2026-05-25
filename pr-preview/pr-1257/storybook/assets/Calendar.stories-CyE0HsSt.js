import{$ as c,a as m,r as l,j as d}from"./iframe-DHSFkIsy.js";import{C as n}from"./Calendar-CGF0lomo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CVsQzxKj.js";import"./Button-DwFLZ-vl.js";import"./utils-CZbTr4bL.js";import"./clsx-B-dksMZM.js";import"./Hidden-N-s-Oc-P.js";import"./useFocusRing-CNpZwhdZ.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./RSPContexts-Dm3G7A6M.js";import"./Text-Dlktz5kY.js";import"./useDateFormatter-COeth2U6.js";import"./useControlledState-BC5iZhUu.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-d7ShU32-.js";import"./useEvent-DMc3Uz1U.js";import"./getScrollParent-HtTQIod0.js";import"./scrollIntoView-DmtYx3D8.js";import"./useDescription-COddip1D.js";import"./VisuallyHidden-CdVi298y.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CEvxHf05.js";import"./createLucideIcon-Bhv8-C3S.js";import"./chevron-right-CLC4R6y5.js";import"./Button-BCxQv38d.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Heading-pXzzfo8s.js";import"./FieldError-DFzLFMIZ.js";import"./Text-CE2-J5ib.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
