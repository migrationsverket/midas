import{$ as c,a as m,r as l,j as d}from"./iframe-CMe2wz4D.js";import{C as n}from"./Calendar-DOrLRtE5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CiLPYKjn.js";import"./Button-BuypZ7Sp.js";import"./utils-DJ_hucLj.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cq5lhTG-.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DN312JKd.js";import"./index-UTABmGgd.js";import"./index-DgLmdWsP.js";import"./useLabels-BVLipinj.js";import"./useButton-CdtNP3fm.js";import"./RSPContexts-roL6tJu5.js";import"./Text-DbDESw7Z.js";import"./useDateFormatter-94xCBFjL.js";import"./useControlledState-D13p9GBW.js";import"./useLocalizedStringFormatter-jsgjsUy3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1xkN5aE.js";import"./useEvent-cUwG2woL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-jTYbaPrg.js";import"./VisuallyHidden-BaQWCrYN.js";import"./clsx-Ciqy0D92.js";import"./Button-CDQv5njw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fpyssM3k.js";import"./createLucideIcon-Bteudlm4.js";import"./chevron-left-Czh1SeuM.js";import"./chevron-right-BZFjFyMW.js";import"./Heading-_-Lcq5Ed.js";import"./FieldError-CqK9CxSD.js";import"./Text-C6IcTtvN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
