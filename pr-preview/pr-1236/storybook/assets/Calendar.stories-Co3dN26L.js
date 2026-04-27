import{$ as c,a as m,r as l,j as d}from"./iframe-BiQ8HasD.js";import{C as n}from"./Calendar-DX46owB7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-m2IJbq37.js";import"./Button-DOF2Ijgw.js";import"./utils-HJUYK1j_.js";import"./clsx-B-dksMZM.js";import"./Hidden-DEdvWcqT.js";import"./useFocusRing-Dh9TFhU0.js";import"./index-CxCqsVJY.js";import"./index-B9ZJX168.js";import"./useLabel-8IgHcDVM.js";import"./useLabels-H9owUaj8.js";import"./useButton-BbHDi8ZV.js";import"./RSPContexts-CmmbFvVN.js";import"./Text-DGK2Zvf0.js";import"./useDateFormatter-CTOgjBPW.js";import"./useControlledState-DOzruH4H.js";import"./useLocalizedStringFormatter-CembVOjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DmB7HlV7.js";import"./useEvent-Ym0ZfLi1.js";import"./getScrollParent-BcnQWZnN.js";import"./scrollIntoView-rDKecejh.js";import"./useDescription-Crs7vcLi.js";import"./VisuallyHidden-iHVSgYDu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BLgd4Z0u.js";import"./createLucideIcon-Dn_efDgc.js";import"./chevron-right-BEOOVglT.js";import"./Button-CBosCwI1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CgDdVzRk.js";import"./Heading-BezJITJT.js";import"./FieldError-jePN0XGs.js";import"./Text-BdITZZNK.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
