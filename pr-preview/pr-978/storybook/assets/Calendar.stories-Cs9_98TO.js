import{$ as c,a as m,r as l,j as d}from"./iframe-BgZjYXda.js";import{C as n}from"./Calendar-CqNkVnjJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CKl_stIO.js";import"./Button-BEN3V4yN.js";import"./utils-D0CD63H9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxgDdtDK.js";import"./useFocusRing-BCl8bI7q.js";import"./index-DsdCiTSh.js";import"./index-MXE8Cyql.js";import"./useLabels-B7Wr4Ixw.js";import"./useButton-GZvAYJ-B.js";import"./RSPContexts-B3AEdr6z.js";import"./Text-BdUrBZw-.js";import"./useDateFormatter-D22-T_py.js";import"./useControlledState-BOn_mVp6.js";import"./useLocalizedStringFormatter-CBItuOna.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cyu8OfB8.js";import"./useEvent-CHanbtbs.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C0V2PFjt.js";import"./VisuallyHidden--CMfLrKZ.js";import"./clsx-Ciqy0D92.js";import"./Button-C93M6E-Z.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wqfGz20J.js";import"./createLucideIcon-BhiKWk6O.js";import"./chevron-left-Dx5-NVBv.js";import"./chevron-right-BGnJlcds.js";import"./Heading-DFgHxESE.js";import"./FieldError-B_6bKRLN.js";import"./Text-CRywFydi.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
