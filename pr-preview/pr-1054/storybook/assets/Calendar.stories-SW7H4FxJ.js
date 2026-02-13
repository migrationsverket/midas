import{$ as c,a as m,r as l,j as d}from"./iframe-BVjJh1qr.js";import{C as n}from"./Calendar-DbVccJKc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CS9JG_sz.js";import"./Button-BMjFxLp_.js";import"./utils-bNy6ojY5.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cb128-qJ.js";import"./useFocusRing-TW7q1EUd.js";import"./index-DIEHB-cs.js";import"./index-CNkeeaIr.js";import"./useLabels-Dp0cw4u-.js";import"./useButton-r4UQO9dh.js";import"./RSPContexts-4cSt6u6S.js";import"./Text-CsfvyS0Z.js";import"./useDateFormatter-DmuneVtq.js";import"./useControlledState-C9LVXWZ-.js";import"./useLocalizedStringFormatter-D4nGqZ_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-zOKT65gG.js";import"./useEvent-CcPYrnrS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-MeYAog7E.js";import"./VisuallyHidden-D-q2CDSj.js";import"./clsx-Ciqy0D92.js";import"./Button-Dg78q2ju.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9aLA_6i.js";import"./createLucideIcon-DI0VgPwY.js";import"./chevron-left-CS4wnPS0.js";import"./chevron-right-CkImHz9n.js";import"./Heading-6W50OjJi.js";import"./FieldError-C9WHVD5C.js";import"./Text-BB8xB_KG.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
