import{$ as c,a as m,r as l,j as d}from"./iframe-QHZf_0KR.js";import{C as n}from"./Calendar-C7ucW-qV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D32QVWlQ.js";import"./Button-f4n0U-wU.js";import"./utils-DMdfkNzG.js";import"./clsx-B-dksMZM.js";import"./Hidden-nvOr4Cn2.js";import"./useFocusRing-ClHcu_zQ.js";import"./index-CHGNqM_2.js";import"./index-xKnCm_n3.js";import"./useLabels-D7QHi2xh.js";import"./useButton-3BOwEEH4.js";import"./RSPContexts-Bcx0Nn0O.js";import"./Text-DKbBjvoe.js";import"./useDateFormatter-DLDr1Pw9.js";import"./useControlledState-pIXeoVBI.js";import"./useLocalizedStringFormatter-GxiQzKTn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-kjQx_eht.js";import"./useEvent-CsAl9Ry7.js";import"./getScrollParent-BL3CA0PQ.js";import"./scrollIntoView-CWY7HxDb.js";import"./useDescription-BeJE8Y-1.js";import"./VisuallyHidden-DFyPHr9C.js";import"./clsx-Ciqy0D92.js";import"./Button-mxQSmzlb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDkPYuns.js";import"./createLucideIcon-BceMF_ih.js";import"./chevron-left-BgGQyD0-.js";import"./chevron-right-BWKj4OAf.js";import"./Heading-DhUF6nKg.js";import"./FieldError-kIYsyYtJ.js";import"./Text-DUZE8-2g.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
