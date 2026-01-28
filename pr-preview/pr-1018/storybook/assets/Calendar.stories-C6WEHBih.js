import{$ as c,a as m,r as l,j as d}from"./iframe-B78wn1WG.js";import{C as n}from"./Calendar-C7mvsm7Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMUruWbh.js";import"./Button-Dj90Y4Eb.js";import"./utils-RTE5txou.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dmy_tbtO.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./RSPContexts-gOljqF4f.js";import"./Text-DhYauZPs.js";import"./useDateFormatter-CbB6PQEo.js";import"./useControlledState-hc0v7KHB.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-JbyTIYnp.js";import"./useEvent-C5Pl_19e.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCMvsgkK.js";import"./VisuallyHidden-nx3fwYPE.js";import"./clsx-Ciqy0D92.js";import"./Button-C_05nidj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./createLucideIcon-De6jokFF.js";import"./chevron-left-CODuqWRb.js";import"./chevron-right-CIoZIZGG.js";import"./Heading-ztzP_aN9.js";import"./FieldError-BWFa-LBr.js";import"./Text-CI45cqHe.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
