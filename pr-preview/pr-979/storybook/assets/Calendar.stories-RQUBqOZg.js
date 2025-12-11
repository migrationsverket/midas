import{$ as p,a as m,r as l,j as d}from"./iframe-16U0iwY4.js";import{C as n}from"./Calendar-CkA84z-p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-S3rI9Mug.js";import"./Button-DRn4Jt6C.js";import"./utils-HzU6u-g_.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvvsvPP1.js";import"./useFocusRing-D3YcX54s.js";import"./index-N6dO_YkP.js";import"./index-DC6p1BMI.js";import"./useLabels-bKWgMNMV.js";import"./useButton-CCTZIvr7.js";import"./RSPContexts-DYoqEBBs.js";import"./Text-gxhRT_ue.js";import"./useDateFormatter-3I9CgCi0.js";import"./useControlledState-BSv6ChRq.js";import"./useLocalizedStringFormatter-GF3ngx--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BFx2n-a6.js";import"./useEvent-Bm336BSb.js";import"./getScrollParent-CgsvthDN.js";import"./scrollIntoView-d806NCcg.js";import"./useDescription-DPN5nlm8.js";import"./VisuallyHidden-D6uRhZ1i.js";import"./clsx-Ciqy0D92.js";import"./Button-GEzK-q9q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-Q-0QRf.js";import"./createLucideIcon-DgqIWnhM.js";import"./chevron-right-C_Vghsu3.js";import"./Heading-C6Jk7UxJ.js";import"./FieldError-TXJxg1Qe.js";import"./Text-CYPHINAD.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
