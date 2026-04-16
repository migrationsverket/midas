import{$ as c,a as m,r as l,j as d}from"./iframe-DLmeXnKv.js";import{C as n}from"./Calendar-s1as2dyv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B7Tt4gBy.js";import"./Button-6oEuMc47.js";import"./utils-ClLZ4yi-.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYR-bjkD.js";import"./useFocusRing-Chec2SQM.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./RSPContexts-DA-h5R_C.js";import"./Text-as2Y-4wz.js";import"./useDateFormatter-C94ov4V3.js";import"./useControlledState-B3HwZ_qH.js";import"./useLocalizedStringFormatter-CjQq4jGT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-sqLJIs5-.js";import"./useEvent-D3OHHv5s.js";import"./getScrollParent-B00tpoYc.js";import"./scrollIntoView-DOnnrSvN.js";import"./useDescription-B42TuL4b.js";import"./VisuallyHidden-BCbNtM-G.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-LVUSKdhz.js";import"./createLucideIcon-Cb9jSIDP.js";import"./chevron-right-BGvYNdem.js";import"./Button-CmoC0nDS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./Heading-UueCPB47.js";import"./FieldError-BpDzH8Cd.js";import"./Text-ByAHNZXR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
