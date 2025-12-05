import{$ as p,a as m,r as l,j as d}from"./iframe-100qMnfY.js";import{C as n}from"./Calendar-CnLQjYck.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BvRNNhJl.js";import"./Button-CLD1ku7M.js";import"./utils-DREZrf5w.js";import"./clsx-B-dksMZM.js";import"./Hidden-BfdaDtwq.js";import"./useFocusRing-CVO60JuB.js";import"./index-DtVlivv4.js";import"./index-4-70Rh_t.js";import"./useLabels-ChwZdlgF.js";import"./useButton-BCpYX0mb.js";import"./RSPContexts-C0KhFtOq.js";import"./Text-B4kw0-X3.js";import"./useDateFormatter-DivVa3Vd.js";import"./useControlledState-UappQ29V.js";import"./useLocalizedStringFormatter-X_3lrB61.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7us8Ugh.js";import"./useEvent-kutblQB0.js";import"./getScrollParent-kLQEpmJe.js";import"./scrollIntoView-7R9ToXO2.js";import"./useDescription-Dr1tnAab.js";import"./VisuallyHidden-4x0NHiv7.js";import"./clsx-Ciqy0D92.js";import"./Button-CSE2hNCe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zfYfv8U6.js";import"./createLucideIcon-CoQzWAgu.js";import"./chevron-right-BFoqNSkg.js";import"./Heading-Rgb2c7mX.js";import"./FieldError-BvABXoNl.js";import"./Text-B8ramOt9.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
