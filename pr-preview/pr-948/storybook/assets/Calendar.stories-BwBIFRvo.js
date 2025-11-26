import{$ as p,a as m,r as l,j as d}from"./iframe-B_9EF7Dq.js";import{C as n}from"./Calendar-uXNpS2n0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ZZOErOLN.js";import"./Button-D9HkwZ_O.js";import"./utils-Nc7aiA8g.js";import"./clsx-B-dksMZM.js";import"./Hidden-xunvFULB.js";import"./useFocusRing-DIePChSt.js";import"./index-BjkNl2Dq.js";import"./index-D8NvM82z.js";import"./useLabels-61rfT5yO.js";import"./useButton-GH9EGPk7.js";import"./RSPContexts-Cr6NzFFP.js";import"./Text-2PCYJ-aQ.js";import"./useDateFormatter-BVl7E05R.js";import"./useControlledState-DTUVTQNc.js";import"./useLocalizedStringFormatter-DogZXGw9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C0aeSUiC.js";import"./useEvent--ga3OshJ.js";import"./getScrollParent-0FPuTBqt.js";import"./scrollIntoView-D3JBtAbF.js";import"./useDescription-BXSheREr.js";import"./VisuallyHidden-kz0xmvpU.js";import"./clsx-Ciqy0D92.js";import"./Button-v7hW0srN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DICAckaY.js";import"./createLucideIcon-CTuVUGjm.js";import"./chevron-right-D3ndY9Fx.js";import"./Heading-cGcChm89.js";import"./FieldError-BJK3SH0A.js";import"./Text-DKz7R1Y9.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
