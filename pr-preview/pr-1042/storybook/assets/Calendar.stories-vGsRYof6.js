import{$ as c,a as m,r as l,j as d}from"./iframe-DTLJLCqo.js";import{C as n}from"./Calendar-B_jYaxDM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DnwYwzRh.js";import"./Button-DLbZMMBE.js";import"./utils-aQAqN8gs.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ba9IdiNq.js";import"./useFocusRing-CCXTTGcy.js";import"./index-R7zWEzuw.js";import"./index-DWROMjn1.js";import"./useLabels-C_LVKDoo.js";import"./useButton-Dm0JCrG-.js";import"./RSPContexts-C0vMLaLM.js";import"./Text-BVi5Ej-u.js";import"./useDateFormatter-Dsde589R.js";import"./useControlledState-D7_B-bjt.js";import"./useLocalizedStringFormatter-Cpm5l6p9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B8EAwBZf.js";import"./useEvent-DuEmEayB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D_-VTjQ7.js";import"./VisuallyHidden-Cr5LwEwU.js";import"./clsx-Ciqy0D92.js";import"./Button-wjvYMOzu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNlIS9z.js";import"./createLucideIcon-ZFlUY_RU.js";import"./chevron-left-CZcOS1dG.js";import"./chevron-right-B3fPuKyv.js";import"./Heading-Bc1LbtIk.js";import"./FieldError-CveCLVTj.js";import"./Text-VQywqbiS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
