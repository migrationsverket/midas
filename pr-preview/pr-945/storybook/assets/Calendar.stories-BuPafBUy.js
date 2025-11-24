import{$ as p,a as m,r as l,j as d}from"./iframe-qwwZM-tE.js";import{C as n}from"./Calendar-DPi4bgl9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BJYj_-wo.js";import"./Button-LMtqtR6P.js";import"./utils-CE0AWIm4.js";import"./clsx-B-dksMZM.js";import"./Hidden-nIEH3jLZ.js";import"./useFocusRing-DVEbG0UH.js";import"./index-CUgyb0mk.js";import"./index-B0QkTLut.js";import"./useLabels-ygVPKbju.js";import"./useButton-BG0hBHNu.js";import"./RSPContexts-DxRUGpXJ.js";import"./Text-CjDFFRcJ.js";import"./useDateFormatter-DHi1ckVA.js";import"./useControlledState-B1hjZKLN.js";import"./useLocalizedStringFormatter-C0HEB4Rj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C27Mo3WX.js";import"./useEvent-BKT-lAgU.js";import"./getScrollParent-vP69cu3n.js";import"./scrollIntoView-D6_LqhvJ.js";import"./useDescription-txzcDlxe.js";import"./VisuallyHidden-DuWmqszT.js";import"./clsx-Ciqy0D92.js";import"./Button-D_l512WF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BG4Ct8V8.js";import"./createLucideIcon-DdrXPP-v.js";import"./chevron-right-DTQ4weG5.js";import"./Heading-DtQJHb5j.js";import"./FieldError-C6s0Sgvs.js";import"./Text-C5yJLujA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
