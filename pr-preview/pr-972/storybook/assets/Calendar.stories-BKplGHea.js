import{$ as p,a as m,r as l,j as d}from"./iframe-rZSXM0eC.js";import{C as n}from"./Calendar-CVqUikDU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ouhVF4nw.js";import"./Button-BI9OLJBe.js";import"./utils-CoXmV-kq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CkS_PPul.js";import"./useFocusRing-DLR1K1QN.js";import"./index-BYjFf690.js";import"./index-BIlXx4dX.js";import"./useLabels-CSFhnw6H.js";import"./useButton-BLxitDUj.js";import"./RSPContexts-DSdgfpLb.js";import"./Text-emOnGTp7.js";import"./useDateFormatter-Czy8O9Py.js";import"./useControlledState-Cj9hNixb.js";import"./useLocalizedStringFormatter-BguK_3zR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DXZ1Gdo0.js";import"./useEvent-rYUL_cNQ.js";import"./getScrollParent-CT4GRoEo.js";import"./scrollIntoView-Dmb1hsjT.js";import"./useDescription-yVm4-GE8.js";import"./VisuallyHidden-9EaIoABp.js";import"./clsx-Ciqy0D92.js";import"./Button-fbKI_IfZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ddfk2Acf.js";import"./createLucideIcon-D5ASq0Cm.js";import"./chevron-right-CyqI6YAD.js";import"./Heading-CUfFzr1r.js";import"./FieldError-C2QK88J2.js";import"./Text-BOwlJhSq.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
