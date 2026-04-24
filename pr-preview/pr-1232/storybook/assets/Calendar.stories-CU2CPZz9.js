import{$ as c,a as m,r as l,j as d}from"./iframe-DOHhMkQY.js";import{C as n}from"./Calendar-BRkqYEg4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-nKEzjebX.js";import"./Button-BgxX3mlh.js";import"./utils-NiE-K3B6.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBYtsSM7.js";import"./useFocusRing-wtRS1Mc0.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./RSPContexts-Cdm3yX79.js";import"./Text-DSHHPLHE.js";import"./useDateFormatter-XDHw0Dx2.js";import"./useControlledState-DiXqzo5g.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B4iM7wiK.js";import"./useEvent-DtrFGaiZ.js";import"./getScrollParent-wRtd1GN9.js";import"./scrollIntoView-DebGkkw1.js";import"./useDescription-DUO7dbjU.js";import"./VisuallyHidden-DQY1cYBw.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cr0R6mj4.js";import"./createLucideIcon-B4Q-AngK.js";import"./chevron-right-CsRVpBcN.js";import"./Button-oYxwaeFk.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Heading-IvdKpjLL.js";import"./FieldError-BflqQ1hj.js";import"./Text-C8g4NeVM.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
