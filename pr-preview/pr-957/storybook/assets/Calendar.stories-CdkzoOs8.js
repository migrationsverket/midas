import{$ as p,a as m,r as l,j as d}from"./iframe-BtMwOEiM.js";import{C as n}from"./Calendar-08p79fMf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-1t--O-nK.js";import"./Button-DpK-_iud.js";import"./utils-BoP-oma8.js";import"./clsx-B-dksMZM.js";import"./Hidden-4SQq7b_R.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./RSPContexts-DnH5Czok.js";import"./Text-BIvd2lWW.js";import"./useDateFormatter-DKctG9_v.js";import"./useControlledState-4eQ4VJ_x.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-zYcRPFa1.js";import"./useEvent-Bpvasb0c.js";import"./getScrollParent--egNNwF2.js";import"./scrollIntoView-7ZxtPAx0.js";import"./useDescription-larqa2bq.js";import"./VisuallyHidden-DmeEZsXF.js";import"./clsx-Ciqy0D92.js";import"./Button-Bs1OmtnK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DETAsxuF.js";import"./createLucideIcon-C3W8dNhU.js";import"./chevron-right-B8PK-JEK.js";import"./Heading-B4LhT9pb.js";import"./FieldError-D_5OLq9A.js";import"./Text-Blq4VDAx.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
