import{$ as c,a as m,r as l,j as d}from"./iframe-CS97_aKA.js";import{C as n}from"./Calendar-zIAjHmk8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BUEtNB9i.js";import"./Button-BEBLvHt_.js";import"./utils-Csn9hih_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZHel-hh.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./RSPContexts-CFWUJItL.js";import"./Text-DllmWVRt.js";import"./useDateFormatter-C6161Uj6.js";import"./useControlledState-DJ6meZbb.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRa_aiQE.js";import"./useEvent-D0H0aX9U.js";import"./getScrollParent-BvsZnnQg.js";import"./scrollIntoView-BRhOFysU.js";import"./useDescription-ChcQRQvy.js";import"./VisuallyHidden-XYRUvUKq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D8tHN4LO.js";import"./createLucideIcon-CpkX-fVF.js";import"./chevron-right-BYJ0ejPD.js";import"./Button-BxQXJJlf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./Heading-9Vi9Qzh3.js";import"./FieldError-Bgv3wgUX.js";import"./Text-BsEp3Lpg.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
