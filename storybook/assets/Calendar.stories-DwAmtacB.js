import{$ as p,a as m,r as l,j as d}from"./iframe-BY2_3lFS.js";import{C as n}from"./Calendar-Dwf_GDGB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BI6NtXBu.js";import"./Button-_0WHvwFf.js";import"./utils-DnCax-D0.js";import"./clsx-B-dksMZM.js";import"./Hidden-V6emqDRH.js";import"./useFocusRing-DaJYhCLu.js";import"./index-Cd6P2FPg.js";import"./index-DsAQLNj2.js";import"./useLabels-teOrTThM.js";import"./useButton-M1sf-acB.js";import"./RSPContexts-CGAbcc-X.js";import"./Text-C1EVzu2w.js";import"./useDateFormatter-BWQxc2zP.js";import"./useControlledState-D242PxvH.js";import"./useLocalizedStringFormatter-DXd1hwbc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPDyOurK.js";import"./useEvent-DJjZV-7J.js";import"./getScrollParent-BxMLCvFI.js";import"./scrollIntoView-1xelqv_Y.js";import"./useDescription-Cxu1pppP.js";import"./VisuallyHidden-Dt3RoQzb.js";import"./clsx-Ciqy0D92.js";import"./Button-B_p_1c42.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzVUglTs.js";import"./createLucideIcon-CKXpjIL3.js";import"./chevron-right-DwUnlCy9.js";import"./Heading-CBfqP5Qn.js";import"./FieldError-D-UB8LkT.js";import"./Text-BuRtAqu6.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
