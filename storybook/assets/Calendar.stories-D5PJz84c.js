import{$ as c,a as m,r as l,j as d}from"./iframe-ulpsKcT6.js";import{C as n}from"./Calendar-BZQwO4c3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPInRxNE.js";import"./Button-BwU617iF.js";import"./utils-wsoE-YNW.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdWVHvUH.js";import"./useFocusRing-uQD3awjb.js";import"./index-BsXSE8I4.js";import"./index-CMHJHtf7.js";import"./useLabels-DWWSSIyp.js";import"./useButton-Dd5iumUB.js";import"./RSPContexts-JveuaJOR.js";import"./Text-BD59FbNH.js";import"./useDateFormatter-DE1F_Rwz.js";import"./useControlledState-DiDj3wpx.js";import"./useLocalizedStringFormatter-Bcmhp4XT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DViiZDNp.js";import"./useEvent-CR-1WX1Q.js";import"./getScrollParent-Dm65XKk9.js";import"./scrollIntoView-75XzEUIn.js";import"./useDescription-BFyYIavq.js";import"./VisuallyHidden-81lySEYl.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DxHaAeFt.js";import"./createLucideIcon-B2ayFkn-.js";import"./chevron-right-CoMV2_T2.js";import"./Button-DwrmJOqW.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CL-EvLJE.js";import"./Heading-ByQKxrjH.js";import"./FieldError-X6YJI5lY.js";import"./Text-fcHQfrbB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
