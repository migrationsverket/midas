import{$ as p,a as m,r as l,j as d}from"./iframe-CCMGVGRR.js";import{C as n}from"./Calendar-uIXf5k5C.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-C_ve4WM5.js";import"./Button-BTioCIMN.js";import"./utils-CwTBQPYQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-eOXH6NuV.js";import"./useFocusRing-4nh_xN_C.js";import"./index-BpVA6GFa.js";import"./index-DuUWKZbo.js";import"./useLabels-DwvJ4AsJ.js";import"./useButton-DXzhQe-S.js";import"./RSPContexts-D6gxgGOj.js";import"./Text-DiHmm5Pv.js";import"./useDateFormatter-C-FfedCH.js";import"./useControlledState-BSOETMpm.js";import"./useLocalizedStringFormatter-DNuEa-zK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ByT6ptBr.js";import"./useEvent-z_NHm0bM.js";import"./getScrollParent-CGFvIYjM.js";import"./scrollIntoView-Ccnc1JTb.js";import"./useDescription-CYVlcFrO.js";import"./VisuallyHidden-BaceOK9t.js";import"./clsx-Ciqy0D92.js";import"./Button-BWDJLAAo.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-eJfvaVUR.js";import"./chevron-right-dj9DiKtt.js";import"./Heading-3-vD8cVw.js";import"./FieldError-Badiw3DZ.js";import"./Text-Cca6IUbd.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
