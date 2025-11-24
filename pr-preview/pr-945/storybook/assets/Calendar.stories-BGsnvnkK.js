import{$ as p,a as m,r as l,j as d}from"./iframe-Cur_B9x6.js";import{C as n}from"./Calendar-B7rc1hoG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CbTTODcU.js";import"./Button-BeG5EWPQ.js";import"./utils-BHg8G-Z9.js";import"./clsx-B-dksMZM.js";import"./Hidden-SFeirINQ.js";import"./useFocusRing-CRuZSqUo.js";import"./index-CTduu0cI.js";import"./index-CqyIpgV0.js";import"./useLabels-iG7AllCV.js";import"./useButton-DpJaITZj.js";import"./RSPContexts-Cyp8LEBH.js";import"./Text-QTfkrrvd.js";import"./useDateFormatter-Cfzd2o1r.js";import"./useControlledState-DxtyO0YE.js";import"./useLocalizedStringFormatter-bd-N5t6G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-COeX0nxJ.js";import"./useEvent-Clrc5ouE.js";import"./getScrollParent-C9gbFImE.js";import"./scrollIntoView-CsmGj11v.js";import"./useDescription-C3Xbbjp6.js";import"./VisuallyHidden-CNgGjdlH.js";import"./clsx-Ciqy0D92.js";import"./Button-D0lF0KE2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CIxK5Ezl.js";import"./createLucideIcon-PM3bnbfq.js";import"./chevron-right-CZY9VcpI.js";import"./Heading-CcG3dCOs.js";import"./FieldError-DnpHL-2i.js";import"./Text-D7rZbanu.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
