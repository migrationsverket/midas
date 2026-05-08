import{$ as c,a as m,r as l,j as d}from"./iframe-u1Lp3cWH.js";import{C as n}from"./Calendar-DNBWyqww.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D58xllN7.js";import"./Button-YBWgb3jY.js";import"./utils-Gcf78cCr.js";import"./clsx-B-dksMZM.js";import"./Hidden-C90fOqUW.js";import"./useFocusRing-Bt9lRSbz.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./RSPContexts-DkuerkqF.js";import"./Text-DNrFEZpf.js";import"./useDateFormatter-db2P0ZjF.js";import"./useControlledState-Dq3PeISU.js";import"./useLocalizedStringFormatter-BuqYPbAV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DdPRK9oc.js";import"./useEvent-Bs3S41aN.js";import"./getScrollParent-dU7UAF5-.js";import"./scrollIntoView-i7bgZAzR.js";import"./useDescription-2tob2pF0.js";import"./VisuallyHidden-D7l7xynE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DKyx_2cc.js";import"./createLucideIcon-DswZ9rJ-.js";import"./chevron-right-D46uzLpP.js";import"./Button-CeEdTiGh.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./Heading-D_cJLnK6.js";import"./FieldError-D-oYDuTv.js";import"./Text-slIPEHAS.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
