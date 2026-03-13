import{$ as c,a as m,r as l,j as d}from"./iframe-Bj3rykqq.js";import{C as n}from"./Calendar-xc2dtNqp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BCsUBi3K.js";import"./Button-BY6aKs9R.js";import"./utils-BPR6QYXC.js";import"./clsx-B-dksMZM.js";import"./Hidden-H2J0AFM4.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./RSPContexts-Cy2kM2_o.js";import"./Text-D5Hv1XGK.js";import"./useDateFormatter-DGfzkxfF.js";import"./useControlledState-RfhzWKsJ.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Di_zLKx0.js";import"./useEvent-Z7oo2rlc.js";import"./getScrollParent-B0dYpp2l.js";import"./scrollIntoView-GIX096WN.js";import"./useDescription-DOgLYOne.js";import"./VisuallyHidden-DZrJwb84.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BVUP4pm7.js";import"./createLucideIcon-CZGOASFZ.js";import"./chevron-right-DlO6D2qx.js";import"./Button-DJUV-Oif.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./Heading-SaNHDBgy.js";import"./FieldError-CGmgGZmu.js";import"./Text-DPxIPb0k.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
