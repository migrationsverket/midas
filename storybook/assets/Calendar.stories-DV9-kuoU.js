import{$ as c,a as m,r as l,j as d}from"./iframe-ttA-941O.js";import{C as n}from"./Calendar-uJldD6OX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CCuv2SID.js";import"./Button-C5RiUPk0.js";import"./utils-kMU7ki_G.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwltMKmL.js";import"./useFocusRing-JMNyCoET.js";import"./index-BGJa9tKv.js";import"./index-xTgHXqnF.js";import"./useLabels-CKLykpFR.js";import"./useButton-Ufm4RpL_.js";import"./RSPContexts-CjxN8zVi.js";import"./Text-DDmMxJeL.js";import"./useDateFormatter-CYxhKv-1.js";import"./useControlledState-BUy0YhYj.js";import"./useLocalizedStringFormatter-C2DhziCO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DtkTR-pf.js";import"./useEvent-DZVHWHFV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BJ8hGUtQ.js";import"./VisuallyHidden-BaeJBxqb.js";import"./clsx-Ciqy0D92.js";import"./Button-BhVMo4IX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CuS96Tce.js";import"./createLucideIcon-B1sYOOVA.js";import"./chevron-left-RhVHBGz_.js";import"./chevron-right-DoFlEG8x.js";import"./Heading-DxYLh6qs.js";import"./FieldError-D8wLofnN.js";import"./Text-BR3kbEzk.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
