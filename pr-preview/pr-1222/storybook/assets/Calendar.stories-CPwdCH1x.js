import{$ as c,a as m,r as l,j as d}from"./iframe-BTaDbuxu.js";import{C as n}from"./Calendar-CEkFo7K7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Qq2eglt1.js";import"./Button-V9h2N0md.js";import"./utils-1uCA-_jS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHaMiUFe.js";import"./useFocusRing-BHhR7R8K.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./RSPContexts-BHVdxW7V.js";import"./Text-DMH4kU1u.js";import"./useDateFormatter-BoWU37h7.js";import"./useControlledState-CpRYTvJt.js";import"./useLocalizedStringFormatter-XUeJ46d1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DUYs8y4H.js";import"./useEvent-DlwZgChj.js";import"./getScrollParent-D2rHfLmL.js";import"./scrollIntoView-BMucG0RA.js";import"./useDescription-DJkbGKg1.js";import"./VisuallyHidden-CqahcWwX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-qW4fzUuu.js";import"./createLucideIcon-B7TgxeN_.js";import"./chevron-right-XOzDStrV.js";import"./Button-Cy0fOhbL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./Heading-Bly3ER8A.js";import"./FieldError-BSmb6mHx.js";import"./Text-BgkGdlQT.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
