import{$ as c,a as m,r as l,j as d}from"./iframe-Fz1EdHuH.js";import{C as n}from"./Calendar-C3k44mh5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cs2bl60L.js";import"./Button-CBPVsTrf.js";import"./utils-CIhB6G_D.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTN0SI0L.js";import"./useFocusRing-qf5ZtGZP.js";import"./index-CW1yTPdq.js";import"./index-BLs35tAN.js";import"./useLabels-BFFI0pNC.js";import"./useButton-DwegKwQx.js";import"./RSPContexts-CKI4o4tn.js";import"./Text-DNv-3svf.js";import"./useDateFormatter-CoGtBaJm.js";import"./useControlledState-B4oYVFVf.js";import"./useLocalizedStringFormatter-D7aFKFSJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-f_bp5XXQ.js";import"./useEvent-Bi8gGKcE.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BZIgoWp4.js";import"./VisuallyHidden-DdITmKv1.js";import"./clsx-Ciqy0D92.js";import"./Button-DNGuSXTP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Biv9Lv2v.js";import"./createLucideIcon-B2CroOQB.js";import"./chevron-left-CuCL2VRn.js";import"./chevron-right-CjpLwIJK.js";import"./Heading-Qs14-auE.js";import"./FieldError-CiywgrQY.js";import"./Text-DoqQ8nHE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
