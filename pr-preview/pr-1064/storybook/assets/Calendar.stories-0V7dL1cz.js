import{$ as c,a as m,r as l,j as d}from"./iframe-D9H9xcS2.js";import{C as n}from"./Calendar-Bh3qmQv2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dg21jLHi.js";import"./Button-Dy6Jv4XA.js";import"./utils-fDye7Hn-.js";import"./clsx-B-dksMZM.js";import"./Hidden-DbKUAskx.js";import"./useFocusRing-Ceh5Z1MC.js";import"./index-BnIUjihK.js";import"./index-BmeqR-Yx.js";import"./useLabels-B07HLygv.js";import"./useButton-DlcBDUmj.js";import"./RSPContexts-BdMR1EyJ.js";import"./Text-CVrEtWWi.js";import"./useDateFormatter-DuyzT91U.js";import"./useControlledState-CAi_EPd5.js";import"./useLocalizedStringFormatter-CC37Fr-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C9XobJMi.js";import"./useEvent-DlZFMt0I.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bb7bc4Rr.js";import"./VisuallyHidden-C7ARzOYG.js";import"./clsx-Ciqy0D92.js";import"./Button-DGBu_aXN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJEgiUI-.js";import"./createLucideIcon-mT-ajzIy.js";import"./chevron-left-B0_969e2.js";import"./chevron-right-C2jnrqzI.js";import"./Heading-Ccms1psw.js";import"./FieldError-CVRuJPZY.js";import"./Text-Dg1l2GcJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
