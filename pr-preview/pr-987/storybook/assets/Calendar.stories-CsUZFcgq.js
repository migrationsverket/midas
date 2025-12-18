import{$ as p,a as m,r as l,j as d}from"./iframe-DpkXPy0n.js";import{C as n}from"./Calendar-B3Uchv-g.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C2qP_ptS.js";import"./Button-CHXzaCY5.js";import"./utils-L94HqgzK.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTD0UQQQ.js";import"./useFocusRing-BK2U18QP.js";import"./index-Dz73hEDG.js";import"./index-Jpoz6mxO.js";import"./useLabels-BJw1CHux.js";import"./useButton-DOEAHNgg.js";import"./RSPContexts-BfaQoUqD.js";import"./Text-GJ7yr5Nr.js";import"./useDateFormatter-C4Cs4p8N.js";import"./useControlledState-02wgDfoK.js";import"./useLocalizedStringFormatter-MolCtrmQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-OFob3NkF.js";import"./useEvent-Du52wMZn.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DFbPOd92.js";import"./VisuallyHidden-Dc6Lrvt7.js";import"./clsx-Ciqy0D92.js";import"./Button-C4Ej8dq3.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-B0-0j7mp.js";import"./createLucideIcon-CfN2dpy0.js";import"./chevron-right-CnJc39cU.js";import"./Heading-CXmTa0V7.js";import"./FieldError-EOCKYRyZ.js";import"./Text-7Zq3gPgG.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
