import{$ as p,a as m,r as l,j as d}from"./iframe-BYSujb5O.js";import{C as n}from"./Calendar-DEnDKyQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BFSTtgKP.js";import"./Button-CyeAVMHd.js";import"./utils-BpYtCIZa.js";import"./clsx-B-dksMZM.js";import"./Hidden-BljVQJbf.js";import"./useFocusRing-Cq6ZZkO6.js";import"./index-BTamtBiG.js";import"./index-BUtMmMz-.js";import"./useLabels-DVc_tfUB.js";import"./useButton-Bf-GHWc-.js";import"./RSPContexts-Ddiz57ni.js";import"./Text-DVuQNkTp.js";import"./useDateFormatter-BY4dQxys.js";import"./useControlledState-DjUFwNu-.js";import"./useLocalizedStringFormatter-Dpys6Wq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DJd9Nj8O.js";import"./useEvent-CkTHhyNW.js";import"./getScrollParent-Zzge8grx.js";import"./scrollIntoView-D9VdN5NR.js";import"./useDescription-5VSBaoAa.js";import"./VisuallyHidden-BK_XVg_7.js";import"./clsx-Ciqy0D92.js";import"./Button-B5_32c3T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-VLqr3pjp.js";import"./createLucideIcon-CFUgjHlc.js";import"./chevron-right-DLlAVySU.js";import"./Heading-B8mAIRB8.js";import"./FieldError-BlAjSjix.js";import"./Text-BXmZ9P-w.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
