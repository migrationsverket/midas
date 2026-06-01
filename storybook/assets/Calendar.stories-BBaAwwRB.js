import{$ as c,a as m,r as l,j as d}from"./iframe-t17oHKP1.js";import{C as n}from"./Calendar-DfNvOf14.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CWqCG1lD.js";import"./Button-ofA_m75k.js";import"./utils-WfSaqPxO.js";import"./clsx-B-dksMZM.js";import"./Hidden-XqahJ4vg.js";import"./useFocusRing-B8_h5nqb.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./RSPContexts-1krLgbtl.js";import"./Text-B1toI6NE.js";import"./useDateFormatter-CCxVsZgY.js";import"./useControlledState-CSsGgKlE.js";import"./useLocalizedStringFormatter-BD3aVe4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B9sfrpef.js";import"./useEvent-BXp6EVoR.js";import"./getScrollParent-KRPDa9Jf.js";import"./scrollIntoView-CjKzLxJO.js";import"./useDescription-DyoYJd2V.js";import"./VisuallyHidden-CHb87xmq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BbxasOcc.js";import"./createLucideIcon-Bh202RVf.js";import"./chevron-right-ZMBlddkb.js";import"./Button-DBP_DFRF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./Heading-CRmlVJHe.js";import"./FieldError-CjrPC_pn.js";import"./Text-BBzd2BqN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
