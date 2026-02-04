import{$ as c,a as m,r as l,j as d}from"./iframe-Cs23SNnM.js";import{C as n}from"./Calendar-CwOVNZBB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D38JyVJU.js";import"./Button-CXOOs0ZW.js";import"./utils-C2_5pI3u.js";import"./clsx-B-dksMZM.js";import"./Hidden-lOkM-Rk2.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./RSPContexts-DaT_svkY.js";import"./Text-BDa847Zj.js";import"./useDateFormatter-Cy8kkX_h.js";import"./useControlledState-BY7I6-dG.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Brpp3OgC.js";import"./useEvent-DER49hg5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCoi52oS.js";import"./VisuallyHidden-BbktJI4p.js";import"./clsx-Ciqy0D92.js";import"./Button-BCDZMRqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./createLucideIcon-Cm58SIEr.js";import"./chevron-left-BC07UsiM.js";import"./chevron-right-3jX_qoin.js";import"./Heading-FizbWtiG.js";import"./FieldError-B4JZATSQ.js";import"./Text-CyM4GXds.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
