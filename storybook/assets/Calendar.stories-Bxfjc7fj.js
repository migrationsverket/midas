import{$ as c,a as m,r as l,j as d}from"./iframe-BBdvX6q7.js";import{C as n}from"./Calendar-B8wsujX5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BxyANUWU.js";import"./Button-Dzf67HgD.js";import"./utils-BhM9cLZz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BOrCZM9C.js";import"./useFocusRing-CiIiFeie.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./RSPContexts-Dhr-dkrR.js";import"./Text-DFmdAipG.js";import"./useDateFormatter-B8IlqV17.js";import"./useControlledState-DuJYRQSo.js";import"./useLocalizedStringFormatter-Be9Ugeet.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaQOQKEs.js";import"./useEvent-ByURV-nf.js";import"./getScrollParent-Cpdl4rHQ.js";import"./scrollIntoView-VD24PgV1.js";import"./useDescription-CRjQLCoE.js";import"./VisuallyHidden-BUp-onp8.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CZ0MVusj.js";import"./createLucideIcon-Bf-KaMYu.js";import"./chevron-right-BlQTOaEW.js";import"./Button-DCS9i38V.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./Heading-CR2vJkXf.js";import"./FieldError-W4WIQ6PE.js";import"./Text-DZB5jszh.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
