import{$ as c,a as m,r as l,j as d}from"./iframe-BBLpafwf.js";import{C as n}from"./Calendar-CLCNDWHm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CNHNrogK.js";import"./Button-Dw_yAd9_.js";import"./utils-BRp6xYAP.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOfZA5Lu.js";import"./useFocusRing-BBkgX1wP.js";import"./index-e8OPjBDY.js";import"./index-DI-_kXwT.js";import"./useLabels-Qhz8Dm5U.js";import"./useButton-DPuerBPE.js";import"./RSPContexts-D3LkOCyV.js";import"./Text-BYn86eAe.js";import"./useDateFormatter-IuBsxZ98.js";import"./useControlledState-CsxbOKlZ.js";import"./useLocalizedStringFormatter-B9BHTFqE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BuzJ6oQP.js";import"./useEvent-yqTNqBe0.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DYWxkH0Q.js";import"./VisuallyHidden-DuPFMQS_.js";import"./clsx-Ciqy0D92.js";import"./Button-BN6Xx9p1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6NC92a7V.js";import"./createLucideIcon-_MMWm-eO.js";import"./chevron-left-KFXNHNp6.js";import"./chevron-right-DlGoIkR6.js";import"./Heading-B2r7xaTF.js";import"./FieldError-D1_ZzpXP.js";import"./Text-BnZA8JI4.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
