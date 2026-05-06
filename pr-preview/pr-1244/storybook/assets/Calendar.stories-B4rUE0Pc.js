import{$ as c,a as m,r as l,j as d}from"./iframe-UnOrZDCo.js";import{C as n}from"./Calendar-BVR8U3Mi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CpFIy1xU.js";import"./Button-Bxrzo9c5.js";import"./utils-DKy0aGzr.js";import"./clsx-B-dksMZM.js";import"./Hidden-BgWTJ4vd.js";import"./useFocusRing-Bp9IxzZX.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./RSPContexts-B4tPHjXP.js";import"./Text-C6YEGwEA.js";import"./useDateFormatter-CtyKUHBY.js";import"./useControlledState-DgxohqQv.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-De277vo8.js";import"./useEvent-C-gMyQkY.js";import"./getScrollParent-BhH05UgX.js";import"./scrollIntoView-D4-k8RNQ.js";import"./useDescription-CDMg63Ol.js";import"./VisuallyHidden-ulNGrwFD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CfhvAe1X.js";import"./createLucideIcon-A1bnhQ0L.js";import"./chevron-right-BMy5CK_x.js";import"./Button-DZKUgycP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Heading-ewwk1_qY.js";import"./FieldError-BTGqp3OT.js";import"./Text-BkvdwtUJ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
