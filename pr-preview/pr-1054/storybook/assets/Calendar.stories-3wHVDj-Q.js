import{$ as c,a as m,r as l,j as d}from"./iframe-BJoNrLOB.js";import{C as n}from"./Calendar-Cj22Gxqs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DpD8TefS.js";import"./Button-BoY_ExKw.js";import"./utils-8eOeUZvs.js";import"./clsx-B-dksMZM.js";import"./Hidden-CN18PH3U.js";import"./useFocusRing-xf59S3G4.js";import"./index-TiYrZJQV.js";import"./index-BrwANR0V.js";import"./useLabels-Dsw7O8PH.js";import"./useButton-Dmh7lGXM.js";import"./RSPContexts-CCiC92U9.js";import"./Text-Nm20Pdh1.js";import"./useDateFormatter-CXyVrh_p.js";import"./useControlledState-DXjBUGo4.js";import"./useLocalizedStringFormatter-Ck15hl-3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsGHctbX.js";import"./useEvent-B_iQ0eAu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BwTDoIfu.js";import"./VisuallyHidden-Bokzl-n3.js";import"./clsx-Ciqy0D92.js";import"./Button-C_BpUAF5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-elsdN5ae.js";import"./createLucideIcon-BX3h9Owr.js";import"./chevron-left-DJprtOHx.js";import"./chevron-right-CoJFrVWL.js";import"./Heading-C7tT-cfJ.js";import"./FieldError-BeL_eVmM.js";import"./Text-CXbyhWc_.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
