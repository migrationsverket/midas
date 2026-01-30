import{$ as c,a as m,r as l,j as d}from"./iframe-QCvgx_6y.js";import{C as n}from"./Calendar-d_kspApW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D8rGuzW-.js";import"./Button-BpIMXVxv.js";import"./utils-C1Mk8uEB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMidg2Il.js";import"./useFocusRing-B0xXDhD6.js";import"./index-B-XgGbbB.js";import"./index-DWf5Hj5q.js";import"./useLabels-BOXfhA_k.js";import"./useButton-Ciq0-AOg.js";import"./RSPContexts-DXnSMn-5.js";import"./Text-BvPJ8hQK.js";import"./useDateFormatter-_aJPqwaa.js";import"./useControlledState-DePuPBqi.js";import"./useLocalizedStringFormatter-uw_CdbjJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BI9jQu1K.js";import"./useEvent-Cxfz3n5z.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cvonpwl1.js";import"./VisuallyHidden-stmDuLKZ.js";import"./clsx-Ciqy0D92.js";import"./Button-ttDsw6E6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OgryoDOo.js";import"./createLucideIcon-CpnVUy3d.js";import"./chevron-left-DIYTCAv0.js";import"./chevron-right-zgpzSZ9H.js";import"./Heading-CwLsWtxP.js";import"./FieldError-8Gyb2PkQ.js";import"./Text-DMQOF3Hl.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
