import{$ as c,a as m,r as l,j as d}from"./iframe-DbRIiPJf.js";import{C as n}from"./Calendar-ZgoGqmof.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DNa0FnyB.js";import"./Button-Bu-vq5J8.js";import"./utils-CylrHtqj.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLmG6Qjv.js";import"./useFocusRing-CzsT9eqz.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./RSPContexts-RxxWGpWl.js";import"./Text-Bl7omTF2.js";import"./useDateFormatter-B9Zey8Z-.js";import"./useControlledState-CkgwQtqz.js";import"./useLocalizedStringFormatter-BhEsaq13.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CH9ts1gJ.js";import"./useEvent-BDJFflUb.js";import"./getScrollParent-B52noiPs.js";import"./scrollIntoView-DyOkJKzq.js";import"./useDescription-o_hCOQgG.js";import"./VisuallyHidden-OjEI7nCv.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BqDwrOiu.js";import"./createLucideIcon-DWTxx8ko.js";import"./chevron-right-Cg4qiG8E.js";import"./Button-ClLfQI_I.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./Heading-VhFSBXsH.js";import"./FieldError-BlTKrD9e.js";import"./Text-BWzS2USX.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
