import{$ as p,a as m,r as l,j as d}from"./iframe-COqMOSQZ.js";import{C as n}from"./Calendar-UR9LRIwu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CFDeymtZ.js";import"./Button-DsgoKRnG.js";import"./utils-UGJ7-PFb.js";import"./clsx-B-dksMZM.js";import"./Hidden-C7_4vCTh.js";import"./useFocusRing-J0hskc8K.js";import"./index-DAvvxpHq.js";import"./index-B56B2ZaE.js";import"./useLabels-ClszDTN2.js";import"./useButton-Cs35Lthr.js";import"./RSPContexts-Dj5PWvfk.js";import"./Text-Eq2bpnOV.js";import"./useDateFormatter-CqJ-XEP3.js";import"./useControlledState-D0vR2tZf.js";import"./useLocalizedStringFormatter-v3zQxbki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DAJiGZwh.js";import"./useEvent-BuGTfmKx.js";import"./getScrollParent-BUiggGc1.js";import"./scrollIntoView-DQDJTohY.js";import"./useDescription-OZCat0wf.js";import"./VisuallyHidden-D6ffzidu.js";import"./clsx-Ciqy0D92.js";import"./Button-WZo8m9qX.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CXPg-yOg.js";import"./createLucideIcon-Duz8ZquI.js";import"./chevron-right-SouOYRrm.js";import"./Heading-BsCY6yok.js";import"./FieldError-DnPw9jnQ.js";import"./Text-Dxr2WYg8.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
