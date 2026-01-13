import{$ as c,a as m,r as l,j as d}from"./iframe-CVYuRL2L.js";import{C as n}from"./Calendar-B42Rz6U0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-tg9qZZdU.js";import"./Button-fgPwWI64.js";import"./utils-FalFx0_C.js";import"./clsx-B-dksMZM.js";import"./Hidden-7G--kRMd.js";import"./useFocusRing-B7UqG5wX.js";import"./index-CIN53LEN.js";import"./index-DW6Gp5-3.js";import"./useLabels-C6aP1roI.js";import"./useButton-BemEUMtu.js";import"./RSPContexts-Dz_7vHVU.js";import"./Text-fqYhQFX9.js";import"./useDateFormatter-Dq4orQ2L.js";import"./useControlledState-Bfw16jnf.js";import"./useLocalizedStringFormatter-Caq8B-uR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-tpUbIZWD.js";import"./useEvent-PY-NpLtx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B68_wcOl.js";import"./VisuallyHidden-BJW8H9GE.js";import"./clsx-Ciqy0D92.js";import"./Button-B6nzWHQR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-De7XCe4t.js";import"./createLucideIcon-DJNnvE8I.js";import"./chevron-left-Dgct6r57.js";import"./chevron-right-3EMV6Gf3.js";import"./Heading-CnEQ7lj3.js";import"./FieldError-BIaXIYDe.js";import"./Text-Cc7Ev4p7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
