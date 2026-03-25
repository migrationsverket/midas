import{$ as c,a as m,r as l,j as d}from"./iframe-XSOdna7V.js";import{C as n}from"./Calendar-UoyVvWLR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cjg62I3l.js";import"./Button-Ds4pD6-3.js";import"./utils-BQ1sxQ0q.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgkiT7h9.js";import"./useFocusRing-BwnMuBvC.js";import"./index-Nnd_sr_d.js";import"./index-CkxN_ckL.js";import"./useLabels-W70u1liP.js";import"./useButton-CLu9KC4S.js";import"./RSPContexts-BflBX7gr.js";import"./Text-DyMLbB4z.js";import"./useDateFormatter-DDkIQ1F0.js";import"./useControlledState-BswRF_WI.js";import"./useLocalizedStringFormatter-Pfz8vAph.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8imnv0QX.js";import"./useEvent-hkKHp_Kw.js";import"./getScrollParent-C4lNdL8d.js";import"./scrollIntoView-CgGayU5o.js";import"./useDescription-DahbeNS8.js";import"./VisuallyHidden-CsIt9SGg.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CjJxMKNB.js";import"./createLucideIcon-DBCz1Yzx.js";import"./chevron-right-D_eSTICs.js";import"./Button-C9mugSTA.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BcWjRhxv.js";import"./Heading-DOyw__IB.js";import"./FieldError-DJsWyzRR.js";import"./Text-BAQEtY4I.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
