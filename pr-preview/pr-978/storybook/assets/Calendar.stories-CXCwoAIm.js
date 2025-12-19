import{$ as c,a as m,r as l,j as d}from"./iframe-CORtWEK2.js";import{C as n}from"./Calendar-DDPuzU_N.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C2hQOfXt.js";import"./Button-BOa3LVx9.js";import"./utils-CbLqdw8D.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFmh2KXq.js";import"./useFocusRing-DAHXm3rF.js";import"./index-_3IIZhOl.js";import"./index-ghFCsy_t.js";import"./useLabels-CrPPDWzT.js";import"./useButton-C8e2jiOG.js";import"./RSPContexts-b-sJlq1-.js";import"./Text-D9pn1aDa.js";import"./useDateFormatter-JZdIUCBo.js";import"./useControlledState-CODWqK6W.js";import"./useLocalizedStringFormatter-D5B9Cm5e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DiWw984o.js";import"./useEvent-Bof3Tfds.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CDy7eaqv.js";import"./VisuallyHidden-Bgzwemdr.js";import"./clsx-Ciqy0D92.js";import"./Button-By3RYRvn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-1dyltKPK.js";import"./createLucideIcon-BjA-WVv0.js";import"./chevron-left-tIu15LFy.js";import"./chevron-right-Cz_-5mv5.js";import"./Heading-Cm3PwG0D.js";import"./FieldError-CbdqWLzS.js";import"./Text-qtQkisRI.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
