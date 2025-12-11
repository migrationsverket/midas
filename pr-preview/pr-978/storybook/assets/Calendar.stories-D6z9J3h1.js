import{$ as c,a as m,r as l,j as d}from"./iframe-aZts9sTH.js";import{C as n}from"./Calendar-CsYU9uuq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VYMWGOuJ.js";import"./Button-DRPL95DZ.js";import"./utils-CluU2ngc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BI6nf7sE.js";import"./useFocusRing-BRQxC-Pn.js";import"./index-BtqyUEvJ.js";import"./index-BZUDR8KZ.js";import"./useLabels-Bi0kdcz9.js";import"./useButton-B4wgjHhf.js";import"./RSPContexts-DdRuYZUO.js";import"./Text-D3KoC4fT.js";import"./useDateFormatter-jGUQuAML.js";import"./useControlledState-BWJsClp4.js";import"./useLocalizedStringFormatter-DQv6nStV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CVQFqi9_.js";import"./useEvent-BhW_lhji.js";import"./getScrollParent-Bg93bK7j.js";import"./scrollIntoView-BTTXyCtL.js";import"./useDescription-C2-ZDTdq.js";import"./VisuallyHidden-CjGgagJb.js";import"./clsx-Ciqy0D92.js";import"./Button-Ba0mnMwa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Buplq2VU.js";import"./createLucideIcon-BCtVQ7cW.js";import"./chevron-left-D33vs4xx.js";import"./chevron-right-q8_9R46w.js";import"./Heading-C_7cPedE.js";import"./FieldError-FbBCy-EM.js";import"./Text-BFEuyFsz.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
