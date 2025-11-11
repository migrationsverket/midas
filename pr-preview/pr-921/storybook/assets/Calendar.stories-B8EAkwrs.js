import{$ as p,a as m,r as l,j as d}from"./iframe-DDwyaC3F.js";import{C as n}from"./Calendar-DQ4OM2Vi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-f07aZwq_.js";import"./Button-BtXqPxzk.js";import"./utils-CG7wrpEM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaIlUqSr.js";import"./useFocusRing-Bm3xvvdx.js";import"./index-C4cW3woH.js";import"./index-D60FYBt-.js";import"./useLabels-CmG6mFoO.js";import"./useButton-BKHlIL54.js";import"./RSPContexts-Di60wf4a.js";import"./Text-CYUYSho0.js";import"./useDateFormatter-BE4374TZ.js";import"./useControlledState-BdO3bj3v.js";import"./useLocalizedStringFormatter-DwgqBF71.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BT0a9C8-.js";import"./useEvent-BPpfuXgh.js";import"./getScrollParent-B3K0PCoV.js";import"./scrollIntoView-BJcQ7yQY.js";import"./useDescription-CDZMnnUE.js";import"./VisuallyHidden-CxZomHPO.js";import"./clsx-Ciqy0D92.js";import"./Button-CWPbBUMn.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BSGS7U9b.js";import"./chevron-right-Ct-BOveR.js";import"./Heading-CklBL13z.js";import"./FieldError-k6Nd64zn.js";import"./Text-NydOqzpP.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
