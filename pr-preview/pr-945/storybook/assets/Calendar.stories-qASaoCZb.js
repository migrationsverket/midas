import{$ as p,a as m,r as l,j as d}from"./iframe-DTmGM0Lv.js";import{C as n}from"./Calendar-CAxgLL3w.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-NkxcsEec.js";import"./Button-DN-n-_G7.js";import"./utils-C-Csm_HJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaRTDRny.js";import"./useFocusRing-_YauK2g0.js";import"./index-9zDrbBb1.js";import"./index-DKIj2TXJ.js";import"./useLabels-C5zC1qPP.js";import"./useButton-brZar4lw.js";import"./RSPContexts-C1nPx2yc.js";import"./Text-Crv0LT4D.js";import"./useDateFormatter-D5Lt41tx.js";import"./useControlledState-BAsSmE__.js";import"./useLocalizedStringFormatter-D9SQN2sw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DBR83FR7.js";import"./useEvent-DBYFGLr3.js";import"./getScrollParent-w8StByxs.js";import"./scrollIntoView-BjH_T2Ul.js";import"./useDescription-99fnbxA2.js";import"./VisuallyHidden-BlCXdrZt.js";import"./clsx-Ciqy0D92.js";import"./Button-DVo1A0DB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D7G7Bxto.js";import"./createLucideIcon-IkfxPgvv.js";import"./chevron-right-BL8463aw.js";import"./Heading-CAk8AN96.js";import"./FieldError-D7K2RoId.js";import"./Text-Tc8CVOKC.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
