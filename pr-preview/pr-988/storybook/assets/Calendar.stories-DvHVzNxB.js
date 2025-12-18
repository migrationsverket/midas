import{$ as p,a as m,r as l,j as d}from"./iframe-SsTP6rfd.js";import{C as n}from"./Calendar-VtYioCku.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3gdM1V_.js";import"./Button-eerNJBVZ.js";import"./utils-xovjPneb.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFG7p1De.js";import"./useFocusRing-CLCXPOxW.js";import"./index-Bcr6E3JC.js";import"./index-LQvR83KO.js";import"./useLabels-CRKcuuZE.js";import"./useButton-BoBFAXLN.js";import"./RSPContexts-2kwram0O.js";import"./Text-BUE0kzAW.js";import"./useDateFormatter-BKEjqs03.js";import"./useControlledState-BXOXeEl0.js";import"./useLocalizedStringFormatter-DeNsFJ4P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BiWZPVMm.js";import"./useEvent-BTT-Ciqv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cc-NjIDj.js";import"./VisuallyHidden-CwQb82jS.js";import"./clsx-Ciqy0D92.js";import"./Button-Bb1EL28B.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9q4ftJk.js";import"./createLucideIcon-B4PKFn84.js";import"./chevron-right-BWJnXSrs.js";import"./Heading-Bb6ZtnB2.js";import"./FieldError-aNZ3_Z4n.js";import"./Text-BYhtQlzN.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
