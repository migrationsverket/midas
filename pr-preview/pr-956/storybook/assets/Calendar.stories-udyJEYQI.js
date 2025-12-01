import{$ as p,a as m,r as l,j as d}from"./iframe-sg9dJLsH.js";import{C as n}from"./Calendar-DxUtWuOQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C9Q9t457.js";import"./Button-BKCBYEjA.js";import"./utils-CuYvAqJx.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxJfSG1h.js";import"./useFocusRing-CEQfJAUz.js";import"./index-Csa_AQe7.js";import"./index-6sLC6slB.js";import"./useLabels-Coj_Gh5d.js";import"./useButton-BnqHgeWw.js";import"./RSPContexts-CFIQgWNj.js";import"./Text-1XpSl3_S.js";import"./useDateFormatter-0fO65jJQ.js";import"./useControlledState-gOtQm8WB.js";import"./useLocalizedStringFormatter-mDQ95DtQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CT1HW2oS.js";import"./useEvent-CrKV8Qc1.js";import"./getScrollParent-CyzZu9IT.js";import"./scrollIntoView-BLU2Y2Qy.js";import"./useDescription-BlZdZ_En.js";import"./VisuallyHidden-BZkmQQPq.js";import"./clsx-Ciqy0D92.js";import"./Button-B-3midel.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-oI-bADgc.js";import"./createLucideIcon-CR8l7k0W.js";import"./chevron-right-iJbIVvuo.js";import"./Heading-CotChgLt.js";import"./FieldError-BrQNt60r.js";import"./Text-qPBHnq8h.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
