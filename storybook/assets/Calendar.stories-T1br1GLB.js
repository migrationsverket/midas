import{$ as c,a as m,r as l,j as d}from"./iframe-BMx8CJ_s.js";import{C as n}from"./Calendar-BGTpnHnl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-RMdOxHKi.js";import"./Button-DAS2aWUT.js";import"./utils-mLbJG5lt.js";import"./clsx-B-dksMZM.js";import"./Hidden-bWwRORGP.js";import"./useFocusRing-C7jWGJZo.js";import"./index-BdeXmt1O.js";import"./index-2hUmUoIt.js";import"./useLabels-0a9zero9.js";import"./useButton-DYdnoqIL.js";import"./RSPContexts-1zG-hXcj.js";import"./Text-B5Nx5J8j.js";import"./useDateFormatter-DA0nj3BV.js";import"./useControlledState-CbJAHATE.js";import"./useLocalizedStringFormatter-BgZX5ldx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_9dEYeo.js";import"./useEvent-D46soD9Y.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-cKJ3yPgP.js";import"./VisuallyHidden-C38pbAG2.js";import"./clsx-Ciqy0D92.js";import"./Button-Cj8oElf-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CkXFCrEO.js";import"./createLucideIcon-BUxxpft6.js";import"./chevron-left-JzX7PznX.js";import"./chevron-right-DNNSaiWy.js";import"./Heading-UhgDl-sW.js";import"./FieldError-CIeNzIqM.js";import"./Text-Bta2s8Xv.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
