import{$ as p,a as m,r as l,j as d}from"./iframe-B9CbKHGE.js";import{C as n}from"./Calendar-CSQghF_l.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BsAR_KqA.js";import"./Button-tz7DeUoI.js";import"./utils-K9L8fRbA.js";import"./clsx-B-dksMZM.js";import"./Hidden-ClX2UHum.js";import"./useFocusRing-CBu2b3uq.js";import"./index-D5s799IP.js";import"./index-3OBlmlSu.js";import"./useLabels-WgVeJXWf.js";import"./useButton-VOsfFyV1.js";import"./RSPContexts-C_bYlfwA.js";import"./Text-1lqNbJaj.js";import"./useDateFormatter-ualbMBm2.js";import"./useControlledState-ByniTdhP.js";import"./useLocalizedStringFormatter-BWhJ6dKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dwhxk59-.js";import"./useEvent-Cj0fD01V.js";import"./getScrollParent-yUahS7B2.js";import"./scrollIntoView-BJ8zIGQv.js";import"./useDescription-luHQMLQs.js";import"./VisuallyHidden-aiSUNim6.js";import"./clsx-Ciqy0D92.js";import"./Button-Duhp4qTZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2z6zT5P.js";import"./createLucideIcon-u9SLDbD-.js";import"./chevron-right-CJfJD7Pl.js";import"./Heading-r_lpbDZf.js";import"./FieldError-tIBg00I2.js";import"./Text-BZziZ39V.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
