import{$ as c,a as m,r as l,j as d}from"./iframe-D83U9Jbw.js";import{C as n}from"./Calendar-9koPyvmK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CSRa8d2m.js";import"./Button-u3kjlioi.js";import"./utils-C_gFKVIz.js";import"./clsx-B-dksMZM.js";import"./Hidden-C0_hFnsL.js";import"./useFocusRing-Dv4ce94Y.js";import"./index-WtMp4oUJ.js";import"./index-B1HH0YAv.js";import"./useLabel-Bzi_sPr8.js";import"./useLabels-DObCV9cv.js";import"./useButton-CLqFKr2I.js";import"./RSPContexts-ChOs0gX9.js";import"./Text-BuTxUZYo.js";import"./useDateFormatter-fX6tUv-2.js";import"./useControlledState-DDqmXAM3.js";import"./useLocalizedStringFormatter-C9FHlYP_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DbIcsTzQ.js";import"./useEvent-CpjHCQK_.js";import"./getScrollParent-DQrxFRpX.js";import"./scrollIntoView-VfHWbuBY.js";import"./useDescription-CVN4gXFi.js";import"./VisuallyHidden-DuKcmmSu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DUavAS7H.js";import"./createLucideIcon-c1bwsPcC.js";import"./chevron-right-CWnsp3vZ.js";import"./Button-ayYEduOo.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CPm18cyu.js";import"./Heading-DRQ0iyab.js";import"./FieldError-D6NpRoO1.js";import"./Text-CHHIfo1k.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
