import{$ as c,a as m,r as l,j as d}from"./iframe-BgTJCWOi.js";import{C as n}from"./Calendar-C8YdbfVQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C-goZ_vh.js";import"./Button-DFN5fdXi.js";import"./utils-bx0JNicM.js";import"./clsx-B-dksMZM.js";import"./Hidden-1E0jU_sg.js";import"./useFocusRing-CQGFmCQM.js";import"./index-Di0LCwPl.js";import"./index-nvK8JwcD.js";import"./useLabels-C6Pff7p0.js";import"./useButton-RwbbtEdP.js";import"./RSPContexts-CeugRKEP.js";import"./Text-BPwtGfCt.js";import"./useDateFormatter-uJK91tM3.js";import"./useControlledState-7UzvBFe4.js";import"./useLocalizedStringFormatter-DzvgYJWh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-5TEVnRj9.js";import"./useEvent-fLqVt5ZT.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DauRvPVC.js";import"./VisuallyHidden-COxax3nI.js";import"./clsx-Ciqy0D92.js";import"./Button-CUni_Rhy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DmYhpSJF.js";import"./createLucideIcon-BMuWalIG.js";import"./chevron-left-C4YqnvAu.js";import"./chevron-right-BfZMkySd.js";import"./Heading-CCbZjm_P.js";import"./FieldError-D1yKmAxB.js";import"./Text-D9p-rhNz.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
