import{$ as c,a as m,r as l,j as d}from"./iframe-CxkETeDd.js";import{C as n}from"./Calendar-Dvj_uD3p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-_TV8aKYC.js";import"./Button-M5zQwREp.js";import"./utils-GlStkLEJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKsesGiK.js";import"./useFocusRing-Do0yfzWS.js";import"./index-BSb6ZrfR.js";import"./index-nMmCh7nR.js";import"./useLabel-BO_xYu1i.js";import"./useLabels-DaC1eol5.js";import"./useButton-DENm16UC.js";import"./RSPContexts-DsMbIQ4H.js";import"./Text-CjYtEiaz.js";import"./useDateFormatter-CQ7ZKDgr.js";import"./useControlledState-Cqnjl-Rp.js";import"./useLocalizedStringFormatter-C1sxkLmf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-lLEmAG5o.js";import"./useEvent-B-R-vhKv.js";import"./getScrollParent-DI7tR_KK.js";import"./scrollIntoView-B-8yvJ9-.js";import"./useDescription-UrQ-w2r3.js";import"./VisuallyHidden-BFccnY_O.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DFURbm0E.js";import"./createLucideIcon-C0eB9KvK.js";import"./chevron-right-DqSkqrle.js";import"./Button-CKmKD5ej.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-53dmxcXe.js";import"./Heading-D2cu-wg0.js";import"./FieldError-BWtspna3.js";import"./Text-BAZIzjwA.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
