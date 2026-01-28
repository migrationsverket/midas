import{$ as c,a as m,r as l,j as d}from"./iframe-CiqJOzxF.js";import{C as n}from"./Calendar-Bsjj8V-g.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oorK_NYZ.js";import"./Button-BXds3-7Z.js";import"./utils-0GsTBzJl.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFvcIHES.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./RSPContexts-C0dEMWbh.js";import"./Text-Ch9Sljly.js";import"./useDateFormatter-B65UjEgU.js";import"./useControlledState-B5UnhFwk.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DWMgmur7.js";import"./useEvent-lRnGMY-c.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CTOINnPD.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./clsx-Ciqy0D92.js";import"./Button-CxRmwJHW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./createLucideIcon-DT02zB1r.js";import"./chevron-left-CemUeiAk.js";import"./chevron-right-Dga50akl.js";import"./Heading-RSqUFAKa.js";import"./FieldError-CwZpQUJo.js";import"./Text-Dn4hqnjy.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
