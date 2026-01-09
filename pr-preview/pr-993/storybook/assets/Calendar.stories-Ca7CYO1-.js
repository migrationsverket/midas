import{$ as p,a as m,r as l,j as d}from"./iframe-DSZ2fKvK.js";import{C as n}from"./Calendar-CZ7Ebyit.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KFgDenAY.js";import"./Button-DA0aKT5l.js";import"./utils-Cfkrut6D.js";import"./clsx-B-dksMZM.js";import"./Hidden-ChZPyTdJ.js";import"./useFocusRing-DXadVZPZ.js";import"./index-DoXffT-S.js";import"./index-DWmwxavY.js";import"./useLabels-CBr_pV_K.js";import"./useButton-BoGmqoO9.js";import"./RSPContexts-Dor0eJbl.js";import"./Text-CgCYlfoO.js";import"./useDateFormatter-DoJSFZKd.js";import"./useControlledState-KoCGTRr1.js";import"./useLocalizedStringFormatter-BJCLTOit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BhGK5FZY.js";import"./useEvent-DbBN9uYZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CWxL4hNe.js";import"./VisuallyHidden-9r-CcUTk.js";import"./clsx-Ciqy0D92.js";import"./Button-wYRzLtLo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fLqKeFmr.js";import"./createLucideIcon-BZEE360n.js";import"./chevron-right-lcLg7AVY.js";import"./Heading-CTO5IYsM.js";import"./FieldError-BMni7XFl.js";import"./Text-w9kcErxq.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
