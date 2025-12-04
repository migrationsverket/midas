import{$ as p,a as m,r as l,j as d}from"./iframe-DR3QLKnQ.js";import{C as n}from"./Calendar-C8Q-BrTk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-FeYbsJgE.js";import"./Button-BtuQvaqs.js";import"./utils-sts9k_ln.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHCXc2iL.js";import"./useFocusRing-D6abqPY3.js";import"./index-CC-McC1K.js";import"./index-BqyGOOW5.js";import"./useLabels-D53eucx8.js";import"./useButton-W28Zleer.js";import"./RSPContexts-D4lRqnql.js";import"./Text-qezIaGP8.js";import"./useDateFormatter-BP2Gl7Kn.js";import"./useControlledState-Bn_L3lPd.js";import"./useLocalizedStringFormatter-DkcHtNGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C2Erbbge.js";import"./useEvent-Czk1Jm6Z.js";import"./getScrollParent-C-oqUxNt.js";import"./scrollIntoView-DxAon2VW.js";import"./useDescription-DlLT_YB0.js";import"./VisuallyHidden-DAu2tE45.js";import"./clsx-Ciqy0D92.js";import"./Button-EZlh3IZI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CpsUAzKI.js";import"./createLucideIcon-CCTXZPbI.js";import"./chevron-right-C9FqCzqS.js";import"./Heading-K3H-Nqnt.js";import"./FieldError-BU84FHsn.js";import"./Text-BHdhtKkP.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
