import{$ as p,a as m,r as l,j as d}from"./iframe-BLeM1TYl.js";import{C as n}from"./Calendar-jqCu55G6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CgRKmSwp.js";import"./Button-CYodFdJJ.js";import"./utils-D0fgVb1b.js";import"./clsx-B-dksMZM.js";import"./Hidden--RnSCsvw.js";import"./useFocusRing-4Dtk05IT.js";import"./index-BTEhrLut.js";import"./index-C_6FlPHF.js";import"./useLabels-C72m2YsE.js";import"./useButton-Byh70Qyk.js";import"./RSPContexts-B2_ECXZ0.js";import"./Text-B1gNnLul.js";import"./useDateFormatter-B8bevITs.js";import"./useControlledState-BU1bA4yz.js";import"./useLocalizedStringFormatter-DnHnQahm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaPuRBcD.js";import"./useEvent-MaLdhesQ.js";import"./getScrollParent-sfU_okZo.js";import"./scrollIntoView-l5DGKArg.js";import"./useDescription-Crxne3OE.js";import"./VisuallyHidden-B6vc2diR.js";import"./clsx-Ciqy0D92.js";import"./Button-Cpp3gRTf.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CcGBU6Ho.js";import"./chevron-right-9nHUb871.js";import"./Heading-B-qyvk2C.js";import"./FieldError-DlB1o_kR.js";import"./Text-1bQSpdKb.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
