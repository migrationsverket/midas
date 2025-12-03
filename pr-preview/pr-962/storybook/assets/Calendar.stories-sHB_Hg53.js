import{$ as p,a as m,r as l,j as d}from"./iframe-wyIkUD1D.js";import{C as n}from"./Calendar-C0Sol1OP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DvegujBa.js";import"./Button-DEVYr1z-.js";import"./utils-CayfEQ5F.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxKc16eE.js";import"./useFocusRing-BjDxUBjo.js";import"./index-C8_xscMq.js";import"./index-BVT2M0jp.js";import"./useLabels-B7l2UtXF.js";import"./useButton-DOQkadi1.js";import"./RSPContexts-BmEF4fx6.js";import"./Text-Bd9qAe_e.js";import"./useDateFormatter-B4y-gR07.js";import"./useControlledState-CXqW8AC6.js";import"./useLocalizedStringFormatter-Cl-aTEus.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-4arJw9.js";import"./useEvent-CPbBx1yC.js";import"./getScrollParent-DKoBHqeV.js";import"./scrollIntoView-DniIlJJq.js";import"./useDescription-zG_-_r1G.js";import"./VisuallyHidden-PWbTykwh.js";import"./clsx-Ciqy0D92.js";import"./Button-DPYxe-X7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChSX0_b-.js";import"./createLucideIcon-BGFGME34.js";import"./chevron-right-CnrvmLaI.js";import"./Heading-_qV4bcb5.js";import"./FieldError-CawbUy3c.js";import"./Text-CyLswFoN.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
