import{$ as p,a as m,r as l,j as d}from"./iframe-NQwQ8Ipc.js";import{C as n}from"./Calendar-BY52i3b7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CbhkC9u8.js";import"./Button-BD9SwyBt.js";import"./utils-CagmBR4h.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMhcaOTC.js";import"./useFocusRing-ChWSchxP.js";import"./index-D5MLpHUU.js";import"./index-Cvu387iz.js";import"./useLabels-B0KRHn3k.js";import"./useButton-CEbDpz1S.js";import"./RSPContexts-BtehIcvf.js";import"./Text-C_uAOKRC.js";import"./useDateFormatter-Dq0atG8s.js";import"./useControlledState-C5kK2k2z.js";import"./useLocalizedStringFormatter-Cw0M4ILW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ox43bbYc.js";import"./useEvent-zLeWJTeo.js";import"./getScrollParent-DOXk8-VT.js";import"./scrollIntoView-BHqusxUp.js";import"./useDescription-Dgt-8WJE.js";import"./VisuallyHidden-DcGuHUr7.js";import"./clsx-Ciqy0D92.js";import"./Button-CDPGYKZu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5C2l5IJ.js";import"./createLucideIcon-pmY9-a6l.js";import"./chevron-right-6QYT3cAc.js";import"./Heading-MJ45rYTR.js";import"./FieldError-aq8gcakB.js";import"./Text-YxgCEkkP.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
