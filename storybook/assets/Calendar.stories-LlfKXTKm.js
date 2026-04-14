import{$ as c,a as m,r as l,j as d}from"./iframe-4ooqBbUt.js";import{C as n}from"./Calendar-zLFrrJkc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-FqYPzA72.js";import"./Button-BBwvVA_R.js";import"./utils-DLRtaVYJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-JrM4togE.js";import"./useFocusRing-x4N4w9bu.js";import"./index-CUG0QuFy.js";import"./index-BsCB03x8.js";import"./useLabel-pwrXaBmf.js";import"./useLabels-BKydU-se.js";import"./useButton-XyhjWgk6.js";import"./RSPContexts-CCn7iKWs.js";import"./Text-DrGdlSGk.js";import"./useDateFormatter-DaROSuzH.js";import"./useControlledState-BAx2qeOY.js";import"./useLocalizedStringFormatter-CMLnWTsm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DbiDyyQc.js";import"./useEvent-C_i09VmA.js";import"./getScrollParent-CQlmigTk.js";import"./scrollIntoView-BOZ86Y2T.js";import"./useDescription-BHrIGgoU.js";import"./VisuallyHidden-D6FSL6iG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CGYEAkn7.js";import"./createLucideIcon-BAeES33l.js";import"./chevron-right-D2v7bzw-.js";import"./Button-BKg5QkG5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DmSeN8hT.js";import"./Heading-CDwsjuh5.js";import"./FieldError-B6PivCC-.js";import"./Text-2ah8hSkI.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
