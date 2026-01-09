import{$ as p,a as m,r as l,j as d}from"./iframe-BdIMh-mp.js";import{C as n}from"./Calendar-B5QGn_oU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B7fKXyHY.js";import"./Button-zJPbjdhx.js";import"./utils-DcDhyL9A.js";import"./clsx-B-dksMZM.js";import"./Hidden-Wyg5sLjl.js";import"./useFocusRing-BNwH8fuD.js";import"./index-hViR2ylZ.js";import"./index-DZNXlpZV.js";import"./useLabels-C4ABAGya.js";import"./useButton-BS6Zvdtu.js";import"./RSPContexts-heqwVcoc.js";import"./Text-C4WrRLPZ.js";import"./useDateFormatter-CKNd5eOH.js";import"./useControlledState-CajUkngI.js";import"./useLocalizedStringFormatter-BqgT-J0v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DrY-vnU8.js";import"./useEvent-DQNjJNfH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BK2hXU45.js";import"./VisuallyHidden-D8MfmHyq.js";import"./clsx-Ciqy0D92.js";import"./Button-CNVh9qH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXrVuCTi.js";import"./createLucideIcon-DEobE2Q1.js";import"./chevron-right-Dkd0CG7V.js";import"./Heading-DtHnABte.js";import"./FieldError-DsymNm4A.js";import"./Text-Bx_0lix_.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
