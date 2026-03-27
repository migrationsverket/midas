import{$ as c,a as m,r as l,j as d}from"./iframe-Csz20ARP.js";import{C as n}from"./Calendar-DjTCxkwX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B8Lisfnx.js";import"./Button-kUaaPtXV.js";import"./utils-CLTlmF8J.js";import"./clsx-B-dksMZM.js";import"./Hidden-Be3C43tB.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./RSPContexts-CleR7f2E.js";import"./Text-C-Hcl69m.js";import"./useDateFormatter-D8rWRYHK.js";import"./useControlledState-C0z1d-QQ.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dz_71V4R.js";import"./useEvent-BW8WGxtg.js";import"./getScrollParent-CETkwjQI.js";import"./scrollIntoView-CF0w4XnJ.js";import"./useDescription-D_Cu_EP8.js";import"./VisuallyHidden-D5NA-uw_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BrYAyrNj.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./chevron-right-CeKnVZpA.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Heading-C8B2tW6e.js";import"./FieldError-DCrfS5vQ.js";import"./Text--2gnQNTy.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
