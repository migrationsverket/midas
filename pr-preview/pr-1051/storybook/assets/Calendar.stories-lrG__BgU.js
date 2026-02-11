import{$ as c,a as m,r as l,j as d}from"./iframe-Drr84aUp.js";import{C as n}from"./Calendar-BrRu6g9Q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BPp6ar0M.js";import"./Button-CwulGWpP.js";import"./utils-Dj0d5knJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeHVocu4.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./RSPContexts-SjihynDA.js";import"./Text-Dr4vVF01.js";import"./useDateFormatter-CJxnCtMX.js";import"./useControlledState-ORv1HaqW.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsBaxDMt.js";import"./useEvent-DtfVww8C.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DocMBm6g.js";import"./VisuallyHidden-BX3HTr1q.js";import"./clsx-Ciqy0D92.js";import"./Button-BXBCvuas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./createLucideIcon-BYlUtrd2.js";import"./chevron-left-CHjFdr2E.js";import"./chevron-right-CgslfC4g.js";import"./Heading-DzifNSwV.js";import"./FieldError-799sXCos.js";import"./Text-v7lTDwJ8.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
