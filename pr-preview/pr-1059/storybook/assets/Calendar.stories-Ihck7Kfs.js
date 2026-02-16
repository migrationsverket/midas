import{$ as c,a as m,r as l,j as d}from"./iframe-CgVDPXCW.js";import{C as n}from"./Calendar-BQd23aPb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-tU_EJ7V5.js";import"./Button-CQnF2GG8.js";import"./utils-DcVVHZ67.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXNfA9DQ.js";import"./useFocusRing-DNBotD7g.js";import"./index-DvqiEU7D.js";import"./index-KB8h2jjm.js";import"./useLabels-BHxP37I4.js";import"./useButton-BWlYYLVQ.js";import"./RSPContexts-4u-QqjZM.js";import"./Text-By5oRQCE.js";import"./useDateFormatter-D39omgK3.js";import"./useControlledState-CaasPkxS.js";import"./useLocalizedStringFormatter-D49bO5T8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-pVd9Sb2a.js";import"./useEvent-D87hVJVV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-gbmfQOlg.js";import"./VisuallyHidden-Ded5YgLE.js";import"./clsx-Ciqy0D92.js";import"./Button-D1lh8tZn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-als5sVnS.js";import"./createLucideIcon-xwY9ORJx.js";import"./chevron-left-Fsqm0ok1.js";import"./chevron-right-CK4bRPZ9.js";import"./Heading-BaeXS2ez.js";import"./FieldError-BON66wFU.js";import"./Text-C_oGJ_xm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
