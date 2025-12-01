import{$ as p,a as m,r as l,j as d}from"./iframe-DwenO7ee.js";import{C as n}from"./Calendar-OHDhNQk7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Csv3RtAx.js";import"./Button-BweeCEHL.js";import"./utils-B04QOTqX.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu6WCKNR.js";import"./useFocusRing-DMrg0sfB.js";import"./index-xMNIBZ7U.js";import"./index-DeJVUVa5.js";import"./useLabels-CZNC_GkZ.js";import"./useButton-BxnkwXfu.js";import"./RSPContexts-BkoZaB3n.js";import"./Text-DBlsv5Fr.js";import"./useDateFormatter-D77eyyEu.js";import"./useControlledState-BpTl-34E.js";import"./useLocalizedStringFormatter-BmtD3KPy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-lEHMns2J.js";import"./useEvent-CHalSxnW.js";import"./getScrollParent-CmvpSIIr.js";import"./scrollIntoView-mzLO5Dzu.js";import"./useDescription-Bo32FiVm.js";import"./VisuallyHidden-D6EEr8kz.js";import"./clsx-Ciqy0D92.js";import"./Button-B4MIMYl2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3eP5Seam.js";import"./createLucideIcon-CA6X7-no.js";import"./chevron-right-ByUs2YTb.js";import"./Heading-CYGWc5e2.js";import"./FieldError-D0wasyEZ.js";import"./Text-f-cH2Nc1.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
