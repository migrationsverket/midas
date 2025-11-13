import{$ as p,a as m,r as l,j as d}from"./iframe-CwELpm8M.js";import{C as n}from"./Calendar-DeegjETw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BeIa7iCm.js";import"./Button-sDGd8VvU.js";import"./utils-DK9hRE35.js";import"./clsx-B-dksMZM.js";import"./Hidden-D5d1b3lW.js";import"./useFocusRing-CwasRKhc.js";import"./index-CCt8ZrIH.js";import"./index-Bygjd08t.js";import"./useLabels-I-6zbtHM.js";import"./useButton-BRLQrzoM.js";import"./RSPContexts-CZlcr2p9.js";import"./Text-DYkkk1QK.js";import"./useDateFormatter-BMy2ABHI.js";import"./useControlledState-D5v3Kw8A.js";import"./useLocalizedStringFormatter-B76o2d2j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C6eVd4dx.js";import"./useEvent-DyvSleUX.js";import"./getScrollParent-DkQn_UqF.js";import"./scrollIntoView-CrUhpBNV.js";import"./useDescription-C9U_IM-m.js";import"./VisuallyHidden-ChMxCmPy.js";import"./clsx-Ciqy0D92.js";import"./Button-CUSbYPw5.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DWP8AM-1.js";import"./chevron-right-C-WZeTmE.js";import"./Heading-cNb5ch-4.js";import"./FieldError-BlDvxHZK.js";import"./Text-DWmt2BS8.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
