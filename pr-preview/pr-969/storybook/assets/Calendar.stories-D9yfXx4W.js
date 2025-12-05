import{$ as p,a as m,r as l,j as d}from"./iframe-CupcEORL.js";import{C as n}from"./Calendar-DlyPC4wW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DWF5GjPm.js";import"./Button-BjFe8Qxa.js";import"./utils-CzdJImXC.js";import"./clsx-B-dksMZM.js";import"./Hidden-f6WbCn28.js";import"./useFocusRing-B933qwOx.js";import"./index-BNnNq99L.js";import"./index-CDGQedl9.js";import"./useLabels-DCXSlQiV.js";import"./useButton-BK9ob62y.js";import"./RSPContexts-DlAbhQ-j.js";import"./Text-BzTzEwa_.js";import"./useDateFormatter-BMna47Tw.js";import"./useControlledState-BAOEk3qi.js";import"./useLocalizedStringFormatter-BFlI89gI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Boaw8X9S.js";import"./useEvent-BaUhd_FK.js";import"./getScrollParent-Dw-q-NMY.js";import"./scrollIntoView-Bovkd6w4.js";import"./useDescription-DEfOZN_U.js";import"./VisuallyHidden-DPMP7RQx.js";import"./clsx-Ciqy0D92.js";import"./Button-B1rt2puZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKuOwoBy.js";import"./createLucideIcon-CXb3IT7f.js";import"./chevron-right-D0Efm0N0.js";import"./Heading-APdHuM_S.js";import"./FieldError-CNSUQM04.js";import"./Text-FnTIT6A7.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
