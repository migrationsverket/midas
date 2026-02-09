import{$ as c,a as m,r as l,j as d}from"./iframe-DOXdiU66.js";import{C as n}from"./Calendar-DOltk2WS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CcpG-JJB.js";import"./Button-DcU_sKA3.js";import"./utils-CmnmUlXv.js";import"./clsx-B-dksMZM.js";import"./Hidden-TB3BoZiq.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./RSPContexts-DC30gU2X.js";import"./Text-gQE2jOxd.js";import"./useDateFormatter-3Ep_0Dnm.js";import"./useControlledState-CJroEoWv.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BmCQhS4v.js";import"./useEvent-D7Unhy1s.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Czop0qa_.js";import"./VisuallyHidden-1ky1b9n5.js";import"./clsx-Ciqy0D92.js";import"./Button-CXH-q602.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./createLucideIcon-CTd9hGNC.js";import"./chevron-left-DXc28X24.js";import"./chevron-right-CLgAlS0z.js";import"./Heading-BnPWYYa9.js";import"./FieldError-DkJbgax8.js";import"./Text-O51bLbCJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
