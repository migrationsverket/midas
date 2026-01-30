import{$ as c,a as m,r as l,j as d}from"./iframe-COBKNkIo.js";import{C as n}from"./Calendar-BegjNPnQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Djj6Y1XX.js";import"./Button-DVN4emYY.js";import"./utils-Cawu88FS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWdHgASM.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./RSPContexts-C70LcTh5.js";import"./Text-fShGFw3n.js";import"./useDateFormatter-C_VLGofi.js";import"./useControlledState-njDs9clp.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DiKf_ziZ.js";import"./useEvent-eTIvht7u.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CxjHqdVd.js";import"./VisuallyHidden-vIshbz0f.js";import"./clsx-Ciqy0D92.js";import"./Button-COjdwtTG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./createLucideIcon-CRw8Ded6.js";import"./chevron-left-pgvnvE5M.js";import"./chevron-right-kwPGBtCN.js";import"./Heading-C1jl_BHV.js";import"./FieldError-Dc4PcQjT.js";import"./Text-CtIfC9h2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
