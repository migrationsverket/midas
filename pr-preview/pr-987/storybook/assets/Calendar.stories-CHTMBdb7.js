import{$ as p,a as m,r as l,j as d}from"./iframe-DNSuz1-z.js";import{C as n}from"./Calendar-BQTPUaMa.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-f22tMa35.js";import"./Button-DtVXVv9R.js";import"./utils-PWJx94Jg.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSZDj00d.js";import"./useFocusRing-DUN10oBW.js";import"./index-BHGRei_I.js";import"./index-BmgHOxqv.js";import"./useLabels-CD6nZf4Z.js";import"./useButton-BSiP3QIo.js";import"./RSPContexts-CjMSUyUj.js";import"./Text-C9PGpQAM.js";import"./useDateFormatter-7DQ10CoI.js";import"./useControlledState-AJWx4Vsn.js";import"./useLocalizedStringFormatter-Do-JPHcC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DuuCxycE.js";import"./useEvent-HiduJm6A.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CNanPpTn.js";import"./VisuallyHidden-Bq8UzE34.js";import"./clsx-Ciqy0D92.js";import"./Button-BhefvJ15.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-frXD4KIA.js";import"./createLucideIcon-BPVi4m_L.js";import"./chevron-right-C8EYQ5OX.js";import"./Heading-H63OvNx-.js";import"./FieldError-CY9cNXad.js";import"./Text-CWb4M76d.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
