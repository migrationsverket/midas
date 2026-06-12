import{$ as c,a as m,r as l,j as d}from"./iframe-D6gs3wS5.js";import{C as n}from"./Calendar-dREZUJV2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CxTmLxOK.js";import"./Button-CbEqyxyu.js";import"./utils-DJQYVgmX.js";import"./clsx-B-dksMZM.js";import"./Hidden-Chxa0iBH.js";import"./useFocusRing-CFifySwi.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./RSPContexts-h4eiuWjg.js";import"./Text-BlJm85ZR.js";import"./useDateFormatter-DAtR8RRN.js";import"./useControlledState-CUa1KmDW.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1Ba2_Ek.js";import"./useEvent-BmTKd3HL.js";import"./getScrollParent-Do3-zmpB.js";import"./scrollIntoView-RTV5yabh.js";import"./useDescription-ChQWj-NI.js";import"./VisuallyHidden-DqFWHqpC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BwWEqZ_U.js";import"./createLucideIcon-Cx44WpFS.js";import"./chevron-right-D-Z8MXna.js";import"./Button-BVEXhnip.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./Heading-DzMuGclR.js";import"./FieldError-Bf6pWkxo.js";import"./Text-DqH78Bzr.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
