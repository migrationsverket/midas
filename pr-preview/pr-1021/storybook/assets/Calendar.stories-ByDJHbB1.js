import{$ as c,a as m,r as l,j as d}from"./iframe-CRizNrQm.js";import{C as n}from"./Calendar-dxXnSJoc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BuUzxVts.js";import"./Button-B_2FCxCF.js";import"./utils-K8G9J7j3.js";import"./clsx-B-dksMZM.js";import"./Hidden-BVxPU0E9.js";import"./useFocusRing-DbEG3syD.js";import"./index-BLxVqi3w.js";import"./index-U_5gcQv1.js";import"./useLabels-DaIxsHkM.js";import"./useButton-C-avZcWZ.js";import"./RSPContexts-CN45OwZB.js";import"./Text-DMcqYI8P.js";import"./useDateFormatter-hXMCKv8B.js";import"./useControlledState-BE4ES4tB.js";import"./useLocalizedStringFormatter-e4SpOeO9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BK1JoaRv.js";import"./useEvent-DR2hB797.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cy2gNtMJ.js";import"./VisuallyHidden-CSY-auv0.js";import"./clsx-Ciqy0D92.js";import"./Button-BfSqLmBa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUb6pTdq.js";import"./createLucideIcon-B6uSx5I0.js";import"./chevron-left-d-WVeAFp.js";import"./chevron-right-CJHTiaAQ.js";import"./Heading-Je3Oz_eC.js";import"./FieldError-D2PjhZcF.js";import"./Text-BVUreVA5.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
