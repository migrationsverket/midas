import{$ as p,a as m,r as l,j as d}from"./iframe-9RZ8qS0V.js";import{C as n}from"./Calendar-By5VrN1y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bs6F-ugu.js";import"./Button-DwckI6V_.js";import"./utils-BWR78VZD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CoooHu5i.js";import"./useFocusRing-C1UymAdv.js";import"./index-DYDrgj8o.js";import"./index-DXKOmJXy.js";import"./useLabels-DYhyLCxD.js";import"./useButton-CvOgPonk.js";import"./RSPContexts-Ds-Tiy4a.js";import"./Text-DS83zdrx.js";import"./useDateFormatter-Bhr__ilE.js";import"./useControlledState-C698iD7f.js";import"./useLocalizedStringFormatter-BH65DG8h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cdlmg0Cj.js";import"./useEvent-eIh3SUOB.js";import"./getScrollParent-CTT2eo6L.js";import"./scrollIntoView-BjOYFxBk.js";import"./useDescription-QGCzoEz7.js";import"./VisuallyHidden-r7QMy6xC.js";import"./clsx-Ciqy0D92.js";import"./Button-_QzePwKA.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BtH6C6HU.js";import"./createLucideIcon-BEqaj3-I.js";import"./chevron-right-nur-u6_v.js";import"./Heading-Wtvegeka.js";import"./FieldError-CUjdzv4o.js";import"./Text-C5_vA2qs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
