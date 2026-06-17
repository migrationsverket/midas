import{$ as c,a as m,r as l,j as d}from"./iframe-GMyNOJOq.js";import{C as n}from"./Calendar-D5BlxT2G.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMHKFVPq.js";import"./Button-BmFFiwR6.js";import"./utils-BXbplvrq.js";import"./clsx-B-dksMZM.js";import"./Hidden-zTZMnLTK.js";import"./useFocusRing-CY-YEC5f.js";import"./index-DSCO44yP.js";import"./index-CiecEaAM.js";import"./useLabel-CqPGMRzp.js";import"./useLabels-BBipD7g9.js";import"./useButton-HZCszyxF.js";import"./RSPContexts-ALCmHzcd.js";import"./Text-DwP9uMRl.js";import"./useDateFormatter-ZSSbODii.js";import"./useControlledState-yUAT-leZ.js";import"./useLocalizedStringFormatter-CslKPgSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C4qSBNTr.js";import"./useEvent-CBo9AmGw.js";import"./getScrollParent-9kULsret.js";import"./scrollIntoView-CMEx-M2c.js";import"./useDescription-CTuGe5IW.js";import"./VisuallyHidden-DOm6YV-1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C87Wj7lZ.js";import"./createLucideIcon-BTNAcQe3.js";import"./chevron-right-Cs1uwyFF.js";import"./Button-DiEAaUmX.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DN9P_vz1.js";import"./Heading-Dvuki4_N.js";import"./FieldError-C81FQqBO.js";import"./Text-DPFOPtH6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
