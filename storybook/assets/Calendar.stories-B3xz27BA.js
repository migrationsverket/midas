import{$ as c,a as m,r as l,j as d}from"./iframe-UFnE_WWZ.js";import{C as n}from"./Calendar-BLmr0BdK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-drQTY9Fl.js";import"./Button-BlMAHKed.js";import"./utils-Boro9Fs8.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cq2GYd5C.js";import"./useFocusRing-CagMB1EX.js";import"./index-DuAER-0b.js";import"./index-B_Tx1Q9m.js";import"./useLabels-DemKNQhF.js";import"./useButton-C4720CM1.js";import"./RSPContexts-Df9uULAB.js";import"./Text-VMpyaGIc.js";import"./useDateFormatter-DKPzxyX3.js";import"./useControlledState-DkL4wxsI.js";import"./useLocalizedStringFormatter-W8pD0Zdb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CCurw6Se.js";import"./useEvent-B3g2B29-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-aOBh8foQ.js";import"./VisuallyHidden-CqngOA9c.js";import"./clsx-Ciqy0D92.js";import"./Button-Bqr_oLK4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BfDZhfHQ.js";import"./createLucideIcon-DWAOhH2n.js";import"./chevron-left-ByrTBOou.js";import"./chevron-right-pjsjYlLS.js";import"./Heading-dk_tkQJi.js";import"./FieldError-DIDzRcSm.js";import"./Text-DMrMZJ_c.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
