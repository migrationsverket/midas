import{$ as p,a as m,r as l,j as d}from"./iframe-CMtsh5Eh.js";import{C as n}from"./Calendar-BPtsgHmn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-MRPzauco.js";import"./Button-Ci2iUJ0f.js";import"./utils-VAsp_gKy.js";import"./clsx-B-dksMZM.js";import"./Hidden-CV6VXQ7p.js";import"./useFocusRing-B6bGNFeQ.js";import"./index-39OB84OG.js";import"./index-DyOrKDpA.js";import"./useLabels-BTto6oES.js";import"./useButton-BNNKUFuH.js";import"./RSPContexts-DR0SeAEq.js";import"./Text-BX-Y82iV.js";import"./useDateFormatter-Bg9048c2.js";import"./useControlledState-DLBojQJe.js";import"./useLocalizedStringFormatter-B1g8k-5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-VXW5SFkd.js";import"./useEvent-riGGv9T-.js";import"./getScrollParent-C1WRDsik.js";import"./scrollIntoView-DOcHuZnj.js";import"./useDescription-CUv_4czl.js";import"./VisuallyHidden-8XrnnDsa.js";import"./clsx-Ciqy0D92.js";import"./Button-DfH0lIm8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPQnGY0f.js";import"./createLucideIcon-DdaWlS2p.js";import"./chevron-right-BQd-faRw.js";import"./Heading-BiVI9BS6.js";import"./FieldError-DMgiPkwy.js";import"./Text-C7cHUgK0.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
