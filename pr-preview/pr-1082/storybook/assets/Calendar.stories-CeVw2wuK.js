import{$ as c,a as m,r as l,j as d}from"./iframe-ghVbh2m4.js";import{C as n}from"./Calendar-RNJeptz4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CbUcB9nn.js";import"./Button-Dx2HIyuj.js";import"./utils-Ct4jCNtU.js";import"./clsx-B-dksMZM.js";import"./Hidden-CsZ06DKs.js";import"./useFocusRing-tQFcCqqc.js";import"./index-ewvUbER1.js";import"./index-Bm6sjKM_.js";import"./useLabels-Da1vllL2.js";import"./useButton-BCYBif3G.js";import"./RSPContexts-DiGFJgBW.js";import"./Text-CATOuxZy.js";import"./useDateFormatter-BgEFb578.js";import"./useControlledState-Cm-qnzwi.js";import"./useLocalizedStringFormatter-DfDL6ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CNddusky.js";import"./useEvent-DMOxFrhy.js";import"./getScrollParent-BMO_SkXK.js";import"./scrollIntoView-B7zrt0js.js";import"./useDescription-DdI46JkH.js";import"./VisuallyHidden-BqLrRw5b.js";import"./clsx-Ciqy0D92.js";import"./Button--cicrOD0.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BAvHj6kP.js";import"./createLucideIcon-iA7xlyS0.js";import"./chevron-left-B_RmljbB.js";import"./chevron-right-BuJpSBN3.js";import"./Heading-Dblz7UTY.js";import"./FieldError-DYXnaMAk.js";import"./Text-agLWRutI.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
