import{$ as c,a as m,r as l,j as d}from"./iframe-DFBAwU5t.js";import{C as n}from"./Calendar-BmKz7WPA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ByUfZ9ww.js";import"./Button-DwaTUIba.js";import"./utils-08_GEW0N.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtJEIX9A.js";import"./useFocusRing-B1-pNOdJ.js";import"./index-BvmdiSuy.js";import"./index-B5Eep4lh.js";import"./useLabels-VOQ-WGC9.js";import"./useButton-BgWyJ-L0.js";import"./RSPContexts-BfZYNY1M.js";import"./Text-CDXpFHUP.js";import"./useDateFormatter-CylHaw9F.js";import"./useControlledState-C4smYPng.js";import"./useLocalizedStringFormatter-D1JI22qo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-izL4IDCG.js";import"./useEvent-BmQdww5x.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BGbqDhE9.js";import"./VisuallyHidden-BEFipPde.js";import"./clsx-Ciqy0D92.js";import"./Button-BcXH9DHh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CG5pfhDM.js";import"./createLucideIcon-8UkP-gNy.js";import"./chevron-left-C45V5ov8.js";import"./chevron-right-DUi4N00r.js";import"./Heading-Bnfd32zh.js";import"./FieldError-Co7gTVHK.js";import"./Text-D767DiYA.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
