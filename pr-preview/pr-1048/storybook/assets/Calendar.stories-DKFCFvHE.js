import{$ as c,a as m,r as l,j as d}from"./iframe-BOj75HPM.js";import{C as n}from"./Calendar-D5JcZIj2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DaHnaHZ9.js";import"./Button-D1stJH9t.js";import"./utils-DiwTvY5r.js";import"./clsx-B-dksMZM.js";import"./Hidden-DX_ysAyq.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./RSPContexts-Dd30z721.js";import"./Text-KcBRsMfX.js";import"./useDateFormatter-DuU06XLm.js";import"./useControlledState-7gBIOf2A.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B87Bnv_d.js";import"./useEvent-CEhlIHx6.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CWm0ggy2.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./clsx-Ciqy0D92.js";import"./Button-CG3q9yng.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./createLucideIcon-BmLW6X-c.js";import"./chevron-left-DJFANTsU.js";import"./chevron-right-BUUkrSiv.js";import"./Heading-j4po0ei9.js";import"./FieldError-Dn9sUL3A.js";import"./Text-y5UsFp3a.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
