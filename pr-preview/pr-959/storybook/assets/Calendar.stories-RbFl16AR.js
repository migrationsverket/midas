import{$ as p,a as m,r as l,j as d}from"./iframe-CjAeaDoj.js";import{C as n}from"./Calendar-CQHPvAZA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CJrUloYY.js";import"./Button-wONZVWX8.js";import"./utils-jc2ODT2b.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9d7GvOT.js";import"./useFocusRing-DcmUcrOG.js";import"./index--UrAPuIg.js";import"./index-DGfG4UBj.js";import"./useLabels-DDebeywZ.js";import"./useButton-Du61CN-D.js";import"./RSPContexts-CO7jt-tM.js";import"./Text-ak_HQ3cz.js";import"./useDateFormatter-yhsCTkwm.js";import"./useControlledState-CAI5Jvzm.js";import"./useLocalizedStringFormatter-NLU3I9ax.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BWiUvb6f.js";import"./useEvent-DT9xauXj.js";import"./getScrollParent-Bjp-RnFa.js";import"./scrollIntoView-HODBzjwx.js";import"./useDescription-hq0ZkSSN.js";import"./VisuallyHidden-BjFsTXF_.js";import"./clsx-Ciqy0D92.js";import"./Button-ghJL-v_J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dnn0n8g2.js";import"./createLucideIcon-DHEkehRI.js";import"./chevron-right-FwLQXgJ9.js";import"./Heading-nl13gRrR.js";import"./FieldError-DlpJtGZw.js";import"./Text-DvSGG28f.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
