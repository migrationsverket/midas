import{$ as c,a as m,r as l,j as d}from"./iframe-Bf2O8mTA.js";import{C as n}from"./Calendar-aaukupU5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5G3n5zs.js";import"./Button-rJBUL80Z.js";import"./utils-DvWeM8bD.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bayn64y7.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./RSPContexts-hwAw1TwI.js";import"./Text-Br20EZ_Y.js";import"./useDateFormatter-qJQFV9Ua.js";import"./useControlledState-B4kZCJVJ.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7MSZtHN.js";import"./useEvent-BtnAi-yB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dq7jvEgt.js";import"./VisuallyHidden-BdseXYtF.js";import"./clsx-Ciqy0D92.js";import"./Button-DqEB6TwE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./createLucideIcon-DkEcA7M8.js";import"./chevron-left-BcR2dhrI.js";import"./chevron-right-C9_iudD6.js";import"./Heading-Dv8-19Cj.js";import"./FieldError-DmoCXSDp.js";import"./Text-C9gRZFsm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
