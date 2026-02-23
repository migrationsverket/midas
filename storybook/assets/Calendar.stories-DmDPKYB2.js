import{$ as c,a as m,r as l,j as d}from"./iframe-QWuQ_a_L.js";import{C as n}from"./Calendar-DuKTsUre.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CY7ETv8z.js";import"./Button-KogFliLu.js";import"./utils-CxNcyM92.js";import"./clsx-B-dksMZM.js";import"./Hidden-BjMXI3fA.js";import"./useFocusRing-NgK8_rV0.js";import"./index-DnDJQrpf.js";import"./index-DhvOpsCp.js";import"./useLabels-BR_PNTmP.js";import"./useButton-D-kJSK4W.js";import"./RSPContexts-vPfGRekH.js";import"./Text-EITSTnbM.js";import"./useDateFormatter-BGgYuDTQ.js";import"./useControlledState-DmhZDXqG.js";import"./useLocalizedStringFormatter-CHjb52Du.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DnYhW1hI.js";import"./useEvent-pN3Gim4v.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DOmS_boH.js";import"./VisuallyHidden-_bN2WTJ0.js";import"./clsx-Ciqy0D92.js";import"./Button-CAN03lh_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGc7qMk.js";import"./createLucideIcon-DjVjSJaI.js";import"./chevron-left-Bi-perSi.js";import"./chevron-right-Blfbm-yD.js";import"./Heading-BiafLM2_.js";import"./FieldError-DrWE9U3t.js";import"./Text-Dyca_2PO.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
