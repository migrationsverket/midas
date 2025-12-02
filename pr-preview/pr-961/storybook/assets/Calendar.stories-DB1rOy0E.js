import{$ as p,a as m,r as l,j as d}from"./iframe-CMUJ4oTW.js";import{C as n}from"./Calendar-CyLeZR0x.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BIF_PaSJ.js";import"./Button-Bqzmv4VE.js";import"./utils-Bw5kKF0Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0lp5d68.js";import"./useFocusRing-CCdJUNbr.js";import"./index-BXUeCXEl.js";import"./index-BRxHMroZ.js";import"./useLabels-CskVNZCZ.js";import"./useButton-B2z_QK8p.js";import"./RSPContexts-Dtm3ZRmN.js";import"./Text-CmjU0gZm.js";import"./useDateFormatter-BKn9QR8l.js";import"./useControlledState-7-Wnf2ZS.js";import"./useLocalizedStringFormatter-CO8ox3aE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D1d6ogIW.js";import"./useEvent-DIWN8gNy.js";import"./getScrollParent-CNXWRTC7.js";import"./scrollIntoView-Bpk-j4gT.js";import"./useDescription-CjJLap45.js";import"./VisuallyHidden-B5co-kC4.js";import"./clsx-Ciqy0D92.js";import"./Button-D8hA4J4_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cyjs_x30.js";import"./createLucideIcon-TEce3gz9.js";import"./chevron-right-CoSGuIfX.js";import"./Heading-CxhuX0Al.js";import"./FieldError-DUZ2Lyg_.js";import"./Text-C-O23Bwp.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
