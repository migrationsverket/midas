import{$ as c,a as m,r as l,j as d}from"./iframe-CG21FvLg.js";import{C as n}from"./Calendar-Dssi_SPs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bo0zynVV.js";import"./Button-eYd2LYW1.js";import"./utils-Dfpd-lDd.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHiBRU7w.js";import"./useFocusRing-UKlSaOwL.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./RSPContexts-bVWhtwKV.js";import"./Text-D17DsBlZ.js";import"./useDateFormatter-C4Yss46v.js";import"./useControlledState-py48MqsP.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxQssupH.js";import"./useEvent-DK1Ig8Tf.js";import"./getScrollParent-yFgCZLQn.js";import"./scrollIntoView-DbthYiWP.js";import"./useDescription-DzkVNNnf.js";import"./VisuallyHidden-B-Rie-TX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DDGQRP_8.js";import"./createLucideIcon-DIP5Ktet.js";import"./chevron-right-S5yN9k17.js";import"./Button-DTO_Qu1U.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Heading-Bl-bKlIC.js";import"./FieldError-D1k-tzt9.js";import"./Text-DYV6Mtqz.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
