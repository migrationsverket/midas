import{$ as p,a as m,r as l,j as d}from"./iframe-CyMjtGPK.js";import{C as n}from"./Calendar-DgHYSda2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dv-7GrF3.js";import"./Button-BXSdsNHC.js";import"./utils-DVuKvfbU.js";import"./clsx-B-dksMZM.js";import"./Hidden-IMfBhQ0L.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./RSPContexts-B7a1EqUx.js";import"./Text-DzIkDf4e.js";import"./useDateFormatter-BfXBR7Cy.js";import"./useControlledState-CTMqSIS3.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B6nZUL2A.js";import"./useEvent-DGFI6kX3.js";import"./getScrollParent-Da9WjJ5R.js";import"./scrollIntoView-DiSP5vc7.js";import"./useDescription-y7zAw2pV.js";import"./VisuallyHidden-BjRgoPVR.js";import"./clsx-Ciqy0D92.js";import"./Button-B8uAn95p.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-D70ZsCEu.js";import"./chevron-right-Dtj9eaM7.js";import"./Heading-Bo_fpOH0.js";import"./FieldError-Bva2mD5K.js";import"./Text-Ugwvt_bi.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
