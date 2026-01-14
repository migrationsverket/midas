import{$ as c,a as m,r as l,j as d}from"./iframe-BKHIzrax.js";import{C as n}from"./Calendar-5fWgsRQN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BHMt3uBv.js";import"./Button-tJyCLzUT.js";import"./utils-eagGX55s.js";import"./clsx-B-dksMZM.js";import"./Hidden-Uuem72q2.js";import"./useFocusRing-BQi4GTJZ.js";import"./index-DeiSO1eR.js";import"./index-BURsRzrN.js";import"./useLabels-BY9SCAZ0.js";import"./useButton-BjW1xepF.js";import"./RSPContexts-DS-_QmkS.js";import"./Text-BZIVr77b.js";import"./useDateFormatter-Dfb1mRFd.js";import"./useControlledState-jVzV3VRN.js";import"./useLocalizedStringFormatter-B5xALe7F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DIG8_WTt.js";import"./useEvent-BTVfo0Ca.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DorK6SQb.js";import"./VisuallyHidden-C3Qtj23X.js";import"./clsx-Ciqy0D92.js";import"./Button-D46_7az7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUZW3yS9.js";import"./createLucideIcon-DDmRbHsv.js";import"./chevron-left-BA24DFm1.js";import"./chevron-right-B8GFqptx.js";import"./Heading-DQMX8xDh.js";import"./FieldError-B8rlzmnF.js";import"./Text-B6QRIKA2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
