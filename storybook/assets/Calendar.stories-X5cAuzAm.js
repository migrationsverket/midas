import{$ as c,a as m,r as l,j as d}from"./iframe-Dv5oy3ex.js";import{C as n}from"./Calendar-hwbS3kBw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLkMB-Jo.js";import"./Button-BH4eeu0k.js";import"./utils-DqE5PILI.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxtegDl0.js";import"./useFocusRing-DFkj2PJJ.js";import"./index-COb2Vy-7.js";import"./index-IcK2KPt1.js";import"./useLabels-Dt8q9qYY.js";import"./useButton-B42S7nFw.js";import"./RSPContexts-Bum2SDPF.js";import"./Text-D7P0gU-S.js";import"./useDateFormatter-DULfBnUP.js";import"./useControlledState-CnplxgpR.js";import"./useLocalizedStringFormatter-Ci5_pA40.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bjz3LY87.js";import"./useEvent-6NaHNc9j.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-R2YOgaZ4.js";import"./VisuallyHidden-ziZ6pEVt.js";import"./clsx-Ciqy0D92.js";import"./Button-DFKGQSYP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BSci6oqP.js";import"./createLucideIcon-BqwtoRoR.js";import"./chevron-left-Dr8NyAGx.js";import"./chevron-right-DVBcyu6q.js";import"./Heading-DF2Wpc2f.js";import"./FieldError-CoMYK3IV.js";import"./Text-BnCHL2hB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
